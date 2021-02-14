import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import './PageContainer.css';

const { Content } = Layout;

export const PageContainer = ({ children }) => {
  return (
    <Layout className="page">
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 60 }}>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};
