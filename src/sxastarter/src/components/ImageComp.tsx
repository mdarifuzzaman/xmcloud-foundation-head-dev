import { ComponentConsumerProps, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs'
import React from 'react'

type ImageCompProps = ComponentConsumerProps & {
    imageData: {
        field?: ImageField
        src?: string
        className?: string
        imageParams?: any
    }
}


export default function ImageComp({ imageData, sitecoreContext  }: ImageCompProps) {
  const testAbsoluteUrl = (urlString: string): boolean => {
    const pat = /^https?:\/\/|^\/\//i;
    if (pat.test(urlString))
    {
        return true;
    }
    return false;
  }

  return (
    <>
        {sitecoreContext?.pageEditing ?  <Image imageParams={imageData.imageParams} field={imageData.field}></Image> : (testAbsoluteUrl(imageData.src + "") ? <img className={imageData.className} src={ "/au/-/" +  new URL(imageData.src + "").pathname + new URL(imageData.src + "").search}></img> : <img src={imageData.src}></img> )  }
    </>
  )
}
