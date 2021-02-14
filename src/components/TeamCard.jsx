import { Card, Avatar } from "antd";

const { Meta } = Card;

export default function TeamCard({ item, handleClick }) {
  const { id, name, area, crestUrl } = item;

  return (
    <Card onClick={() => handleClick(id)} hoverable bordered={false}>
      <Meta
        avatar={<Avatar src={crestUrl} size={64} />}
        title={name?.toUpperCase()}
        description={area?.name}
      />
    </Card>
  );
}
