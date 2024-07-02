import { Engage, init } from '@sitecore/engage';

let engage: Engage;

const loadEngage = async () => {
  engage = await init({
    clientKey: '4b68aa42a5559c220ca6f1c107303615',
    targetURL: 'https://api-engage-ap.sitecorecloud.io​',
    pointOfSale: 'xmcloud-dev-collection',
    cookieDomain: window.location.host.replace(/^www\./, ''),
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
  });
};

loadEngage();

export { engage };
