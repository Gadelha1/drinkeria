import { Tabs } from 'antd';

const Navigation = ({ activeTab, onChange, tabsData }) => {
  return (
    <nav className="main-navigation">
      <Tabs 
        activeKey={activeTab}
        items={tabsData}
        onChange={onChange}
        centered
      />
    </nav>
  );
};

export default Navigation;
