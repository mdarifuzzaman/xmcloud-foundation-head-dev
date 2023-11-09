import React from 'react'

export type ALinkProps = {
    url: string;
    className?: string;
    title?: string;
}

export default function ALink(props: ALinkProps) {
  return (
    <a href={`${props.url}`} className={`${props.className}`}>{`${props.title}`}</a>
  )
}
