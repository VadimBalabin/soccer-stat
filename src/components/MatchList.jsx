import { List, Space, Avatar, Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';

export const MatchList = ({ data, loading }) => (
  <List
    dataSource={data}
    loading={loading}
    pagination={{
      defaultPageSize: 20,
    }}
    renderItem={(item) => (
      <List.Item>
        <Descriptions column={3}>
          <Descriptions.Item label="HOME TEAM">
            {<Link to={'/team/' + item.homeTeam.id}>{item.homeTeam.name}</Link>}
          </Descriptions.Item>
          {item.competition && (
            <>
              <Descriptions.Item label="COMPETITION">
                {item.competition.name}
              </Descriptions.Item>
              <Descriptions.Item label="AREA">
                <Space>
                  <Avatar
                    src={item.competition.area.ensignUrl}
                    size={24}
                    style={{ marginTop: -4 }}
                  />
                  {item.competition.area.name}
                </Space>
              </Descriptions.Item>
            </>
          )}
          <Descriptions.Item label="AWAY TEAM">
            {<Link to={'/team/' + item.awayTeam.id}>{item.awayTeam.name}</Link>}
          </Descriptions.Item>
          <Descriptions.Item label="STATUS">
            {item.status === 'FINISHED' ? (
              <Tag color="#87d068">{`${item.score.fullTime.homeTeam} : ${item.score.fullTime.awayTeam}`}</Tag>
            ) : (
              <Tag color="blue" icon={<ClockCircleOutlined />}>
                {item.status}
              </Tag>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="SEASON">
            {item.season.startDate + ' - ' + item.season.endDate}
          </Descriptions.Item>
        </Descriptions>
      </List.Item>
    )}
  />
);
