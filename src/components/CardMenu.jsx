import { Menu } from 'antd';
import { TeamOutlined, AppstoreOutlined } from '@ant-design/icons';

export const CardMenu = ({ tab, changeTab }) => (
  <Menu
    onClick={changeTab}
    selectedKeys={tab}
    mode="horizontal"
    className="card-menu"
  >
    <Menu.Item key="competitions" icon={<AppstoreOutlined />}>
      COMPETITIONS
    </Menu.Item>
    <Menu.Item key="teams" icon={<TeamOutlined />}>
      TEAMS
    </Menu.Item>
  </Menu>
);
