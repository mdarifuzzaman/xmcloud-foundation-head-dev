import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../../components/Hero';


const meta = {
    title: 'Hero',
    component: Hero,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Hero>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultHero: Story = {
    args: {
      rendering : {
            componentName: "Hero Component",   
            uid: "{00000000-0000-0000-0000-000000000000}"         
      },
      fields: {
        Desc: {
          value: "Life as a Sitecore Developer Just Got Better!"
        },
        Title: {
          value: "This is a promo title"
        },
        BackImage: {
          value: {
            src: 'https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/illustration-hero.svg?iar=0&hash=8D17EFD9B84B49180695157C9BA5F738'
          }
        },        
        Buttons: [
          {
            fields: {                
                ClassName: {
                  value: "p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
                },
                Url: {
                  value: "#"
                },
                Title: {
                  value: "Get It On Chrome"
                }              
            }
          },
          {
            fields: {                
                ClassName: {
                  value: "p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
                },
                Url: {
                  value: "#"
                },
                Title: {
                  value: "Get It On Firefox"
                }              
            }
          }
        ]          
        
      },
      params: {
        BackgroundImageClass: "relative z-10 lg:top-24 xl:top-0 overflow-x-visible",
        ComponentClass: "container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0",
        BodyClass: "flex flex-col space-y-10 lg:mt-16 lg:w-1/2",
        FooterClass: "relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2"
      }
    },
  };
  