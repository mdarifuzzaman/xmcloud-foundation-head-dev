import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Bootstrap from 'src/Bootstrap';

//import 'assets/main.scss';
import '../../public/css/style.css';
import Head from 'next/head';
import { publicUrl } from 'temp/config';
import { IsSearchEnable, SEARCH_CONFIG } from 'src/common/search';
import { WidgetsProvider } from '@sitecore-search/react';
import { StorefrontProvider } from 'src/StorefrontContext';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  const SearchWrapper = ({ children }: any) => (IsSearchEnable() ? <WidgetsProvider {...SEARCH_CONFIG}>{children}</WidgetsProvider>: children);

  console.log("Search Enabled?", IsSearchEnable());
  return (
    <StorefrontProvider>      
    <SearchWrapper>
    <Head>
      <script src={`${publicUrl}/js/moosend.js`} async></script>
      <link rel="stylesheet" href={`${publicUrl}/css/bootstrap.min.css`} />     
      <link rel="stylesheet" href={`${publicUrl}/css/style.css`} /> 
    </Head>
      <UserProvider>
        <Bootstrap {...pageProps} />
        <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
          <Component {...rest} />
        </I18nProvider>
      </UserProvider>
    </SearchWrapper>
    </StorefrontProvider>      
  );
}

export default App;
