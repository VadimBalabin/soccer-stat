import { List, Typography } from 'antd';

export const CompetitionList = ({ data, loading, onClick }) => (
  <List
    dataSource={data}
    loading={loading}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={
            <a
              href={`../competition/${item.code}`}
              onClick={(e) => {
                e.preventDefault();
                onClick(item);
              }}
            >
              {item.name}
            </a>
          }
          description={item.code}
        />
        <Typography.Text strong>{item.area.name}</Typography.Text>
      </List.Item>
    )}
  />
);
