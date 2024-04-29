import { ComponentConsumerProps, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs'
import Link from 'next/link'
import React from 'react'

type globalLinkProps= ComponentConsumerProps & {

}

const GlobalLink = (props: globalLinkProps) => {
  return (
    <>
        {props.sitecoreContext.pageEditing ? 
          <>
            <Link href={"/au/en?sc_site=" + props.sitecoreContext.site?.name}>Australia - En</Link> <br></br>
            <Link href={"/au/ja-JP?sc_site=" + props.sitecoreContext.site?.name}>Australia - ja-JP</Link><br></br>
            <hr></hr>
            <Link href={"/jp/en?sc_site=" + props.sitecoreContext.site?.name}>Japan - en</Link> <br></br>
            <Link href={"/jp/ja-JP?sc_site=" + props.sitecoreContext.site?.name}>Japan - ja-JP</Link>
          </>
        :
        <>
          <Link href="/au/en">Australia - En</Link> <br></br>
          <Link href="/au/ja-JP">Australia - ja-JP</Link><br></br>
          <hr></hr>
          <Link href="/jp/en">Japan - en</Link> <br></br>
          <Link href="/jp/ja-JP">Japan - ja-JP</Link>
        </>
        }
    </>
  )
}
export default withSitecoreContext()<globalLinkProps>(GlobalLink);