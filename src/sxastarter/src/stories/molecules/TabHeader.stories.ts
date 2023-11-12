import type { Meta, StoryObj } from '@storybook/react';
import TabHeader from 'components/controls/molecules/TabHeader';

const meta = {
    title: 'TabHeader',
    component: TabHeader,  
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof TabHeader>;
  
  export default meta;
  type Story = StoryObj<typeof TabHeader>;

  export const DefaultTabHeader : Story = {
    args: {
     componentClass: "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab",
     componentSubClass: "py-5 border-b-4 border-softRed",
     dataTarget: "panel-1",
     title: "Simple Bookmarking"
    }
  };

  export const SecondaryTabHeader : Story = {
    args: {
     componentClass: "flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab",
     componentSubClass: "py-5",
     dataTarget: "panel-2",
     title: "Speedy Searching"
    }
  };
  