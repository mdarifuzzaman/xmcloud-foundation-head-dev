import type { Meta, StoryObj } from '@storybook/react';
import AImage from 'components/controls/atoms/AImage';

const meta = {
    title: 'AImage',
    component: AImage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AImage>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultAImage: Story = {
    args: {
      context: undefined,
      image: {
        fields: {
            Image: {
                value: {
                    src: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-hero.svg?iar=0&hash=8D17EFD9B84B49180695157C9BA5F738"
                }
            }
        }
      }     
    },
  };
  