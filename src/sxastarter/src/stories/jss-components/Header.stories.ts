import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../components/Header';

const meta = {
    title: 'Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Header>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultHeader: Story = {
    args: {
      rendering : {
            componentName: "Header Component",   
            uid: "{00000000-0000-0000-0000-000000000000}"         
      },
      fields: {
        heading: {
            value: "Heading"
        },
        imageContent: {
            value: {
                src:"https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo.png?h=55&iar=0&w=229&hash=3A0BF45AF45196E6447C2761D812A784"
            }
        }
      }
    },
  };
  