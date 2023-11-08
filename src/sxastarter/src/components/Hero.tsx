import {
  ComponentRendering,
  Field,
  ImageField,
  Link,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import AParagraph from './controls/AParagraph';
import AButtonGrooup from './controls/AButtonGrooup';
import AButton from './controls/AButton';

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    subHeading: Field<string>;
    imageContent: ImageField;
    primaryLink: LinkField;
    secondaryLink: LinkField;
  };
};

const Hero = (props: ContentBlockProps): JSX.Element => {
  console.log('Hero', props);
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
    
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <AParagraph componentClass='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'
            desc='A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.'></AParagraph>

          <AButtonGrooup componentClass='flex items-center justify-center w-full space-x-4 lg:justify-start'>
            <AButton className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue' title='Get It On Chrome'></AButton>
            <AButton className='p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600' title='Get It On Firefox'></AButton>
          </AButtonGrooup>          
        </div>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img src="images/illustration-hero.svg" alt="" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
