
import { ComponentConsumerProps, ImageField, TextField, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs'
import Head from 'next/head'
import React from 'react'

type MetaType = ComponentConsumerProps &{
  fields: {
    authorMeta: TextField
    categoryMeta: TextField
    pageImage: ImageField
  }
}
const Meta = (props: MetaType) => {
  console.log("Metadata", props);
  return (
    <Head>
      <meta name="author" content={props.fields.authorMeta?.value + ""}></meta>
      <meta name="category" content={props.fields.categoryMeta?.value + ""}></meta>
      <meta name="og:image" content={props.fields.pageImage?.value?.src + ""}></meta>
    </Head>
  )
}

export default withSitecoreContext()<MetaType>(Meta);