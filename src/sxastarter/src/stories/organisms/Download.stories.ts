import type { Meta, StoryObj } from '@storybook/react';
import Download from 'components/Download';


const meta = {
    title: 'Download',
    component: Download,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Download>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultDownload: Story = {
    args: {
        fields : {
            CtaBanners: [
                {
                    "id": "e21074e8-b76b-4b49-bfbe-714b27b3bc03",
                    "url": "/Data/Banner-Container/Banner1",
                    "name": "Banner1",
                    "displayName": "Banner1",
                    "fields": {
                        "ComponentClass": {
                            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
                        },
                        "CtaButtonClass": {
                            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                        },
                        "Image": {
                            "value": {
                                "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-chrome.svg?iar=0&hash=0D013447FEA100B87F6E82AFC0A6E80E",
                                "alt": "dd"
                            }
                        },
                        "DivClass": {
                            "value": ""
                        },
                        "CtaTitle": {
                            "value": "Add Install Extension"
                        },
                        "SubTitle": {
                            "value": "Minimum Version 62"
                        },
                        "Title": {
                            "value": "Add to Chrome"
                        }
                    }
                },
                {
                    "id": "fcb2ffba-650d-4d51-8751-9610f9588271",
                    "url": "/Data/Banner-Container/Banner2",
                    "name": "Banner2",
                    "displayName": "Banner2",
                    "fields": {
                        "ComponentClass": {
                            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
                        },
                        "CtaButtonClass": {
                            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                        },
                        "Image": {
                            "value": {
                                "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-firefox.svg?iar=0&hash=83380DD2B92F90D35BD766F83335D15E",
                                "alt": "ddd"
                            }
                        },
                        "DivClass": {
                            "value": "w-full md:w-1/3"
                        },
                        "CtaTitle": {
                            "value": "Add Install Extension"
                        },
                        "SubTitle": {
                            "value": "Minimum Version 62"
                        },
                        "Title": {
                            "value": "Add to Chrome"
                        }
                    }
                },
                {
                    "id": "2e277872-6005-460f-927f-178ee41c3a1e",
                    "url": "/Data/Banner-Container/Banner3",
                    "name": "Banner3",
                    "displayName": "Banner3",
                    "fields": {
                        "ComponentClass": {
                            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
                        },
                        "CtaButtonClass": {
                            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                        },
                        "Image": {
                            "value": {
                                "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-opera.svg?iar=0&hash=6AB5ECD402EABC22ED979CD1421238AD",
                                "alt": "dd"
                            }
                        },
                        "DivClass": {
                            "value": "w-full md:w-1/3"
                        },
                        "CtaTitle": {
                            "value": "Add Install Extension"
                        },
                        "SubTitle": {
                            "value": "Minimum Version 62"
                        },
                        "Title": {
                            "value": "Add to Chrome"
                        }
                    }
                }
            ]
        },
        params: {
            "ComponentClass": "relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row",
            "FieldNames": "Default",
            "styles": " "
        }      
    },
  };
  