import { List, Typography, Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';

export function TeamList({ data, loading }) {
  return (
    <List
      dataSource={data}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.crestUrl} />}
            title={<Link to={`/team/${item.id}`}>{item.name}</Link>}
            description={item.address}
          />
          <Space direction="vertical" align="end">
            <Typography.Text>{item.phone}</Typography.Text>
            <a href={'mailto:' + item.email}>{item.email}</a>
            <Typography.Text strong>{item.winner?.name}</Typography.Text>
          </Space>
        </List.Item>
      )}
    />
  );
}
