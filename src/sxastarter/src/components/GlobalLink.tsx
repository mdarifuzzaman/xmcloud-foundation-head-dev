import Link from 'next/link'
import React from 'react'

export default function GlobalLink() {
  return (
    <>
        <Link href="/au/en">Australia - En</Link> <br></br>
        <Link href="/au/ja-JP">Australia - ja-JP</Link><br></br>
        <hr></hr>
        <Link href="/jp/en">Japan - en</Link> <br></br>
        <Link href="/jp/ja-JP">Japan - ja-JP</Link>
    </>
  )
}
