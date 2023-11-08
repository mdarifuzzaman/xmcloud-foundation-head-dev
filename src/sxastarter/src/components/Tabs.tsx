import React from 'react'
import APanel from './controls/APanel';
import TabHeader from './controls/TabHeader';

function Tabs() {
  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        {/* <!-- Tabs Flex Container --> */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* <!-- Tab 1 --> */}          
          <TabHeader 
          componentClass='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab' 
          componentSubClass='py-5 border-b-4 border-softRed' dataTarget='panel-1' title='Simple Bookmarking'></TabHeader>

          {/* <!-- Tab 2 --> */}        
          <TabHeader componentClass='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab' componentSubClass='py-5' dataTarget='panel-2' title='Speedy Searching'></TabHeader>

          {/* <!-- Tab 3 --> */}
          <TabHeader componentClass='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab' componentSubClass='py-5' dataTarget='panel-3' title='Easy Sharing'></TabHeader>
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">
          {/* <!-- Panel 1 --> */}
          <APanel desc='Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.' title=' Bookmark in one click' panelImage='images/illustration-features-tab-1.svg' ctaTitle='More Info'></APanel>          

          {/* <!-- Panel 2 --> */}
          <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img src="images/illustration-features-tab-2.svg" alt="" className="relative z-10" />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Intelligent search
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <div className="mx-auto md:mx-0">
                <a href="#" className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a>
              </div>
            </div>
          </div>

          {/* <!-- Panel 3 --> */}
          <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img src="images/illustration-features-tab-3.svg" alt="" className="relative z-10" />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Share your bookmarks
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
                Easily share your bookmarks and collections with others. Create
                a shareable a link that you can send at the click of a button.
              </p>
              <div className="mx-auto md:mx-0">
                <a href="#" className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs;