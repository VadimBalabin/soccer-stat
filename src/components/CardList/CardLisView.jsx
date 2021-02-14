import { List, Skeleton } from 'antd';
import CompetitionCardView from '../CompetitionCardView';
import TeamCardView from '../TeamCardView';

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
              <CompetitionCardView item={item} handleClick={onOpenCard} />
            ) : (
              <TeamCardView item={item} handleClick={onOpenCard} />
            ))}
        </Skeleton>
      </List.Item>
    )}
  />
);
