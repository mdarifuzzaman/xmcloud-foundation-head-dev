import { Image, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react'

type AImageProps = {
    image?: any;
    context?: SitecoreContextValue
}

export default function AImage(props: AImageProps) {
  return (    
    <>{
        props.context?.pageEditing === false ? <img src={props.image.fields.Image?.value?.src} alt="" className={`${props.image?.fields?.ClassName?.value}`} /> 
        : <Image field={props.image?.fields?.Image}></Image>
      }
      </> 
  )
}
