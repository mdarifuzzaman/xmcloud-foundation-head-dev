import type { Meta, StoryObj } from '@storybook/react';
import ALink from 'components/controls/atoms/ALink';

const meta = {
    title: 'atoms/ALink',
    component: ALink,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof ALink>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultALink: Story = {
    args: {
      context: undefined,
      className: "",
      sitecoreLink : {
        displayName: "dddd sd",
        fields: {
            Link: {
                value: {
                    href: "download"                    
                }
            },
            ClassName: {
                value: "tracking-widest hover:text-softRed"
            }
        }
      }
    },
  };
  