import React from 'react'
type AButtonGrooupProps = {
    componentClass : string;
    id?: string;
    children?: any
}

export default function AButtonGroup(props: AButtonGrooupProps) {
  return (
    <div className={props.componentClass}>
            {props.children}
    </div>
  )
}

export function ANestedButton(props: AButtonGrooupProps) {
  return (
    <button id={props.id} className={props.componentClass}>
            {props.children}
    </button>
  )
}
