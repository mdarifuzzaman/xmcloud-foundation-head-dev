import React from 'react'

// type TabHeaderProps = {
//     dataTarget?: string;
//     title: string;
//     componentClass: string;
//     componentSubClass: string;
//     onClick: () => any;
// }

export default function TabHeader(props: any) {
  return (
    <button onClick={props.onClick}>
      <div className={props.componentClass} data-target={props.dataTarget}>
        <div className={props.componentSubClass} data-target={props.dataTarget}>
          {props.title}
        </div>
      </div>
    </button>

  )
}
