import type { Meta, StoryObj } from '@storybook/react';
import AInput from 'components/controls/atoms/AInput';

const meta = {
    title: 'atoms/AInput',
    component: AInput,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AInput>;
  
  export default meta;
  type Story = StoryObj<typeof AInput>;

  export const DefaultAInput : Story = {
    args: {
      className: "flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0",
      placeholder: "Enter your placeholder",
      type: "text",      
    }
  };

  export const AInputButton : Story = {
    args: {
      className: "inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90",
      type: "button",
      value: "Input button"      
    }
  };
  