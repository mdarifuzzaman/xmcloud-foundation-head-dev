import type { Meta, StoryObj } from '@storybook/react';
import FeaturePromo from 'components/FeaturePromo';

const meta = {
    title: 'organisms/FeaturePromo',
    component: FeaturePromo,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof FeaturePromo>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultFeaturePromo: Story = {
    args: {
      fields: {
        className: "h-6 ficon",
        image: {
            value: {
                src: 'https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-hero.svg?iar=0&hash=8D17EFD9B84B49180695157C9BA5F738',
                },
            },
        }
    },
  };