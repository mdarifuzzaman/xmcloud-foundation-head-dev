import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Bootstrap from 'src/Bootstrap';

//import 'assets/main.scss';
import '../../public/css/style.css';
import Head from 'next/head';
import { publicUrl } from 'temp/config';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
    <Head>
      <script src={`${publicUrl}/js/moosend.js`}></script>
    </Head>
      <UserProvider>
        <Bootstrap {...pageProps} />
        <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
          <Component {...rest} />
        </I18nProvider>
      </UserProvider>
    </>
  );
}

export default App;
