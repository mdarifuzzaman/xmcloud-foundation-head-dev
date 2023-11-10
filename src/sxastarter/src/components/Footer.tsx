import {
  ComponentConsumerProps,
  ComponentRendering,
  Image,
  ImageField,
  withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import ALink from './controls/atoms/ALink';
import ALinkWithChildren from './controls/atoms/ALinkWithChildren';
import AImage from './controls/atoms/AImage';

type ContentBlockProps = ComponentConsumerProps & {
  rendering: ComponentRendering;
  fields: {
    FooterLogo: ImageField;
    Links: any;
    Socials: any;
  };
};

const Footer = (props: ContentBlockProps): JSX.Element => {
  console.log("Footer", props);
  return (
    <footer className="py-16 bg-veryDarkBlue">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">

        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">          
          <Image field={props.fields.FooterLogo}></Image>
          {props.fields?.Links?.map((link: any, index: number) => (
            <ALink key={index} context={props.sitecoreContext} sitecoreLink={link}></ALink>
          ))}
        </div>

        <div className="flex space-x-10">
          {props.fields?.Socials?.map((social: any, index: number) => (
            <ALinkWithChildren key={index} url={social.fields?.Link?.value?.href}>
              {/* <img src={social.fields.Image?.value?.src} alt="" className="h-6 ficon" /> */}
              <AImage context={props.sitecoreContext} image={social}></AImage>
            </ALinkWithChildren>
          ))}          
        </div>
      </div>
    </footer>
  );
};

export default withSitecoreContext()<ContentBlockProps>(Footer);
