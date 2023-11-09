import React from 'react'
import {ALinkProps} from './ALink';

type ALinkWithChildrenProps = ALinkProps & {
    children: any
}

function ALinkWithChildren(props: ALinkWithChildrenProps) {
  return (
    <a href={`${props.url}`} className={`${props.className}`}>{props.children}</a>
  )
}

export default ALinkWithChildren;