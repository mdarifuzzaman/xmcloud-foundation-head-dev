import React from 'react'
type AParagraphProps = {
    desc?: string;
    componentClass: string;
}

export default function AParagraph(props: AParagraphProps) {
  return (
    <p className={props.componentClass}>
      {props.desc}
  </p>
  )
}
