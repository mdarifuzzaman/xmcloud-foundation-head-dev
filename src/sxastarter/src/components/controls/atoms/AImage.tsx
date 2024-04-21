import { Image, ImageField, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react'
import { Consts } from 'src/Const';

type AImageProps = {
    image?: ImageField;
    context?: SitecoreContextValue;
    className: string;
}

export default function AImage(props: AImageProps) {
  return (    
    <>{
        props.context?.pageEditing === false ? <img src={ Consts.imagePart + new URL(props.image?.value?.src + "").pathname } alt="" className={`${props.className}`} /> 
        : <Image field={props.image}></Image>
      }
      </> 
  )
}
