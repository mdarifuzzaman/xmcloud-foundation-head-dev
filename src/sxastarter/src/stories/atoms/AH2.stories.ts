import type { Meta, StoryObj } from '@storybook/react';
import AH2 from 'components/controls/atoms/AH2';

const meta = {
    title: 'atoms/AH2',
    component: AH2,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AH2>;
  
  export default meta;
  type Story = StoryObj<typeof AH2>;

  export const DefaultAH2 : Story = {
    args: {
      className: "px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl text-black",
      children: "This is a sample H2 element",      
    }
  };
  