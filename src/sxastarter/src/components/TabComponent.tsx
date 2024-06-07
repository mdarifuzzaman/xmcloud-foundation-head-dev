// components/TabItem.js
import { ComponentConsumerProps } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';

// components/TabItem.js

const TabItem = ({ label, active, onClick }: any) => {
  return (
    <button
      className={`px-6 py-2.5 text-sm font-medium focus:outline-none transition ${
        active
          ? 'text-white bg-blue-600 border-blue-600'
          : 'text-blue-600 bg-white hover:bg-gray-100'
      } rounded-t-lg border-t border-l border-r border-b-0`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};


const Tabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab: any) => (
          <TabItem
            key={tab.label}
            label={tab.label}
            active={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
          />
        ))}
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-b-lg shadow-sm">
        {tabs.map(
          (tab: any) =>
            activeTab === tab.label && (
              <div key={tab.label}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};


type TabComponentProp = ComponentConsumerProps & {
    fields: {
      HeaderComponents: any;
      PanelComponents: any;
    },
    params: any;
  }

const TabComponent = (props: TabComponentProp) => {
    const tabs = [
        { label: 'Tab 1', content: <div>Content for Tab 1</div> },
        { label: 'Tab 2', content: <div>Content for Tab 2</div> },
        { label: 'Tab 3', content: <div>Content for Tab 3</div> },
      ];

    console.log("Tab component", props);    


    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Tabs Example</h1>
          <Tabs tabs={tabs} />
        </div>
      );
}

export default TabComponent;
