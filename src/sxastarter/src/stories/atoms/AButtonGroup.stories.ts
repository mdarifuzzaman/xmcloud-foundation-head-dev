import type { Meta, StoryObj } from '@storybook/react';
import AButtonGroup from 'components/controls/atoms/AButtonGroup';

const meta = {
    title: 'AButtonGroup',
    component: AButtonGroup,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof AButtonGroup>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultAButtonGroup: Story = {
    args: {
      componentClass: "",
      children: null,
      id: ""      
    },
  };
  