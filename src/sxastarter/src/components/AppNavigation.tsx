import { ANestedButton } from "./controls/atoms/AButtonGroup";
import ALink from "./controls/atoms/ALink";
import ALinkWithChildren from "./controls/atoms/ALinkWithChildren";
import ASpan from "./controls/atoms/ASpan";
import AMenu from "./controls/molecules/AMenu";
import { ComponentConsumerProps, Image, LinkField, withSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";

type AppNavigationProps = ComponentConsumerProps & {
  fields: {
    AppLogo: LinkField;
    Links: any;
  }
}

const AppNavigation = (props: AppNavigationProps): JSX.Element => {
  console.log("App nav", props);
  return (  
    <nav className="container relative mx-auto p-6">      
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30">
          <ALinkWithChildren url="/"><Image field={props.fields.AppLogo}></Image></ALinkWithChildren>
        </div>

        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          {props.fields.Links?.map((link: any, index: number) => (
            <ALink context={props.sitecoreContext} sitecoreLink={link} key={index} className="tracking-widest hover:text-softRed"></ALink>
          ))}          
        </div>


        <ANestedButton id="menu-btn" componentClass="z-30 block md:hidden focus:outline-none hamburger">
          <ASpan className="hamburger-top"></ASpan>
          <ASpan className="hamburger-middle"></ASpan>
          <ASpan className="hamburger-bottom"></ASpan>
        </ANestedButton>
      </div>
   
      <AMenu componentClass="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue">
        {props.fields.Links?.map((link: any, index: number) => (
              <div className="w-full py-3 text-center" key={index}>
                <ALink context={props.sitecoreContext} sitecoreLink={link} ></ALink>
              </div>
        ))}            
      </AMenu>
    </nav>
  );
};

export default withSitecoreContext()<AppNavigationProps>(AppNavigation);