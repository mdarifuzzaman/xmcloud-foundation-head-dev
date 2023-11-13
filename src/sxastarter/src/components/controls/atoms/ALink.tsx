
import { Link, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react'

export type ALinkProps = {
    url?: string;
    className?: string;
    title?: string;
    sitecoreLink?: any;
    context?: SitecoreContextValue
}

export default function ALink(props: ALinkProps) {
  console.log("alink", props);
  return (
    <>{
      props.context?.pageEditing === false ? <a href={props.sitecoreLink?.fields?.Link?.value?.href} className={props.sitecoreLink?.fields?.ClassName?.value}>{props.sitecoreLink?.displayName}</a>
      : <Link field={props.sitecoreLink?.fields?.Link}></Link>
    }
    </> 
  )
}
