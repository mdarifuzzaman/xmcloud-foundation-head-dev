import React, { useState } from 'react'
import { ComponentConsumerProps, ComponentRendering, EditFrame, Field, GetStaticComponentProps, Placeholder, RichTextField, useComponentProps, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from 'temp/config';
import TabHeader from './controls/molecules/TabHeader';
import { FaPlus } from 'react-icons/fa';



type TabsProp = ComponentConsumerProps & {
  fields: {
    HomeTab: Field<string>;
    Desc: RichTextField;
    SelectedIndex: Field<number>;
  },
  params: any;
  rendering: ComponentRendering
}

const newTabItemButton = 
{
    header: 'WebEditButton',
    icon: '/~/icon/Office/32x32/navigate_plus.png',
    click: "sxawebedit:new",
    tooltip: 'insert tab item',
    parameters: {"navigate": 0, "child": 1}
};

const editTabItemButton = 
{
    header: 'Edit',
    icon: '/~/icon/Office/32x32/pencil.png',
    tooltip: 'edit tab item',
    fields: ['Header', 'Tab Item Image', 'Desc', 'Cta1', 'Cta2']
};

const deleteTabItemButton = 
{
    header: 'Edit',
    icon: '/~/icon/Office/32x32/delete.png',
    click: 'webedit:delete',
    tooltip: 'Delete Tab'
};

function NgTab(props: TabsProp) {
  const [selectedTabItem, setSelectedTabItem] = useState<any>({index: props?.sitecoreContext?.pageEditing ? props?.fields?.SelectedIndex?.value ?? 0: 0, tabItem: {}});
  const data = useComponentProps<any>(props.rendering.uid);  
  const tabItem = data?.item?.TabItems?.results;
  console.log("tabItem", tabItem);
  if(tabItem){
    console.log("selectedTabItem", selectedTabItem);
  }
  
  return (
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className={props.params?.ComponentClass?.value}>
        <div className={props.params?.OtherData?.value}></div>       
        {/* Tab header */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {tabItem && tabItem?.length > 0 && tabItem.map((hc: any, index: number) => (
            <>
                {props.sitecoreContext?.pageEditing && (<>
                    <EditFrame title="Edit Tab Item" dataSource={{"itemId": hc?.id + ""}} buttons={[editTabItemButton, deleteTabItemButton]}>
                        <TabHeader  key={index}       
                            onClick={() => setSelectedTabItem({index, tabItem: hc})}     
                            componentClass={hc.fields?.ComponentClass?.value} 
                            componentSubClass={selectedTabItem?.tabItem?.displayName == hc.displayName || selectedTabItem.index === index ? "py-5 border-b-4 border-softRed": "py-5 border-b-4 "} title={hc?.displayName}>
                        </TabHeader>
                    </EditFrame>
                </>
                )}
                {!props.sitecoreContext?.pageEditing && (<>
                <TabHeader  key={index}       
                onClick={() => setSelectedTabItem({index, tabItem: hc})}     
                componentClass={hc.fields?.ComponentClass?.value} 
                componentSubClass={selectedTabItem?.tabItem?.displayName == hc.displayName || selectedTabItem.index === index ? "py-5 border-b-4 border-softRed": "py-5 border-b-4 "} title={hc?.displayName}>
                </TabHeader></>)}
            </>
          ))}          
        </div>
       
        <div id="panels" className="container mx-auto"> 
            {props.sitecoreContext?.pageEditing && (<>
                <EditFrame buttons={[newTabItemButton]} title="Add tab item" dataSource={{"itemId": props?.rendering?.dataSource + ""}}>                                
                    <div className="min-h-20 bg-gray-700">
                        <FaPlus></FaPlus>
                    </div>
                </EditFrame>
            </>)}
            {!tabItem || tabItem.length === 0 && (        
                <div style={{minWidth: "200px"}}>
                    <h1>[Empty component]</h1>
                </div>
             )}
        </div>     
         {/* Tab Panel */}
         <div id="panels" className="container mx-auto">          
            <>
                { selectedTabItem && selectedTabItem.index === 0 && tabItem && tabItem.length - 1 >= selectedTabItem.index && (        
                <div style={{minWidth: "200px"}}>
                    <Placeholder name="tabpanel" rendering={props.rendering}></Placeholder>
                </div>
                )}
                {selectedTabItem && selectedTabItem.index === 1 && tabItem && tabItem.length - 1 >= selectedTabItem.index && (        
                <div style={{minWidth: "200px"}}>
                    <Placeholder name="tabpanel2" rendering={props.rendering}></Placeholder>
                </div>
                )}
                {selectedTabItem && selectedTabItem.index === 2 && tabItem && tabItem.length - 1 >= selectedTabItem.index && (        
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

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
    const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
        apiKey: config.sitecoreApiKey
    });

    const query: string  = '{ item(path: "{FFE4B0E2-1E5E-41A9-A6C0-DE946FA42294}", language: "en") {        TabItems: children { results { displayName ' +
        'path id fields { ' +
          ' jsonValue name value } } } } }' ;

    const result = await graphQLClient.request<any>(
        query, {
            datasource: rendering.dataSource,
            contextItem: layoutData?.sitecore?.route?.itemId,
            language: layoutData?.sitecore?.context?.language,
        }
      );
      return result;
};

export default withSitecoreContext()(NgTab);