import type { Meta, StoryObj } from '@storybook/react';
import Heading from 'components/controls/molecules/Heading';

const meta = {
    title: 'AHeading',
    component: Heading,  
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Heading>;
  
  export default meta;
  type Story = StoryObj<typeof Heading>;

  export const DefaultHeading : Story = {
    args: {
     componentClass: "container mx-auto mt-16 px-6",
     h2Class: "mb-6 text-4xl font-semibold text-center",
     pClass: "max-w-md mx-auto text-center text-grayishBlue",
     desc: "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go",
     title: "Features"
    }
  };
  