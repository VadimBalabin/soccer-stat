import { List, Typography } from 'antd';

export const MatchList = ({ data, loading }) => (
  <List
    dataSource={data}
    loading={loading}
    pagination={{
      defaultPageSize: 20,
    }}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={item.homeTeam.name + ' - ' + item.awayTeam.name}
          description={item.season.startDate + ' - ' + item.season.endDate}
        />
        <Typography.Text strong>
          {item.status === 'FINISHED'
            ? `${item.score.fullTime.homeTeam} : ${item.score.fullTime.awayTeam}`
            : item.status}
        </Typography.Text>
      </List.Item>
    )}
  />
);
