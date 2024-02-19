import { Image, ImageField, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react'

type AImageProps = {
    image?: ImageField;
    context?: SitecoreContextValue;
    className: string;
}

export default function AImage(props: AImageProps) {
  return (    
    <>{
        props.context?.pageEditing === false ? <img src={props.image?.value?.src} alt="" className={`${props.className}`} /> 
        : <Image field={props.image}></Image>
      }
      </> 
  )
}
