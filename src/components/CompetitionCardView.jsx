import { Card, Avatar } from "antd";
import noEmblem from "../images/no-emblem.jfif";

const { Meta } = Card;

export default function CompetitionCardView({ item, handleClick }) {
  const { code, emblemUrl, area, name } = item;

  return (
    <Card onClick={() => handleClick(code)} hoverable bordered={false}>
      <Meta
        avatar={<Avatar src={emblemUrl || noEmblem} size={64} />}
        title={name?.toUpperCase()}
        description={area?.name}
      />
    </Card>
  );
}
