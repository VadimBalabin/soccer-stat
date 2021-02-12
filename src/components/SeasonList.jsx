import { List, Typography } from 'antd';

export function SeasonList({ data, loading }) {
  return (
    <List
      dataSource={data}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.startDate + ' - ' + item.endDate}
            description={item.currentMatchday}
          />
          <Typography.Text strong>{item.winner?.name}</Typography.Text>
        </List.Item>
      )}
    />
  );
}
