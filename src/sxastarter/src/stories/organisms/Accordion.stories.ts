import type { Meta, StoryObj } from '@storybook/react';
import Accordion from 'components/Accordion';


const meta = {
    title: 'Accordion',
    component: Accordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Accordion>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultAccordion: Story = {
    args: {
        fields : {
            AccodionChild: [
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
                {
                    "id": "a899c69f-10d5-4ba7-92b1-107912cd10ce",
                    "url": "/Data/Accordion-Childs/Accordion-Child-2",
                    "name": "Accordion Child 2",
                    "displayName": "Accordion Child 2",
                    "fields": {
                        "AccordianTitle": {
                            "value": "Is ther a mobile app?"
                        },
                        "AccordianDesc": {
                            "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\nrepellat amet doloribus consequuntur eos similique provident\ntempora voluptates iure quia fuga dicta voluptatibus culpa\nmollitia recusandae delectus id suscipit labore?"
                        }
                    }
                },
                {
                    "id": "adc1f113-d7cd-4c0e-acae-351a6fbf8337",
                    "url": "/Data/Accordion-Childs/Accordion-Child-3",
                    "name": "Accordion Child 3",
                    "displayName": "Accordion Child 3",
                    "fields": {
                        "AccordianTitle": {
                            "value": "What about other Chromium browsers"
                        },
                        "AccordianDesc": {
                            "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\nrepellat amet doloribus consequuntur eos similique provident\ntempora voluptates iure quia fuga dicta voluptatibus culpa\nmollitia recusandae delectus id suscipit labore?"
                        }
                    }
                }
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
  