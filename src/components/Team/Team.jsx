import { createElement, useEffect, useState, useRef } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { openNotification } from '../../helpers';
import { DateRangeBox } from '../DateRangeBox';
import { TabMenu } from '../TabMenu';
import { TeamContent } from './TeamContent';
import { DescriptionPane } from '../DescriptionPane';
import { useDispatch, useSelector } from 'react-redux';
import { teamAction, matchesAction } from '../../store/actions';
import { CompetitionList } from '../CompetitionList.jsx';
import { MatchList } from '../MatchList.jsx';
import { SquadList } from '../SquadList.jsx';
import { getDateRange } from '../../utils';

export function Team() {
  const { id, tab } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [curTab, setCurTab] = useState('active competitions');
  const {
    loaded: loadedMatches,
    isFetching: fetchingMatches,
    data: matches,
  } = useSelector((s) => s.matches);
  const team = useSelector((s) => s.team);
  const { loaded, activeCompetitions, squad } = team;
  const [refreshMatches, setRefreshMatshes] = useState(true);
  const CardComponent = {
    'active competitions': CompetitionList,
    matches: MatchList,
    squad: SquadList,
  };
  const dateRangeRef = useRef('');
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    dispatch(teamAction.get(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (refreshMatches || !loadedMatches) {
      dispatch(matchesAction.list('teams', id, search));
      if (search) dateRangeRef.current = search;
      setRefreshMatshes(false);
    }
  }, [dispatch, id, refreshMatches, loadedMatches, search]);

  function showItem(item) {
    if (curTab !== 'active competitions') return;

    if (item.plan !== 'TIER_ONE') {
      openNotification({
        title: 'Oops!',
        text: 'Sorry, not available for free plan',
      });
    } else history.push('../competition/' + item.code);
  }

  function onChangeRange(dt, str) {
    setRefreshMatshes(true);
    if (dt) {
      const [from, to] = str;
      dateRangeRef.current = `?dateFrom=${from}&dateTo=${to}`;
    } else {
      dateRangeRef.current = '';
    }
    history.push(`/team/${id}/matches` + dateRangeRef.current);
  }

  useEffect(() => {
    if (!loaded) return;

    switch (tab) {
      case 'matches':
        setCurTab(tab);
        setTabData(matches);
        break;

      case 'squad':
        setCurTab(tab);
        setTabData(squad);
        break;

      default:
        setCurTab('active competitions');
        setTabData(activeCompetitions);
        break;
    }
  }, [loaded, matches, tab, activeCompetitions, squad]);

  function changeTab(key) {
    switch (key) {
      //  for matches return the previous date range
      case 'matches':
        dateRangeRef.current
          ? history.push(`/team/${id}/${key}${dateRangeRef.current}`)
          : history.push(`/team/${id}/${key}`);
        break;

      case 'squad':
        history.push(`/team/${id}/${key}`);
        break;

      default:
        history.push(`/team/${id}`);
        break;
    }
  }

  return (
    <DescriptionPane
      title={team.name}
      subTitle={team.area.name}
      avatarUrl={team.crestUrl}
      description={<TeamContent data={team} />}
      loading={team.isFetching}
      imageWidth={200}
    >
      <TabMenu
        active={curTab}
        tabs={[
          { key: 'active competitions', count: team.activeCompetitions.length },
          { key: 'matches', count: matches.length },
          { key: 'squad', count: team.squad.length },
        ]}
        extra={
          curTab === 'matches' && (
            <DateRangeBox
              value={getDateRange(search)}
              onChange={onChangeRange}
            />
          )
        }
        onChange={changeTab}
      />
      {createElement(CardComponent[curTab], {
        data: tabData,
        loading: fetchingMatches,
        onClick: showItem,
      })}
    </DescriptionPane>
  );
}
