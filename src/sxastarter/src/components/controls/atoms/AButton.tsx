
import React from 'react'

type AButtonProps = {
    onClick?: ()=> void;   
    className?: string;
    title?: string;
}

export default function AButton(props: AButtonProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <a onClick={props.onClick} href="#" className={`${props.className}`}>{`${props.title}`}</a>
    </div>
  )
}
