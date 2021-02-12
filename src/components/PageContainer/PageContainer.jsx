import { Layout, Button, Space, Tooltip } from 'antd';
import { TeamOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './PageContainer.css';

const { Content, Sider } = Layout;

export const PageContainer = ({ children }) => {
  const history = useHistory();
  return (
    <Layout className="page">
      <Sider className="sidebar" width={56} style={{ background: 'none' }}>
        <Space
          direction="vertical"
          style={{ marginTop: 64, padding: '0px 8px' }}
        >
          <Tooltip placement="right" title="COMPETITIONS">
            <Button
              icon={<AppstoreOutlined />}
              shape="circle"
              type="text"
              size="large"
              onClick={() => history.push('/')}
            />
          </Tooltip>
          <Tooltip placement="right" title="TEAMS">
            <Button
              icon={<TeamOutlined />}
              shape="circle"
              type="text"
              size="large"
              onClick={() => history.push('/teams')}
            />
          </Tooltip>
        </Space>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 60 }}>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};
