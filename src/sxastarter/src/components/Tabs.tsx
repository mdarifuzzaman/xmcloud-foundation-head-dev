import React, { useState } from 'react'
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

  const [selTab, setSelTab] = useState(0);

  console.log("Tab", props);
  let activeTab = 0;

  if(props?.sitecoreContext?.pageEditing && props?.fields?.SelectTabNo){
    console.log("Page editing true..");
    activeTab = props.fields?.SelectTabNo?.value;
  }
  else{
    activeTab = 0;
    console.log("Page editing false..")
  }
  

  const setTabItem = (index: any) => {
    setSelTab(index);
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
            <TabHeader key={index}       
            onClick={() => setTabItem(index)}     
            componentClass={hc.fields?.ComponentClass?.value} 
            componentSubClass={((activeTab == index && props.sitecoreContext.pageEditing) || (selTab == index && !props.sitecoreContext.pageEditing)) ? hc.fields?.ComponentSubClass?.value + " border-softRed": hc.fields?.ComponentSubClass?.value} dataTarget={hc.fields?.DataTarget?.value} title={hc.fields?.Title?.value}></TabHeader>
          ))}          
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">          
          <>   
              {((activeTab == 0 && props.sitecoreContext.pageEditing) || (selTab == 0 && !props.sitecoreContext.pageEditing)) && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name="tabpanel" rendering={props.rendering}></Placeholder>
             </div>
              )}
              {((activeTab == 1 && props.sitecoreContext.pageEditing) || (selTab == 1 && !props.sitecoreContext.pageEditing)) && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name="tabpanel2" rendering={props.rendering}></Placeholder>
             </div>
              )}
              {((activeTab == 2 && props.sitecoreContext.pageEditing) || (selTab == 2 && !props.sitecoreContext.pageEditing)) && (        
              <div style={{minWidth: "200px"}}>
                <Placeholder name="tabpanel3" rendering={props.rendering}></Placeholder>
             </div>
              )}
          </>                    
        </div>
      </div>
    </section>
  )
}

export default withSitecoreContext()(Tabs);