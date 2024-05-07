import { ANestedButton } from "./controls/atoms/AButtonGroup";
import ALink from "./controls/atoms/ALink";
import ALinkWithChildren from "./controls/atoms/ALinkWithChildren";
import ASpan from "./controls/atoms/ASpan";
import AMenu from "./controls/molecules/AMenu";
import { ComponentConsumerProps, LinkField, withSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";
import ImageComp from "./ImageComp";
import GlobalLink from "./GlobalLink";

type AppNavigationProps = ComponentConsumerProps & {
  fields: {
    AppLogo: LinkField;
    Links: any;
  }
}

const AppNavigation = (props: AppNavigationProps): JSX.Element => {
  //const router = useRouter();
  // const submitAction = (articleModel:  ArticleProps) => {
  //   // Track search event
  //   //tracker.TrackEvent('SEARCH', { keywords });
  //   router.push(articleModel.url + "").then(() => router.reload());
  // }

  // const submitQueryAction = (query:  string) => {
  //   // Track search event
  //   //tracker.TrackEvent('SEARCH', { keywords });
  //   router.push('/search?q=' + query).then(() => router.reload());
  // }

  return (  
    <nav className="container relative mx-auto p-6 z-50">      
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30">
          <ALinkWithChildren url="/">           
          <ImageComp imageData={{field: {
            value: {src: props.fields.AppLogo.value?.src + ""},
            editable: "true"
          }, src: props.fields.AppLogo.value?.src + ""}} sitecoreContext={props.sitecoreContext}></ImageComp>
          {/* {props.sitecoreContext.pageEditing ? <Image field={props.fields.AppLogo}></Image> : <img src={ "/au/-/" + new URL(props.fields.AppLogo.value?.src + "").pathname }></img>} </ALinkWithChildren> */}
          </ALinkWithChildren>
          <GlobalLink></GlobalLink>
        </div>
        <div>
        {/* <Search_Preview_CssWidget rfkId="rfkid_6" defaultItemsPerPage={6} itemRedirectionHandler={submitAction} submitRedirectionHandler={submitQueryAction}></Search_Preview_CssWidget> */}
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