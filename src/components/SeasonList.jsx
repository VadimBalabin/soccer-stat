import { List, Descriptions } from 'antd';
import { Link } from 'react-router-dom';

export function SeasonList({ data, loading }) {
  return (
    <List
      dataSource={data}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <Descriptions column={2}>
            <Descriptions.Item label="START DATE">
              {item.startDate}
            </Descriptions.Item>
            <Descriptions.Item label="END DATE">
              {item.endDate}
            </Descriptions.Item>
            {item.currentMatchday && (
              <Descriptions.Item label="CURRENT MATCH DAY">
                {item.currentMatchday}
              </Descriptions.Item>
            )}
            {item.winner && (
              <Descriptions.Item label="WINNER">
                <Link to={`/team/${item.winner.id}`}>{item.winner.name}</Link>
              </Descriptions.Item>
            )}
          </Descriptions>
        </List.Item>
      )}
    />
  );
}
