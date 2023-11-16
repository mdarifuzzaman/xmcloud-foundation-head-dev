import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '../mock-pages/HomePage';

const meta = {
    title: 'HomePage',
    component: HomePage,  
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof HomePage>;
  
  export default meta;
  type Story = StoryObj<typeof HomePage>;

  export const DefaultHomePage : Story = {
    args: {
        footerFields: {
            fields: {
                "FooterLogo": {
                    "value": {
                        "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-bookmark-footer.svg?iar=0&hash=FCA5F31C0A156364E81AEB21ED5BAB3C",
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
                                    "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/icon-facebook.svg?iar=0&hash=07D40B808A9D80AEC0346A3F899FB8BF",
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
                                    "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/icon-twitter.svg?iar=0&hash=9DF7866F013366C4F74C38237D7D2E08",
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
        homePageFields: {
            AppLogo: {
                value: {
                    src: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-bookmark.svg?iar=0&hash=8FB63E8A6797794339DA687F807B92F1",
                    text: "App logo",
                    title: "App logo"
                }
            },
            Links: [
                {
                    "url": "/Features",
                    "name": "Features",
                    "displayName": "Features",
                    "fields": {
                        "ClassName": {
                            "value": "tracking-widest hover:text-softRed"
                        },
                        "Link": {
                            "value": {
                                "text": "Feature",                               
                                "href": "/Feature"
                            }
                        }
                    }
                },
                {                    
                    "url": "/Download",
                    "name": "Download",
                    "displayName": "Download",
                    "fields": {
                        "ClassName": {
                            "value": "tracking-widest hover:text-softRed"
                        },
                        "Link": {
                            "value": {
                                "text": "Download",                               
                                "href": "/Download"
                            }
                        }
                    }
                },
                {
                    "url": "/FAQ",
                    "name": "FAQ",
                    "displayName": "FAQ",
                    "fields": {
                        "ClassName": {
                            "value": "tracking-widest hover:text-softRed"
                        },
                        "Link": {
                            "value": {
                                "text": "Faq",                              
                                "href": "/Faq"
                            }
                        }
                    }
                },
                {
                    "url": "/Login",
                    "name": "Login",
                    "displayName": "Login",
                    "fields": {
                        "ClassName": {
                            "value": "px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
                        },
                        "Link": {
                            "value": {
                                "href": "http://",
                                "text": "Login",                               
                            }
                        }
                    }
                }
            ]
        },
        heroFields: {
            fields: {
                "Title": {
                    "value": " A Simple Bookmark Manager"
                },
                "Desc": {
                    "value": "A clean and simple interface to organize your favourite websites.\nOpen a new browser tab and see your sites load instantly. Try it for\nfree."
                },
                "Buttons": [
                    {
                        "id": "79557bd8-1fd3-41b7-9d1f-50bd90efc32f",
                        "url": "/Data/Buttons/Hero-Buttons/Firefox",
                        "name": "Firefox",
                        "displayName": "Firefox",
                        "fields": {
                            "ClassName": {
                                "value": "p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
                            },
                            "Title": {
                                "value": "Get It On Firefox"
                            },
                            "Url": {
                                "value": "#"
                            }
                        }
                    },
                    {
                        "id": "d85d3464-7e67-4131-b397-3d2561d2c38b",
                        "url": "/Data/Buttons/Hero-Buttons/Chrome",
                        "name": "Chrome",
                        "displayName": "Chrome",
                        "fields": {
                            "ClassName": {
                                "value": "p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                            },
                            "Title": {
                                "value": "Get It On Chrome"
                            },
                            "Url": {
                                "value": "#"
                            }
                        }
                    }
                ],
                "BackImage": {
                    "value": {
                        "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-hero.svg?iar=0&hash=8D17EFD9B84B49180695157C9BA5F738",
                        "alt": "hero"
                    }
                }
            },
            params: {
                "ComponentClass": "container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0",
                "BackgroundImageClass": "relative z-10 lg:top-24 xl:top-0 overflow-x-visible",
                "CacheClearingBehavior": "Clear on publish",
                "FooterClass": "relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2",
                "BodyClass": "flex flex-col space-y-10 lg:mt-16 lg:w-1/2",
                "FieldNames": "Default",
                "styles": " "
            },
            rendering: {
                componentName: "Hero Component",   
                uid: "{00000000-0000-0000-0000-000000000000}"         
            }
        },
        featureHeadingFields: {
            fields: {
                "Title": {
                    "value": "Features"
                },
                "Desc": {
                    "value": "Our aim is to make it quick and easy for you to access your favourite\nwebsites. Your bookmarks sync between your devices so you can access\nthem on the go"
                },                
            },
            params: {
                "CacheClearingBehavior": "Clear on publish",
                "ComponentClass": "container mx-auto mt-16 px-6",
                "PClass": "max-w-md mx-auto text-center text-grayishBlue",
                "H2Class": "mb-6 text-4xl font-semibold text-center",
                "FieldNames": "Default",
                "styles": " "
            }
        },
        tabsFields: {
            fields:{
                "HeaderComponents": [
                    {
                        "id": "ff46fafd-6b20-47ad-b0e7-40f192b7f5a3",
                        "url": "/Data/Tab-Header-Container/TabHeader1",
                        "name": "TabHeader1",
                        "displayName": "TabHeader1",
                        "fields": {
                            "ComponentSubClass": {
                                "value": "py-5 border-b-4 border-softRed"
                            },
                            "DataTarget": {
                                "value": "panel-1"
                            },
                            "ComponentClass": {
                                "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                            },
                            "Title": {
                                "value": "Simple Bookmarking"
                            }
                        }
                    },
                    {
                        "id": "90a53d46-c69a-493b-9981-cd3c329592af",
                        "url": "/Data/Tab-Header-Container/TabHeader2",
                        "name": "TabHeader2",
                        "displayName": "TabHeader2",
                        "fields": {
                            "ComponentSubClass": {
                                "value": "py-5"
                            },
                            "DataTarget": {
                                "value": "panel-2"
                            },
                            "ComponentClass": {
                                "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                            },
                            "Title": {
                                "value": "Speedy Searching"
                            }
                        }
                    },
                    {
                        "id": "e180d9bc-08b5-4b63-ba47-5f050bada903",
                        "url": "/Data/Tab-Header-Container/TabHeader3",
                        "name": "TabHeader3",
                        "displayName": "TabHeader3",
                        "fields": {
                            "ComponentSubClass": {
                                "value": "py-5"
                            },
                            "DataTarget": {
                                "value": "panel-3"
                            },
                            "ComponentClass": {
                                "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                            },
                            "Title": {
                                "value": "Easy Sharing"
                            }
                        }
                    }
                ],
                "PanelComponents": [
                    {
                        "id": "2b6ab6ec-9d81-4082-b6dd-9eb4f525a377",
                        "url": "/Data/Tab-Panel-Container/Panel1",
                        "name": "Panel1",
                        "displayName": "Panel1",
                        "fields": {
                            "ComponentClass": {
                                "value": "flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1"
                            },
                            "Title": {
                                "value": " Bookmark in one click"
                            },
                            "Desc": {
                                "value": "Organize your bookmarks however you like. Our simple\ndrag-and-drop interface gives you complete control over how you\nmanage your favourite sites."
                            },
                            "PanelImage": {
                                "value": {
                                    "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-1.svg?iar=0&hash=D43D9461F2F9D71A2DD49BAD0643A4A4",
                                    "alt": "sss"
                                }
                            },
                            "CtaTitle": {
                                "value": "More Info1"
                            }
                        }
                    },
                    {
                        "id": "b3bd23d2-c8c3-4fb5-bd74-55c914cf749b",
                        "url": "/Data/Tab-Panel-Container/Panel2",
                        "name": "Panel2",
                        "displayName": "Panel2",
                        "fields": {
                            "ComponentClass": {
                                "value": "flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2"
                            },
                            "Title": {
                                "value": "Intelligent search"
                            },
                            "Desc": {
                                "value": "Our powerful search feature will help you find saved sites in no\ntime at all. No need to trawl through all of your bookmarks."
                            },
                            "PanelImage": {
                                "value": {
                                    "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-2.svg?iar=0&hash=1BD4398C1A240DCE1DB47D61A631EC8A",
                                    "alt": "ddd"
                                }
                            },
                            "CtaTitle": {
                                "value": "More Info2"
                            }
                        }
                    },
                    {
                        "id": "11df81b6-9ecd-4775-a91f-70781e170ff4",
                        "url": "/Data/Tab-Panel-Container/Panel3",
                        "name": "Panel3",
                        "displayName": "Panel3",
                        "fields": {
                            "ComponentClass": {
                                "value": "flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3"
                            },
                            "Title": {
                                "value": "Share your bookmarks"
                            },
                            "Desc": {
                                "value": "Easily share your bookmarks and collections with others. Create\na shareable a link that you can send at the click of a button."
                            },
                            "PanelImage": {
                                "value": {
                                    "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-3.svg?iar=0&hash=E09259CBAE301CE7AB0E1E6FED41DCA4",
                                    "alt": "sss"
                                }
                            },
                            "CtaTitle": {
                                "value": "More Info3"
                            }
                        }
                    }
                ]
            },
            params: {
                "CacheClearingBehavior": "Clear on publish",
                "ComponentClass": "container relative mx-auto my-6 mb-32 mt-12 px-6",
                "OtherData": "bg-tabs",
                "FieldNames": "Default",
                "styles": " "
            }
        }
    }
  };
  