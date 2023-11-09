import React from 'react'

type TabHeaderProps = {
    dataTarget: string;
    title: string;
    componentClass: string;
    componentSubClass: string;
}

export default function TabHeader(props: TabHeaderProps) {
  return (
    <div className={props.componentClass} data-target={props.dataTarget}>
    <div className={props.componentSubClass} data-target={props.dataTarget}>
      {props.title}
    </div>
  </div>

  )
}
