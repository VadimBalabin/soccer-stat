import { Descriptions } from 'antd';

export const CompetitionContent = ({ data }) => (
  <Descriptions column={1}>
    <Descriptions.Item label="Area" labelStyle={{ fontWeight: 600 }}>
      {data.area.name}
    </Descriptions.Item>
    <Descriptions.Item label="Current season">
      {`${data.currentSeason.startDate} - ${data.currentSeason.endDate}`}
    </Descriptions.Item>
    <Descriptions.Item label="Current Match Day">
      {data.currentSeason.currentMatchday}
    </Descriptions.Item>
  </Descriptions>
);
