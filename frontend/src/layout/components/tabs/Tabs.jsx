import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../../store/TabSlice';


const TabsComponent = ({ tabsData }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const handleChange = (key) => {
    dispatch(setActiveTab(key));
  };

  return (
    <Tabs
      className='tabs-component'
      activeKey={activeTab}
      items={tabsData}
      onChange={handleChange}
      centered
    />
  );
};

export default TabsComponent;
