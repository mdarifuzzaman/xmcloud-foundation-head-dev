import React from 'react'
type AButtonGrooupProps = {
    componentClass : string;
    children?: any
}
export default function AButtonGrooup(props: AButtonGrooupProps) {
  return (
    <div className={props.componentClass}>
            {props.children}
    </div>
  )
}
