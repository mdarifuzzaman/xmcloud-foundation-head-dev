import React from 'react'

type HeadingProps = {
    componentClass: string;
    h2Class: string;
    pClass: string;
    title?: string;
    desc?: string
}
export default function Heading(props: HeadingProps) {
  return (
    <div className={props.componentClass}>
        <h2 className={props.h2Class}>{props.title}</h2>
        <p className={props.pClass}>
          {props.desc}
        </p>
      </div>
  )
}
