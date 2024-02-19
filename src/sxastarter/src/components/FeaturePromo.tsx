
import React from 'react'
import AImage from './controls/atoms/AImage'
import Heading from './controls/molecules/Heading'
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs'


type FeaturePromoProps = {
    fields: {
        image: ImageField;    
        className: string;
    }
}

export default function FeaturePromo(props: FeaturePromoProps) {
    return (
      <section id="features" className="flex justify-center">
          <Heading componentClass="container mx-auto mt-16 px-6" h2Class="mb-6 text-4xl font-semibold text-center" pClass="max-w-md mx-auto text-center text-grayishBlue"
              desc="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go"
              title="Feature Promo"></Heading>
          <AImage image={props.fields.image} className={props.fields.className}></AImage>
      </section>
    )
  }
  