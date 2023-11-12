import React from 'react'


function FormBody() {
  return (
    <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
    {/* <!-- Input & Button Container --> */}
    <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
      <input type="text" className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0" placeholder="Enter your email address" />
      
      <input type="submit" className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90" value="Contact Us" />
    <div data-lastpass-icon-root="true" style={{"position": "relative", "height": "0px !important", "width": "0px", "float": "left"}}></div></div>
  </form>
  )
}

export default FormBody;
