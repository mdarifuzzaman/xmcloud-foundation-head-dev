import type { Meta, StoryObj } from '@storybook/react';
import AButton from 'components/controls/atoms/AButton';

const meta = {
    title: 'atoms/AButton',
    component: AButton,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AButton>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultAButton: Story = {
    args: {
       className: "p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600",
       title: "A sample button"
    },
  };
  export const AButtonBlue: Story = {
    args: {
       className: "p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue",
       title: "A sample button"
    },
  };
  