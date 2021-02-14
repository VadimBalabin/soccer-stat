import { Layout, Button, Space, Tooltip } from 'antd';
import { TeamOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './Sidebar.css';

const { Sider } = Layout;

export const Sidebar = () => {
  const history = useHistory();

  return (
    <Sider className="sidebar" width={56} style={{ background: 'none' }}>
      <Space
        direction="vertical"
        style={{ marginTop: 64, padding: '0px 8px' }}
        size="large"
      >
        <Tooltip placement="right" title="COMPETITIONS">
          <Button
            icon={<AppstoreOutlined />}
            shape="circle"
            type="text"
            size="large"
            onClick={() => history.push('/')}
            className="menu-button"
          />
        </Tooltip>
        <Tooltip placement="right" title="TEAMS">
          <Button
            icon={<TeamOutlined />}
            shape="circle"
            type="text"
            size="large"
            onClick={() => history.push('/teams')}
            className="menu-button"
          />
        </Tooltip>
      </Space>
    </Sider>
  );
};
