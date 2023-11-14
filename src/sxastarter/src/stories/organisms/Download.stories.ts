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
                                "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-chrome.svg?iar=0&hash=EF0F864F6A3D1109E13555B709074153",
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
                                "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-firefox.svg?iar=0&hash=501BDBB3F0663B583B386277619A2C50",
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
                                "src": "https://xmcloudcm.localhost/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-opera.svg?iar=0&hash=C957628553BC4A156EE7982DF5F8497B",
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
  