import type { Meta, StoryObj } from '@storybook/react';
import CtaBanner from 'components/controls/molecules/CtaBanner';

const meta = {
    title: 'CtaBanner',
    component: CtaBanner,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof CtaBanner>;
  
  export default meta;
  type Story = StoryObj<typeof CtaBanner>;

  export const DefaultCtaBanner : Story = {
    args: {
      componentClassName: "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3",
      ctaButtonClassName : "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue",
      ctaTitle: "Add Install Extension",
      imgSrc: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-chrome.svg?iar=0&hash=0D013447FEA100B87F6E82AFC0A6E80E",
      subTitle: "Minimum Version 62",
      title: "Add to Chrome"
    }
  };
  