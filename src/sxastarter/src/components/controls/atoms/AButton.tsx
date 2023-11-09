
import React from 'react'

type AButtonProps = {
    onClick?: ()=> void;   
    className?: string;
    title?: string;
}

export default function AButton(props: AButtonProps) {
  return (
    <a onClick={props.onClick} href="#" className={`${props.className}`}>{`${props.title}`}</a>
  )
}
