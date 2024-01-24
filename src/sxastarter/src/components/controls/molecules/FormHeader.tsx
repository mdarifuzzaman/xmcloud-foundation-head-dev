import React from 'react'
import AParagraph from '../atoms/AParagraph';
import AH2 from '../atoms/AH2';

type FormHeader = {
    title: string;
    subTitle: string;
}

function FormHeader(props: FormHeader) {
  return (
    <div className="bg-softBlue">
        <AParagraph componentClass="mb-6 text-lg tracking-widest text-center text-white uppercase" desc={props.title}></AParagraph>        
        <AH2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl"> {props.subTitle}</AH2>        
    </div>
  )
}

export default FormHeader;
