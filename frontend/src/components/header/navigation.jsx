import { Tabs } from "antd";

const Navigation = ({ abas, onChange, activeTab }) => {
    return (
        <nav className="main-navigation">
            <Tabs
                activeKey={activeTab}
                items={abas}
                onChange={onChange}
                centered
            />
        </nav>
    );
};

export default Navigation;