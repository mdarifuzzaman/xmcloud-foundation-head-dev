import { Engage, init } from '@sitecore/engage';

let engage: Engage;

const loadEngage = async () => {  
  engage = await init({
    clientKey: process.env.NEXT_PUBLIC_CDP_CLIENT_KEY || '', //'4b68aa42a5559c220ca6f1c107303615',
    targetURL: process.env.NEXT_PUBLIC_CDP_TARGET_URL || '', //'https://api-engage-ap.sitecorecloud.io​',
    pointOfSale:  process.env.POS, //'xmcloud-dev-collection',
    cookieDomain: window.location.host.replace(/^www\./, ''),
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
  });
};

loadEngage();

export { engage };
