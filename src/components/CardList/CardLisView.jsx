import { List, Skeleton } from 'antd';
import CompetitionCardView from '../CompetitionCardView';
import TeamCardView from '../TeamCardView';

export function CardListView({ tab, data, loading, loaded, handleClick }) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      className="card-list"
      renderItem={(item) => (
        <List.Item>
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
                <CompetitionCardView item={item} handleClick={handleClick} />
              ) : (
                <TeamCardView item={item} handleClick={handleClick} />
              ))}
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
