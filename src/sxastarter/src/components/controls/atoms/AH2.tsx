import React from 'react'

type AH2Props = {
    className: string;
    children?:any
}
function AH2(props: AH2Props) {
  return (
    <h2 className={props.className}>{props.children}</h2>
  )
}

export default AH2;
