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
    mainHeading: Field<string>;
  };
};

const ThreeByThreeFeaturePromoContainer = (props: ContentBlockProps): JSX.Element => {
  const phKey = `sc-feature-${props.params.DynamicPlaceholderId}`;
  return (
    <div className="row">
      <section className="small-12 columns horizontal-container">
        <div className="body-content">
          <div className="row">
            <div className="small-12 columns">
              <div className="h5">
                <Text field={props.fields.mainHeading}></Text>
              </div>
              <div className="row" data-equalizer="content">
                <Placeholder name={phKey} rendering={props.rendering}></Placeholder>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeByThreeFeaturePromoContainer;
