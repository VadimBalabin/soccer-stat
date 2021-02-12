import { PageHeader, Skeleton, Row, Col, Image } from 'antd';
import noEmblem from '../images/no-emblem.jfif';

export const DescriptionPane = ({
  avatarUrl,
  title,
  subTitle,
  description,
  children,
  loading,
  imageWidth = 100,
}) =>
  loading ? (
    <div className="ant-page-header">
      <Skeleton avatar paragraph={{ rows: 5 }} round active />
    </div>
  ) : (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={title}
      subTitle={subTitle}
      avatar={{
        src: avatarUrl || noEmblem,
      }}
    >
      <Row justify="space-between">
        <Col flex="1">{description}</Col>
        <Col>
          <Image
            src={avatarUrl || noEmblem}
            shape="square"
            width={imageWidth}
            preview={false}
          />
        </Col>
      </Row>
      {children}
    </PageHeader>
  );
