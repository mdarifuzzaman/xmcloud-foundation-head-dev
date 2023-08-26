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
    <>
      <Link href="/TDS-Classic">
        <div className="h6">
          <Text field={props.fields.heading}></Text>
        </div>
        <p>
          <RichText field={props.fields.summary}></RichText>
        </p>
      </Link>
    </>
  );
};

export default Feature;
