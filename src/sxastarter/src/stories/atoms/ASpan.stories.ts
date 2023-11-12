import type { Meta, StoryObj } from '@storybook/react';
import ASpan from 'components/controls/atoms/ASpan';

const meta = {
    title: 'ASpan',
    component: ASpan,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof ASpan>;
  
  export default meta;
  type Story = StoryObj<typeof ASpan>;

  export const DefaultASpan : Story = {
    args: {
      className: "hamburger-top"
    }
  };
  