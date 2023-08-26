import {
  ComponentParams,
  ComponentRendering,
  Field,
  Placeholder,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

type ContentBlockProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    heading: Field<string>;
  };
};

const ThreeByThreeFeaturePromo = (props: ContentBlockProps): JSX.Element => {
  const phKey = `feature-${props.params?.DynamicPlaceholderId}`;
  return (
    <div className="row">
      <section className="small-12 columns horizontal-container">
        <div className="body-content">
          <div className="row">
            <div className="small-12 columns">
              <div className="h5">
                <Text field={props.fields.heading}></Text>
              </div>
              <div className="row" data-equalizer="content">
                <div className='className="small-12 large-4 columns horizontal-callout horizontal-callout-logo-top"'>
                  <Placeholder key={phKey} name={phKey} rendering={props.rendering}></Placeholder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeByThreeFeaturePromo;
