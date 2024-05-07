import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Bootstrap from 'src/Bootstrap';

//import 'assets/main.scss';
import '../../public/css/style.css';
import '../../public/css/search_results.css';
import '../../public/css/search_preview_styles.css';

import Head from 'next/head';
import { publicUrl } from 'temp/config';
import { IsSearchEnable, SEARCH_CONFIG } from 'src/common/search';
import { WidgetsProvider } from '@sitecore-search/react';
// import { StorefrontProvider } from 'src/StorefrontContext';

import { createTheme } from '@sitecore-search/ui'
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#F00',
      light: '#EEECFB',
      dark: '#4A37D5',
      contrastText: '#fff',
    },
  }
});

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  

  const SearchWrapper = ({ children }: any) => (IsSearchEnable() ? <div style={myTheme.style}><WidgetsProvider {...SEARCH_CONFIG}>{children}</WidgetsProvider></div>: children);

  console.log("Search Enabled?", IsSearchEnable());
  return (
    // <StorefrontProvider>      
    <SearchWrapper>
    <Head>
      <script src={`${publicUrl}/js/moosend.js`} async></script>
    </Head>
      <UserProvider>
        <Bootstrap {...pageProps} />
        <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
          <Component {...rest} />
        </I18nProvider>
      </UserProvider>
    </SearchWrapper>
    // </StorefrontProvider>      
  );
}

export default App;
