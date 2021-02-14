import { Col, Descriptions, Row } from 'antd';

export const TeamContent = ({ data }) => (
  <Row>
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
      <Descriptions column={1} title="Info">
        <Descriptions.Item label="Short Name">
          {data.shortName}
        </Descriptions.Item>
        <Descriptions.Item label="Area">{data.area.name}</Descriptions.Item>
        <Descriptions.Item label="Adress">{data.address}</Descriptions.Item>
        <Descriptions.Item label="Founded">{data.founded}</Descriptions.Item>
        <Descriptions.Item label="Venue">{data.venue}</Descriptions.Item>
      </Descriptions>
    </Col>
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
      <Descriptions column={1} title="Contacts">
        <Descriptions.Item label="Website">
          {<a href={data.website}>{data.website}</a>}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>
        <Descriptions.Item label="Email">
          {<a href={'mailto:' + data.email}>{data.email}</a>}
        </Descriptions.Item>
      </Descriptions>
    </Col>
  </Row>
);
