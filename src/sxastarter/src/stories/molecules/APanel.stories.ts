import type { Meta, StoryObj } from '@storybook/react';
import APanel from 'components/controls/molecules/APanel';

const meta = {
    title: 'molecules/APanel',
    component: APanel,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof APanel>;
  
  export default meta;
  type Story = StoryObj<typeof APanel>;

  export const DefaultAPanel : Story = {
    args: {
      componentClass: "flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1",
      ctaTitle: "More Info1",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      panelImage: "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-features-tab-1.svg?iar=0&hash=39D2A70DA6D6796492E4B81030F2AEA8",
      title: " Bookmark in one click"
    }
  };
  