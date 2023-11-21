import type { Meta, StoryObj } from '@storybook/react';
import Tabs from 'components/Tabs';


const meta = {
    title: 'organisms/Tabs',
    component: Tabs,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Tabs>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultTabs: Story = {
    args: {
      fields: {
        HeaderComponents: [
            {
                "id": "ff46fafd-6b20-47ad-b0e7-40f192b7f5a3",
                "url": "/Data/Tab-Header-Container/TabHeader1",
                "name": "TabHeader1",
                "displayName": "TabHeader1",
                "fields": {
                    "Title": {
                        "value": "Simple Bookmarking"
                    },
                    "ComponentClass": {
                        "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    },
                    "ComponentSubClass": {
                        "value": "py-5 border-b-4 border-softRed"
                    },
                    "DataTarget": {
                        "value": "panel-1"
                    }
                }
            },
            {
                "id": "90a53d46-c69a-493b-9981-cd3c329592af",
                "url": "/Data/Tab-Header-Container/TabHeader2",
                "name": "TabHeader2",
                "displayName": "TabHeader2",
                "fields": {
                    "Title": {
                        "value": "Speedy Searching"
                    },
                    "ComponentClass": {
                        "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    },
                    "ComponentSubClass": {
                        "value": "py-5"
                    },
                    "DataTarget": {
                        "value": "panel-2"
                    }
                }
            },
            {
                "id": "e180d9bc-08b5-4b63-ba47-5f050bada903",
                "url": "/Data/Tab-Header-Container/TabHeader3",
                "name": "TabHeader3",
                "displayName": "TabHeader3",
                "fields": {
                    "Title": {
                        "value": "Easy Sharing"
                    },
                    "ComponentClass": {
                        "value": "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    },
                    "ComponentSubClass": {
                        "value": "py-5"
                    },
                    "DataTarget": {
                        "value": "panel-3"
                    }
                }
            }
        ],
        PanelComponents: [
            {
                "id": "2b6ab6ec-9d81-4082-b6dd-9eb4f525a377",
                "url": "/Data/Tab-Panel-Container/Panel1",
                "name": "Panel1",
                "displayName": "Panel1",
                "fields": {
                    "PanelImage": {
                        "value": {
                            "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-1.svg?iar=0&hash=39D2A70DA6D6796492E4B81030F2AEA8",
                            "alt": "sss"
                        }
                    },
                    "ComponentClass": {
                        "value": "flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1"
                    },
                    "CtaTitle": {
                        "value": "More Info1"
                    },
                    "Desc": {
                        "value": "Organize your bookmarks however you like. Our simple\r\ndrag-and-drop interface gives you complete control over how you\r\nmanage your favourite sites."
                    },
                    "Title": {
                        "value": " Bookmark in one click"
                    }
                }
            },
            {
                "id": "b3bd23d2-c8c3-4fb5-bd74-55c914cf749b",
                "url": "/Data/Tab-Panel-Container/Panel2",
                "name": "Panel2",
                "displayName": "Panel2",
                "fields": {
                    "PanelImage": {
                        "value": {
                            "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-2.svg?iar=0&hash=3861FC13F20472958BCC9EF087C37993",
                            "alt": "ddd"
                        }
                    },
                    "ComponentClass": {
                        "value": "flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2"
                    },
                    "CtaTitle": {
                        "value": "More Info2"
                    },
                    "Desc": {
                        "value": "Our powerful search feature will help you find saved sites in no\r\ntime at all. No need to trawl through all of your bookmarks."
                    },
                    "Title": {
                        "value": "Intelligent search"
                    }
                }
            },
            {
                "id": "11df81b6-9ecd-4775-a91f-70781e170ff4",
                "url": "/Data/Tab-Panel-Container/Panel3",
                "name": "Panel3",
                "displayName": "Panel3",
                "fields": {
                    "PanelImage": {
                        "value": {
                            "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-3.svg?iar=0&hash=3F557D593D55C6121EF0FDD455C06F3C",
                            "alt": "sss"
                        }
                    },
                    "ComponentClass": {
                        "value": "flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3"
                    },
                    "CtaTitle": {
                        "value": "More Info3"
                    },
                    "Desc": {
                        "value": "Easily share your bookmarks and collections with others. Create\r\na shareable a link that you can send at the click of a button."
                    },
                    "Title": {
                        "value": "Share your bookmarks"
                    }
                }
            }
        ]
      },
      params: {
        componentClass: "container relative mx-auto my-6 mb-32 mt-12 px-6"
      }
    },
  };
  