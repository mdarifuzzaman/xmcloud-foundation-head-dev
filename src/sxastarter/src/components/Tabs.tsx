import React, { useEffect, useState } from 'react'
import TabHeader from './controls/molecules/TabHeader';
import { ComponentConsumerProps, ComponentRendering, Field, Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';



type TabsProp = ComponentConsumerProps & {
  fields: {
    HeaderComponents: any;
    PanelComponents: any;
    SelectTabNo: Field<number>
  },
  params: any;
  rendering: ComponentRendering
}

function Tabs(props: TabsProp) {
  console.log("Tab", props);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if(props?.sitecoreContext?.pageEditing && props?.fields?.SelectTabNo){
      setActiveTab(props.fields?.SelectTabNo?.value);
    }
    else{
      setActiveTab(0);
    }
  }, [])
  

  const setTabItem = (index: any) => {
    setActiveTab(index);
  }

  //const editFrameData = GetEditFrame(['HeaderComponents'], props.rendering.dataSource);

  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className={props.params?.ComponentClass?.value}>
        <div className={props.params?.OtherData?.value}></div>
        {/* {props.sitecoreContext?.pageEditing && (<>
            <EditFrame {...editFrameData}>              
              <div className='container'>
              </div>
            </EditFrame>
        </>)} */}
        {/* <!-- Tabs Flex Container --> */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {props.fields?.HeaderComponents?.map((hc: any, index: number) => (
            <TabHeader  key={index}       
            onClick={() => setTabItem(index)}     
            componentClass={hc.fields?.ComponentClass?.value} 
            componentSubClass={index === activeTab ? hc.fields?.ComponentSubClass?.value + " border-softRed": hc.fields?.ComponentSubClass?.value} dataTarget={hc.fields?.DataTarget?.value} title={hc.fields?.Title?.value}></TabHeader>
          ))}          
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">          
          <>   
              {activeTab == 0 && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name='tab-panel-0' key={'tab-pabel-0'} rendering={props.rendering}></Placeholder>
             </div>
              )}
              {activeTab == 1 && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name='tab-panel-1' key={'tab-pabel-1'} rendering={props.rendering}></Placeholder>
             </div>
              )}
              {activeTab == 2 && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name='tab-panel-2' key={'tab-pabel-2'} rendering={props.rendering}></Placeholder>
             </div>
              )}
          </>                    
        </div>
      </div>
    </section>
  )
}

export default withSitecoreContext()(Tabs);