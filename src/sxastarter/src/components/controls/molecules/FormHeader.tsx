import React from 'react'

type FormHeader = {
    title: string;
    subTitle: string;
}

function FormHeader(props: FormHeader) {
  return (
    <>
        <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
          {props.title}
        </p>
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          {props.subTitle}
        </h2>
    </>
  )
}

export default FormHeader;
