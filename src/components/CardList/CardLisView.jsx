import { List, Skeleton } from 'antd';
import CompetitionCard from '../CompetitionCard';
import TeamCard from '../TeamCard';

export const CardListView = ({ tab, data, loading, loaded, onOpenCard }) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 3,
      xxl: 4,
    }}
    dataSource={data}
    className="card-list"
    renderItem={(item) => (
      <List.Item style={{ minWidth: 300 }}>
        <Skeleton
          loading={loading}
          active
          avatar={{ style: { margin: '10px 0' } }}
          title
          paragraph={{ rows: 1, style: { marginTop: 16 } }}
          round
        >
          {loaded &&
            (tab === 'competitions' ? (
              <CompetitionCard item={item} handleClick={onOpenCard} />
            ) : (
              <TeamCard item={item} handleClick={onOpenCard} />
            ))}
        </Skeleton>
      </List.Item>
    )}
  />
);
