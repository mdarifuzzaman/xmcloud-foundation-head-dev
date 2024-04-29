import { NextRequest, NextResponse } from 'next/server';
import { MultisiteMiddleware } from '@sitecore-jss/sitecore-jss-nextjs/middleware';
import { siteResolver } from 'lib/site-resolver';
import { MiddlewarePlugin } from '..';

/**
 * This is the multisite middleware plugin for Next.js.
 * It is used to enable Sitecore multisite in Next.js.
 *
 * The `MultisiteMiddleware` will
 *  1. Based on provided hostname and sites information, resolve site.
 *  2. Rewrite the response to the specific site.
 *  3. Set `sc_site` cookie with site name and `x-sc-rewrite` header with rewritten path to be reused in following middlewares.
 */
class MultisitePlugin implements MiddlewarePlugin {
  private multisiteMiddleware: MultisiteMiddleware;

  // Multisite middleware has to be executed first
  order = -1;

  constructor() {
    this.multisiteMiddleware = new MultisiteMiddleware({
      // This function determines if a route should be excluded from site resolution.
      // Certain paths are ignored by default (e.g. files and Next.js API routes), but you may wish to exclude more.
      // This is an important performance consideration since Next.js Edge middleware runs on every request.
      excludeRoute: () => false,
      // Site resolver implementation
      siteResolver,
      // This function allows resolving site from sc_site cookie, which could be useful in case of Vercel preview URLs. Accepts NextRequest.
      useCookieResolution: () => true,
    });
  }

  private getLanguageFromPathname = (pathname: string, locales: string[]): string => {
    const parts = pathname.split('/');
    const localePart = parts[2]; // assuming pathname format is always /<countrycode>/<locale>/components/**
    console.log("parts", JSON.stringify(parts));
    console.log("localePart", localePart);
    if (locales.includes(localePart)) {
        return localePart;
    } else {
        return 'en';
    }
  }

  private checkForValidRequestType = (pathname: string): boolean => {
    if(pathname.includes(".css") || pathname.includes(".js") || pathname.includes("[object%20Object]")) return false;
      return true;
  }

  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {

    if(!this.checkForValidRequestType(req.nextUrl.pathname)) {
      console.log("Escaping the middleware parsing because of the: ", req.nextUrl.pathname);
      return this.multisiteMiddleware.getHandler()(req, res);
    }

    const cookieValue = req.cookies.get('sc_site');
    const countryCode = req.nextUrl.pathname.substring(1,3);
    const locale = req.nextUrl.locale;
    console.log("req.nextUrl ->",req.nextUrl )

    console.log(`RouteName ==> ${JSON.stringify(req.nextUrl.pathname)}`);
    console.log(`countryCode ==> ${JSON.stringify(countryCode)}`);
    console.log(`localeLang before ==> ${JSON.stringify(locale)}`);
    console.log(`sc_site before ==> ${JSON.stringify(cookieValue)}`);

    switch (countryCode) {      
      case 'jp':
        req.cookies.set('sc_site', 'sitecore-dev-collection-jp');
        break;
      default:
        req.cookies.set('sc_site', 'sitecore-dev-collection');
        break;
    };

    const locales = ['en', 'ja-JP'];
    const modifiedLocale = this.getLanguageFromPathname(req.nextUrl.pathname, locales);
    console.log("modifiedLocale", modifiedLocale);
    req.nextUrl.locale = modifiedLocale;

    console.log(`localeLang after ==> ${JSON.stringify(req.nextUrl.locale)}`);
    console.log(`sc_site after ==> ${JSON.stringify(req.cookies.get('sc_site'))}`);

    return this.multisiteMiddleware.getHandler()(req, res);
  }
}

export const multisitePlugin = new MultisitePlugin();
