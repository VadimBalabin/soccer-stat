import { Descriptions } from 'antd';

export const TeamContent = ({ data }) => (
  <>
    <Descriptions column={2} title="Info">
      <Descriptions.Item label="Short Name">{data.shortName}</Descriptions.Item>
      <Descriptions.Item label="Area">{data.area.name}</Descriptions.Item>
      <Descriptions.Item label="Adress">{data.address}</Descriptions.Item>
      <Descriptions.Item label="Founded">{data.founded}</Descriptions.Item>
      <Descriptions.Item label="Venue">{data.venue}</Descriptions.Item>
    </Descriptions>
    <Descriptions column={2} title="Contacts">
      <Descriptions.Item label="Website">
        {<a href={data.website}>{data.website}</a>}
      </Descriptions.Item>
      <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>
      <Descriptions.Item label="Email">
        {<a href={'mailto:' + data.email}>{data.email}</a>}
      </Descriptions.Item>
    </Descriptions>
  </>
);
