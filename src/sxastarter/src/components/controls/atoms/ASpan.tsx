import React from 'react'

type ASpanProps = {
    className: string;
    children?:any
}
function ASpan(props: ASpanProps) {
  return (
    <span className={props.className}>{props.children}</span>
  )
}

export default ASpan;
