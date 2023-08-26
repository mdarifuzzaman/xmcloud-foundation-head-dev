/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import Scripts from 'src/Scripts';
import StyleDocument from './Document';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  console.log("Layout data", layoutData);
  return (
    <>      
      <Scripts />
      <StyleDocument></StyleDocument>
      <Head>
        
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="body-appContainer">
        <div className='row collapse'>
          <header>
            <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
          </header>
          <main>
            {route && <Placeholder name="headless-main" rendering={route} />}
          </main>
          <footer>
            <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
