import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../../components/Hero';


const meta = {
    title: 'Hero',
    component: Hero,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Hero>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultHero: Story = {
    args: {
      rendering : {
            componentName: "Hero Component",   
            uid: "{00000000-0000-0000-0000-000000000000}"         
      },
      fields: {
        heading: {
          value: "Life as a Sitecore Developer Just Got Better!"
        },
        imageContent: {
          value: {
            src: 'https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/home-vdd.png?h=493&iar=0&w=1300&hash=39BA53AA8996F03E027BEA044815A222'
          }
        },
        primaryLink: {
          value: {
            href: "",
            title: "Free Trail",
            text: "Free Trail"
          }
        },
        secondaryLink: {
          value: {
            href: "",
            title: "Download",
            text: "Download"
          }
        },
        subHeading: {
          value: "Sitecore for Visual Stuio is a game changer for Sitecore 10.0"
        }
      }
    },
  };
  