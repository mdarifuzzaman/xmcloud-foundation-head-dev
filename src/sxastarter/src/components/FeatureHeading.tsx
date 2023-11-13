import React from 'react'
import Heading from './controls/molecules/Heading';
import { RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

type FeatureHeadingProps = {
  fields: {
    Title: TextField;
    Desc: RichTextField
  },
  params: any
}

function FeatureHeading(props: FeatureHeadingProps) {
  console.log("Feature heading", props);
  return (
    <section id="features">
      <Heading componentClass={props.params?.ComponentClass} h2Class={props.params?.H2Class}
        pClass={props.params?.PClass} title={props.fields?.Title?.value?.toString()} desc={props.fields?.Desc?.value}></Heading>      
    </section>
  )
}
export default FeatureHeading;