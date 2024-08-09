/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
//@typescript-eslint/no-var-requires
import config from 'temp/config';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import Scripts from 'src/Scripts';
import StyleDocument from './Document';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import '../src/byoc/ByocPromo';


// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

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
  //console.log('Layout data', layoutData);
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
      <>
        {route && <Placeholder name="headless-header" rendering={route} />}  
        {route && <Placeholder name="headless-main" rendering={route} />}        
        {route && <Placeholder name="headless-footer" rendering={route} />}
      </>
      <>
        <SpeedInsights></SpeedInsights>
        <Analytics></Analytics>
      </>
    </>
  );
};

export default Layout;
