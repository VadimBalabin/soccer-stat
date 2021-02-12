import { List, Typography } from 'antd';

export const SquadList = ({ data, loading }) => (
  <List
    dataSource={data}
    loading={loading}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta title={item.name} description={item.position} />
        <Typography.Text strong>{item.role}</Typography.Text>
      </List.Item>
    )}
  />
);
