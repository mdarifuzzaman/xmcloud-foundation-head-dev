import {
  ComponentRendering,
  Field,
  ImageField,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

type ContentBlockProps = {
  rendering: ComponentRendering;
  fields: {
    heading: Field<string>;
    summary: Field<string>;
    featureImage: ImageField;
  };
};

const Feature = (props: ContentBlockProps): JSX.Element => {
  return (
    <div
      className='className="small-12 large-4 columns horizontal-callout horizontal-callout-logo-top"'
      style={{ backgroundImage: `url('${props.fields.featureImage.value?.src}')` }}
    >
      <Link href="/TDS-Classic">
        <div className="h6">
          <Text field={props.fields.heading}></Text>
        </div>
        <div>
          <RichText field={props.fields.summary}></RichText>
        </div>
      </Link>
    </div>
  );
};

export default Feature;
