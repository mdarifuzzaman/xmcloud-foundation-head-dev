import React from 'react'
import AButton from '../atoms/AButton';

type APanelProps = {
    panelImage?: string;
    title?: string;
    desc?: string;    
    ctaTitle?: string;
    componentClass: string;
}

export default function APanel(props: APanelProps) {
  return (
    <div className={props.componentClass}>
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img src={props.panelImage} alt="" className="relative z-10" />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                {props.title}
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
                {props.desc}
              </p>
              <div className="mx-auto md:mx-0">
                <AButton className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2" title={props.ctaTitle}></AButton>                
              </div>
            </div>
          </div>
  )
}
