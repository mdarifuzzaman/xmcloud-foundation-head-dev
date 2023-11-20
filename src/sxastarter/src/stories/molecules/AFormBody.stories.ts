import type { Meta, StoryObj } from '@storybook/react';
import FormBody from 'components/controls/molecules/FormBody';

const meta = {
    title: 'molecules/AFormBody',
    component: FormBody,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof FormBody>;
  
  export default meta;
  type Story = StoryObj<typeof FormBody>;

  export const DefaultFormBody : Story = {
    args: {
      className: ""
    }
  };
  