import React from 'react'

type AInputProps = {
    className?: string;
    placeholder?:any;
    type?: string;  
    value?: string;
}
function AInput(props: AInputProps) {
  return (
    <input className={props.className} placeholder={props.placeholder} type={props.type} value={props.value}></input>
  )
}

export default AInput;
