import React, { Fragment } from 'react'
import APanel from './controls/molecules/APanel';
import TabHeader from './controls/molecules/TabHeader';
import { ComponentConsumerProps } from '@sitecore-jss/sitecore-jss-nextjs';

type TabsProp = ComponentConsumerProps & {
  fields: {
    HeaderComponents: any;
    PanelComponents: any;
  },
  params: any;
}

function Tabs(props: TabsProp) {
  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className={props.params?.ComponentClass?.value}>
        <div className={props.params?.OtherData?.value}></div>
        {/* <!-- Tabs Flex Container --> */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {props.fields?.HeaderComponents?.map((hc: any, index: number) => (
            <TabHeader  key={index}
            componentClass={hc.fields?.ComponentClass?.value} 
            componentSubClass={hc.fields?.ComponentSubClass?.value} dataTarget={hc.fields?.DataTarget?.value} title={hc.fields?.Title?.value}></TabHeader>
          ))}          
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">
          {/* <!-- Panel 1 --> */}
          {props.fields?.PanelComponents?.map((panel: any, index: number) => (
            <Fragment key={index}>
              {               
              <APanel sitecoreContext={props.sitecoreContext} key={index} componentClass={panel.fields?.ComponentClass?.value} desc={panel.fields?.Desc?.value} title={panel.fields?.Title?.value} panelImage={panel.fields?.PanelImage?.value?.src} ctaTitle={panel.fields?.CtaTitle?.value}></APanel> 
              }
            </Fragment>
            
          ))}          
                    
        </div>
      </div>
    </section>
  )
}

export default Tabs;