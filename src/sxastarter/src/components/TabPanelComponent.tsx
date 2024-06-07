
import { Field, Image, ImageField, RichText, RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs'
import { ComponentProps } from 'lib/component-props'
import React from 'react'

type TabPanelComponent = ComponentProps & {
    fields: {
        Title: Field<string>,
        Desc: RichTextField,
        PanelImage: ImageField
    }
}

export default function TabPanelComponent(props: TabPanelComponent) {
  return (
    <div className={"flex flex-col py-5 md:flex-row md:space-x-7 panel"}>        
        <div className="flex flex-col space-y-8 md:w">                   
          <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
          <Text field={props.fields.Title}></Text>
          </h3>
          <div className="max-w-md text-center text-grayishBlue md:text-left">
          <RichText field={props.fields.Desc}></RichText>
          </div>
          <div className="mx-auto md:mx-0">        
            
          </div>
      </div>
      <div className="flex justify-center md:w-1/2">
            <Image field={props.fields?.PanelImage} alt="" className="relative z-10" />
        </div>
    </div>
  )
}
