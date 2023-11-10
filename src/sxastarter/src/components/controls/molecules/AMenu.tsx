import React from 'react'

type AMenuProps = {
    componentClass: string;
    children: any
}

export default function AMenu(props: AMenuProps) {
  return (
    <div id="menu" className={props.componentClass}>
        {props.children}
      </div>
  )
}
