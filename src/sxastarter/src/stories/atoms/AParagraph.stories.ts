import type { Meta, StoryObj } from '@storybook/react';
import AParagraph from 'components/controls/atoms/AParagraph';
const meta = {
    title: 'AParagraph',
    component: AParagraph,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AParagraph>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultAParagraph: Story = {
    args: {
      componentClass: "max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0",
      desc: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
    },
  };
  