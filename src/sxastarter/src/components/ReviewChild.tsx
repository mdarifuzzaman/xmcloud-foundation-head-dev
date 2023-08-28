import { ComponentRendering, Field, LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

type ComponentProps = {
  rendering: ComponentRendering;
  fields: {
    comments: Field<string>;
    author: Field<string>;
    hiden: Field<boolean>;
    index: Field<number>;
  };
  layoutData: LayoutServiceData;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <>
        <div
          className="small-12 medium-6 large-6 columns slick-slide slick-cloned"            
          style={{ width: '469px' }}
        >
          <div
            className="case-studiesCarousel__quote"
            data-equalizer-watch
            style={{ height: '334px' }}
          >
            <RichText field={props.fields.comments}></RichText>
          </div>

          <div className="case-studiesCarousel__author">
            <RichText field={props.fields.author}></RichText>
          </div>
        </div>
    </>
  );
};
