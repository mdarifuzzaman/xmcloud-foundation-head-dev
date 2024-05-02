
import { ComponentConsumerProps, TextField, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs'
import Head from 'next/head'
import React from 'react'

type MetaType = ComponentConsumerProps &{
  fields: {
    authorMeta: TextField
  }
}
const Meta = (props: MetaType) => {
  console.log("Metadata", props);
  return (
    <Head>
      <meta name="author" content={props.fields.authorMeta?.value + ""}></meta>
    </Head>
  )
}

export default withSitecoreContext()<MetaType>(Meta);