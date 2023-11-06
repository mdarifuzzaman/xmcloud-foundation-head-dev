import type { Meta, StoryObj } from '@storybook/react';
import { Default } from 'components/Image';

const meta = {
    title: 'Image',
    component: Default,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Default>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Image: Story = {
    args: {
        params: {

        },   
      fields: {
        Image : {
            value: {
                src: ""
            }
        },
        ImageCaption: {
            value: "Sample image"
        },
        TargetUrl: {
            value : {
                href: "/Download",
                title: "Download",
                text: "Download"
            }
        }
      }
    },
  };
  