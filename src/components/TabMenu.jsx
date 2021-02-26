import { Tabs } from 'antd';

const { TabPane } = Tabs;

export const TabMenu = ({ active, tabs, extra, onChange }) => (
  <Tabs activeKey={active} tabBarExtraContent={extra} onChange={onChange}>
    {tabs.map((tab) => (
      <TabPane tab={`${tab.key.toUpperCase()} ${tab.count}`} key={tab.key} />
    ))}
  </Tabs>
);
