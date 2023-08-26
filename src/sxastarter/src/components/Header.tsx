import { ComponentRendering, Field, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { AppNavigation } from './AppNavigation';

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    imageContent: ImageField;
  };
};

const Header = (props: ContentBlockProps): JSX.Element => {
  return (
    <header className="header small-12 columns fixed">
      <div className="body-content">
        <div className="row collapse">
          <div className="small-12 columns">
            <div className="header-left">
              <a href="/"><Image field={props.fields.imageContent}></Image></a>
            </div>
            <div className="header-right">
              <AppNavigation></AppNavigation>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
