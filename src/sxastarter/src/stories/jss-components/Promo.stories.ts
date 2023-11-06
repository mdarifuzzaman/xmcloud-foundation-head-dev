import type { Meta, StoryObj } from '@storybook/react';
import * as Promo from '../../components/Promo';


const meta = {
    title: 'PromoDefault',
    component: Promo.Default,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Promo.Default>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultPromo: Story = {
    args: {
      params : {

      },
      fields: {        
        PromoIcon: {
          value: {
            src: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/clock_225x225.png?h=225&iar=0&w=225&hash=4B2278B82510E2052F535F60BEF4EE3C"
          }
        },
        PromoLink: {
          value: {
            href: "/Download",
            title: "TDS Classic"
          }
        },
        PromoText: {
          value: "Save Time On Sitecore Development"
        },
        PromoText2: {
          value: "Hate doing the same thing over and over? So do we. Our tools are all focused on improving productivity and reducing time spent on stupid stuff. As developers ourselves, we take pride in knowing our tools will help development teams work more smoothly and efficiently together."
        }
      }
    },
  };
  
  type WithTextStory = StoryObj<typeof Promo.WithText>;
  export const WithTextPromo: WithTextStory = {
    args: {
      params : {

      },
      fields: {        
        PromoIcon: {
          value: {
            src: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/clock_225x225.png?h=225&iar=0&w=225&hash=4B2278B82510E2052F535F60BEF4EE3C"
          }
        },
        PromoLink: {
          value: {
            href: "/Download",
            title: "TDS Classic"
          }
        },
        PromoText: {
          value: "Save Time On Sitecore Development"
        },
        PromoText2: {
          value: "Hate doing the same thing over and over? So do we. Our tools are all focused on improving productivity and reducing time spent on stupid stuff. As developers ourselves, we take pride in knowing our tools will help development teams work more smoothly and efficiently together."
        }
      }
    },
  };
  

  type WithSitecoreDevPromoStoryStory = StoryObj<typeof Promo.WithSitecoreDevPromo>;
  export const WithSitecoreDevPromoStoryStory: WithSitecoreDevPromoStoryStory = {
    args: {
      params : {

      },
      fields: {        
        PromoIcon: {
          value: {
            src: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/clock_225x225.png?h=225&iar=0&w=225&hash=4B2278B82510E2052F535F60BEF4EE3C"
          }
        },
        PromoLink: {
          value: {
            href: "/Download",
            title: "TDS Classic"
          }
        },
        PromoText: {
          value: "Save Time On Sitecore Development"
        },
        PromoText2: {
          value: "Hate doing the same thing over and over? So do we. Our tools are all focused on improving productivity and reducing time spent on stupid stuff. As developers ourselves, we take pride in knowing our tools will help development teams work more smoothly and efficiently together."
        }
      }
    },
  };
  