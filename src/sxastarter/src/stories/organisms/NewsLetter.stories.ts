import type { Meta, StoryObj } from '@storybook/react';
import NewsLetter from 'components/NewsLetter';


const meta = {
    title: 'organisms/NewsLetter',
    component: NewsLetter,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof NewsLetter>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultNewsLetter: Story = {
    args: {
        fields : {
            NewsLetterItems: [
                {
                    "id": "537e5c72-dcaf-472a-8988-05148b65065d",
                    "url": "/Data/Accordion-Childs/Accordion-Child-1",
                    "name": "Accordion Child 1",
                    "displayName": "Accordion Child 1",
                    "fields": {
                        "AccordianTitle": {
                            "value": "How can I request a new browser?"
                        },
                        "AccordianDesc": {
                            "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\nrepellat amet doloribus consequuntur eos similique provident\ntempora voluptates iure quia fuga dicta voluptatibus culpa\nmollitia recusandae delectus id suscipit labore?"
                        }
                    }
                },                
            ]
        },
        params: {
            "ComponentClass": "container mx-auto px-6 mb-32",
            "AccordionContainerClass": "max-w-2xl m-8 mx-auto overflow-hidden",
            "FieldNames": "Default",
            "styles": " "
        }      
    },
  };
  