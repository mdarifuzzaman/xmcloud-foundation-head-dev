import {
  ComponentRendering,
  Field,
  ImageField,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

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
      <a href="/TDS-Classic">
        <div className="h6">
          <Text field={props.fields.heading}></Text>
        </div>
        <p>
          <RichText field={props.fields.summary}></RichText>
        </p>
      </a>
    </>
  );
};

export default Feature;
