import React, { useState } from 'react'
import TabHeader from './controls/molecules/TabHeader';
import { ComponentConsumerProps, ComponentRendering, EditFrame, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import TabPanel from './TabPanel';
import GetEditFrame from './controls/editFrames/getEditFrame';


type TabsProp = ComponentConsumerProps & {
  fields: {
    HeaderComponents: any;
    PanelComponents: any;
  },
  params: any;
  rendering: ComponentRendering
}

function Tabs(props: TabsProp) {
  console.log("Tab", props);
  const [activeTab, setActiveTab] = useState(0);
  const setTabItem = (index: any) => {
    setActiveTab(index);
  }

  const editFrameData = GetEditFrame(['HeaderComponents'], props.rendering.dataSource);

  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className={props.params?.ComponentClass?.value}>
        <div className={props.params?.OtherData?.value}></div>
        {props.sitecoreContext?.pageEditing && (<>
            <EditFrame {...editFrameData}>              
              <div className='container'>
              </div>
            </EditFrame>
        </>)}
        {/* <!-- Tabs Flex Container --> */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {props.fields?.HeaderComponents?.map((hc: any, index: number) => (
            <TabHeader  key={index}       
            onClick={() => setTabItem(index)}     
            componentClass={hc.fields?.ComponentClass?.value} 
            componentSubClass={hc.fields?.ComponentSubClass?.value} dataTarget={hc.fields?.DataTarget?.value} title={hc.fields?.Title?.value}></TabHeader>
          ))}          
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">          
          <>           
            <div className={"flex flex-col py-5 md:flex-row md:space-x-7 panel"}>
              {/* <!-- Panel Image --> */}
              <div className="flex justify-center md:w-1/2">           

                {/* {props.sitecoreContext?.pageEditing? <Image field={activeTab.fields?.PanelImage} alt="" className="relative z-10" /> :
                  <img src={activeTab.fields?.PanelImage?.value?.src} alt="" className="relative z-10" />
                }                 */}
              </div>
              {/* <!-- Panel Content --> */}
             <TabPanel props={{"rendering": props.rendering, activeTab}}></TabPanel>
          </div>
          </>                    
        </div>
      </div>
    </section>
  )
}

export default withSitecoreContext()(Tabs);