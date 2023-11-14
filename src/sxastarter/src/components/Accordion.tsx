import React from 'react'

type AccordionProps = {
  fields: {
    AccodionChild: any;
  }
  params: any
}

function Accordion(props: AccordionProps) {
  console.log("Accordion", props);
  return (
    <section id="faq-accordion">
      {/* <!-- Main Container --> */}
      <div className={props.params?.ComponentClass}>
        {/* <!-- Accordion Container --> */}
        <div className={props.params?.AccordionContainerClass}>
          {/* <!-- Tab 1 --> */}
          {props.fields?.AccodionChild?.map((ec: any, index:number) => (
            <div key={index} className="py-1 border-b outline-none group" tabIndex= {1}>
            {/* <!-- Tab Flex Container --> */}
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              {/* <!-- Tab Title --> */}
              <div className="transition duration-500 ease group-hover:text-red-500">
                {ec.fields?.AccordianTitle?.value}
              </div>
              {/* <!-- Arrow --> */}
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8"></path>
                </svg>
              </div>
            </div>

            {/* <!-- Tab Inner Content --> */}
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                {ec.fields.AccordianDesc?.value}
              </p>
            </div>
          </div>
          ))}
                      
        </div>
      </div>
    </section>
  )
}

export default Accordion;