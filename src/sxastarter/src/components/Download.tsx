import React from 'react'
import CtaBanner from './controls/CtaBanner';

function Download() {

  const clickMe = () => {
    alert("Clicked");
  }
  return (
    <section id="download-boxes" className="py-32">
      {/* <!-- Boxes Container --> */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        {/* <!-- Box 1 --> */}        
        <CtaBanner 
            componentClassName='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3'
            ctaButtonClassName='block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'
            ctaCallBack={clickMe} ctaTitle='Add &amp; Install Extension' subTitle='Minimum Version 62' imgSrc='images/logo-chrome.svg'
            title='Add to Chrome'></CtaBanner>

        {/* <!-- Box 2 --> */}
        <div className="w-full md:w-1/3">          
          <CtaBanner 
            componentClassName='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8'
            ctaButtonClassName='block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'
            ctaCallBack={clickMe} ctaTitle='Add &amp; Install Extension' subTitle='Minimum Version 62' imgSrc='images/logo-chrome.svg'
            title='Add to Chrome'></CtaBanner>
        </div>

        

        {/* <!-- Box 3 --> */}
        <div className="w-full md:w-1/3">
        <CtaBanner 
            componentClassName='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16'
            ctaButtonClassName='block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'
            ctaCallBack={clickMe} ctaTitle='Add &amp; Install Extension' subTitle='Minimum Version 62' imgSrc='images/logo-chrome.svg'
            title='Add to Chrome'></CtaBanner>          
        </div>
      </div>
    </section>
  )
}

export default Download;