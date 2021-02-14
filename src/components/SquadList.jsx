import { Descriptions, List } from 'antd';
import { formatDt } from '../helpers';

export const SquadList = ({ data, loading }) => (
  <List
    dataSource={data}
    loading={loading}
    renderItem={(item) => (
      <List.Item>
        <Descriptions column={3}>
          <Descriptions.Item label="NAME">{item.name}</Descriptions.Item>
          <Descriptions.Item label="POSITION">
            {item.position}
          </Descriptions.Item>
          <Descriptions.Item label="COUNTRY OF BIRTH">
            {item.countryOfBirth}
          </Descriptions.Item>
          <Descriptions.Item label="DATE OF BIRTH">
            {formatDt(item.dateOfBirth)}
          </Descriptions.Item>
          <Descriptions.Item label="ROLE">{item.role}</Descriptions.Item>
        </Descriptions>
      </List.Item>
    )}
  />
);
