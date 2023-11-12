import {
  ComponentConsumerProps,
  ComponentRendering,
  Image,
  ImageField,
  RichTextField,
  Text,
  TextField,
  withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import AParagraph from './controls/atoms/AParagraph';
import AButton from './controls/atoms/AButton';
import AButtonGroup from './controls/atoms/AButtonGroup';

type ContentBlockProps = ComponentConsumerProps &{
  rendering: ComponentRendering;
  fields: {
    BackImage: ImageField;
    Buttons: any;
    Desc: RichTextField;
    Title: TextField;

  };
  params: any
};

const Hero = (props: ContentBlockProps): JSX.Element => {
  console.log('Hero', props);
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
    
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            <Text field={props.fields.Title}></Text>
          </h1>
          <AParagraph componentClass="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
            desc={props.fields.Desc.value}></AParagraph>

          <AButtonGroup componentClass="flex items-center justify-center w-full space-x-4 lg:justify-start">
            {props.fields.Buttons?.map((button: any, index: number) =>(
              <AButton key={index} className={button?.fields?.ClassName?.value} title={button?.fields?.Title?.value}></AButton>  
            ))}            
          </AButtonGroup>          
        </div>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          {props.sitecoreContext?.pageEditing? <Image field={props.fields?.BackImage}></Image> :
            <img src={props.fields.BackImage.value?.src} alt="" className={props.params.BackgroundImageClass} />
          }
        </div>
      </div>
    </section>
  );
};

export default withSitecoreContext()<ContentBlockProps>(Hero);
