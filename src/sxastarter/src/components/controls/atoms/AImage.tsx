import { ComponentConsumerProps, ImageField, SitecoreContextValue, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageComp from 'components/ImageComp';
import React from 'react'

type AImageProps = ComponentConsumerProps & {
    image?: ImageField;
    context?: SitecoreContextValue;
    className: string;
}

function AImage(props: AImageProps) {
  return (    
    <>{

      <ImageComp imageData={{field: {
        value: {src: props.image?.value?.src + ""},
        editable: "true"
      }, src: props.image?.value?.src + ""}} sitecoreContext={props.sitecoreContext}></ImageComp>

        // props.context?.pageEditing === false ? <img src={ Consts.imagePart + new URL(props.image?.value?.src + "").pathname } alt="" className={`${props.className}`} /> 
        // : <Image field={props.image}></Image>
      }
      </> 
  )
}
export default withSitecoreContext()<AImageProps>(AImage);