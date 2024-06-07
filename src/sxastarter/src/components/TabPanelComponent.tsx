
import { Field, RichText, RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs'
import { ComponentProps } from 'lib/component-props'
import React from 'react'

type TabPanelComponent = ComponentProps & {
    fields: {
        Title: Field<string>,
        Desc: RichTextField
    }
}

export default function TabPanelComponent(props: TabPanelComponent) {
  return (
    <div className="flex flex-col space-y-8 md:w-1/2">
        <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
        <Text field={props.fields.Title}></Text>
        </h3>
        <p className="max-w-md text-center text-grayishBlue md:text-left">
        <RichText field={props.fields.Desc}></RichText>
        </p>
        <div className="mx-auto md:mx-0">        
        </div>
  </div>
  )
}
