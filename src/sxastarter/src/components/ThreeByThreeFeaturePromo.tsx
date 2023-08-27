import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

type ContentBlockProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    mainHeading: Field<string>;
    heading1: Field<string>;
    heading2: Field<string>;
    heading3: Field<string>;
    summary1: Field<string>;
    summary2: Field<string>;
    summary3: Field<string>;
    featureImage1: ImageField;
    featureImage2: ImageField;
    featureImage3: ImageField;
  };
};

const ThreeByThreeFeaturePromo = (props: ContentBlockProps): JSX.Element => {
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
                <div className='className="small-12 large-4 columns horizontal-callout horizontal-callout-logo-top"' 
                  style={{ "backgroundImage": `url('${props.fields.featureImage1.value?.src}')`}}>
                  <Link href="/TDS-Classic">
                    <div className="h6">
                      <Text field={props.fields.heading1}></Text>
                    </div>
                    <div>
                      <RichText field={props.fields.summary1}></RichText>
                    </div>
                  </Link>
                </div>
                <div className='className="small-12 large-4 columns horizontal-callout horizontal-callout-logo-top"'
                  style={{ "backgroundImage": `url('${props.fields.featureImage2.value?.src}')`}}>
                  <Link href="/TDS-Classic">
                    <div className="h6">
                      <Text field={props.fields.heading2}></Text>
                    </div>
                    <div>
                      <RichText field={props.fields.summary2}></RichText>
                    </div>
                  </Link>
                </div>
                <div className='className="small-12 large-4 columns horizontal-callout horizontal-callout-logo-top"'
                  style={{ "backgroundImage": `url('${props.fields.featureImage3.value?.src}')`}}>
                  <Link href="/TDS-Classic">
                    <div className="h6">
                      <Text field={props.fields.heading3}></Text>
                    </div>
                    <div>
                      <RichText field={props.fields.summary3}></RichText>
                    </div>
                  </Link>
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
