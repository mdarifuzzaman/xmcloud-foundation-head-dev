import {
  ComponentRendering,
  Field,
  Placeholder,
  Text,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    subHeading: Field<string>;
    enablePaging: Field<boolean>;
  };
  params: ComponentParams;
};

export const Default = (props: ContentBlockProps): JSX.Element => {
  const phKey = `sc-review-${props.params.DynamicPlaceholderId}`;
  return (
    <div className="row">
      <section className="small-12 columns home-trusted">
        <div className="body-content">
          <div className="row">
            <div className="small-12 large-7 small-centered text-center columns">
              <div className="h4">
                <Text field={props.fields.heading}></Text>
              </div>
              <RichText field={props.fields.subHeading}></RichText>
            </div>
          </div>

          <div
            className="row case-studiesCarousel slick-initialized slick-slider"
            data-equalizer=""
          >
            <div aria-live="polite" className="slick-list draggable">
              <div className="slick-track">
                <Placeholder name={phKey} rendering={props.rendering}></Placeholder>
              </div>
            </div>

            <button
              type="button"
              data-role="none"
              className="slick-prev"
              aria-label="previous"
              style={{ display: 'block' }}
            >
              <span>Previous</span>
            </button>
            <button
              type="button"
              data-role="none"
              className="slick-next"
              aria-label="next"
              style={{ display: 'block' }}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
