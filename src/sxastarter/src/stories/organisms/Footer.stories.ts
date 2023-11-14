import type { Meta, StoryObj } from '@storybook/react';
import Footer from 'components/Footer';

const meta = {
    title: 'Footer',
    component: Footer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Footer>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultFooter: Story = {
    args: {
      fields: {
        "FooterLogo": {
            "value": {
                "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-bookmark-footer.svg?iar=0&hash=FCA5F31C0A156364E81AEB21ED5BAB3C",
                "alt": "footer"
            }
        },
        "Links": [
            {
                "id": "ce1c66cc-468b-4ee1-895d-0f5ac0be159b",
                "url": "/Data/Links/AppNavigation/Features",
                "name": "Features",
                "displayName": "Features",
                "fields": {
                    "ClassName": {
                        "value": "tracking-widest hover:text-softRed"
                    },
                    "Link": {
                        "value": {
                            "text": "Feature",
                            "anchor": "",
                            "linktype": "internal",
                            "class": "",
                            "title": "",
                            "target": "",
                            "querystring": "",
                            "id": "{A523289E-5C46-4655-A2EE-4FDAEBB938E4}",
                            "href": "/Feature"
                        }
                    }
                }
            },
            {
                "id": "6d05d0c3-9045-4f0d-839a-699a5c199875",
                "url": "/Data/Links/AppNavigation/Download",
                "name": "Download",
                "displayName": "Download",
                "fields": {
                    "ClassName": {
                        "value": "tracking-widest hover:text-softRed"
                    },
                    "Link": {
                        "value": {
                            "text": "Download",
                            "anchor": "",
                            "linktype": "internal",
                            "class": "",
                            "title": "",
                            "target": "",
                            "querystring": "",
                            "id": "{311F0458-AD7B-41A5-BFE8-C86C2DDBF8FD}",
                            "href": "/Download"
                        }
                    }
                }
            },
            {
                "id": "03b9f338-cb3a-4df8-90d9-36a39065ea5a",
                "url": "/Data/Links/AppNavigation/FAQ",
                "name": "FAQ",
                "displayName": "FAQ",
                "fields": {
                    "ClassName": {
                        "value": "tracking-widest hover:text-softRed"
                    },
                    "Link": {
                        "value": {
                            "text": "Faq",
                            "anchor": "",
                            "linktype": "internal",
                            "class": "",
                            "title": "",
                            "target": "",
                            "querystring": "",
                            "id": "{5E414AE9-5407-4047-BF2D-932F50D95BCC}",
                            "href": "/Faq"
                        }
                    }
                }
            }
        ],
        "Socials": [
            {
                "id": "78580138-d026-4edc-a8fe-e4f533972ef1",
                "url": "/Data/Social-Links/facebook",
                "name": "facebook",
                "displayName": "facebook",
                "fields": {
                    "Link": {
                        "value": {
                            "href": "http://www.facebook.com",
                            "text": "facebook",
                            "linktype": "external",
                            "url": "http://www.facebook.com",
                            "anchor": "",
                            "target": ""
                        }
                    },
                    "Image": {
                        "value": {
                            "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/icon-facebook.svg?iar=0&hash=07D40B808A9D80AEC0346A3F899FB8BF",
                            "alt": "facebook"
                        }
                    },
                    "ClassName": {
                        "value": "h-6 ficon"
                    }
                }
            },
            {
                "id": "b7b22917-43f6-41dc-ba83-5780750a293a",
                "url": "/Data/Social-Links/twitter",
                "name": "twitter",
                "displayName": "twitter",
                "fields": {
                    "Link": {
                        "value": {
                            "href": "http://www.twitter.com",
                            "text": "Twitter",
                            "linktype": "external",
                            "url": "http://www.twitter.com",
                            "anchor": "",
                            "target": ""
                        }
                    },
                    "Image": {
                        "value": {
                            "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/icon-twitter.svg?iar=0&hash=9DF7866F013366C4F74C38237D7D2E08",
                            "alt": "tw"
                        }
                    },
                    "ClassName": {
                        "value": "h-6 ficon"
                    }
                }
            }
        ]
     },
     rendering : {
        componentName: "Footer Component",   
        uid: "{00000000-0000-0000-0000-000000000000}"         
  },
    },
  };
  