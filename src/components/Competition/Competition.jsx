import { createElement, useEffect, useRef, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { DateRangeBox } from '../DateRangeBox';
import { SeasonList } from '../SeasonList';
import { MatchList } from '../MatchList.jsx';
import { TeamList } from '../TeamList';
import { useDispatch, useSelector } from 'react-redux';
import { competitionAction, matchesAction } from '../../store/actions';
import { getDateRange } from '../../utils';
import { TabMenu } from '../TabMenu';
import { DescriptionPane } from '../DescriptionPane';
import { CompetitionContent } from './CompetitionContent';

export function Competition() {
  const { id, tab } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [curTab, setCurTab] = useState('seasons');
  const [tabData, setTabData] = useState([]);
  const competition = useSelector((s) => s.competition);
  const {
    loaded: loadedMatches,
    isFetching: fetchingMatches,
    data: matches,
  } = useSelector((s) => s.matches);
  const { loaded, seasons, teams } = competition;
  const [refreshMatches, setRefreshMatshes] = useState(!loadedMatches);
  const dateRangeRef = useRef('');
  const cardComponent = {
    seasons: SeasonList,
    matches: MatchList,
    teams: TeamList,
  };
  const extraTabContent = {
    matches: (
      <DateRangeBox value={getDateRange(search)} onChange={onChangeRange} />
    ),
  };

  useEffect(() => {
    if (id) {
      dispatch(competitionAction.getContent(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (refreshMatches) {
      dispatch(matchesAction.list('competitions', id, search));
      if (search) dateRangeRef.current = search;
      setRefreshMatshes(false);
    }
  }, [dispatch, id, refreshMatches, loadedMatches, search]);

  useEffect(() => {
    if (!loaded) return;
    const tabsData = {
      seasons,
      matches,
      teams,
    };
    const variant = tab || 'seasons';

    setCurTab(variant);
    setTabData(tabsData[variant]);
  }, [loaded, matches, seasons, tab, teams]);

  function onChangeRange(dt, str) {
    setRefreshMatshes(true);
    if (dt) {
      const [from, to] = str;
      dateRangeRef.current = `?dateFrom=${from}&dateTo=${to}`;
    } else {
      dateRangeRef.current = '';
    }
    history.replace(`/competition/${id}/matches` + dateRangeRef.current);
  }

  function changeTab(key) {
    switch (key) {
      //  for matches return the previous date range
      case 'matches':
        dateRangeRef.current
          ? history.replace(`/competition/${id}/${key}${dateRangeRef.current}`)
          : history.replace(`/competition/${id}/${key}`);
        break;

      case 'teams':
        history.replace(`/competition/${id}/${key}`);
        break;

      default:
        history.replace(`/competition/${id}`);
        break;
    }
  }

  return (
    <DescriptionPane
      title={competition.name}
      subTitle={competition.code}
      avatarUrl={competition.emblemUrl}
      loading={!loaded}
      description={<CompetitionContent data={competition} />}
    >
      <TabMenu
        active={curTab}
        tabs={[
          { key: 'seasons', count: seasons.length },
          { key: 'matches', count: matches.length },
          { key: 'teams', count: teams.length },
        ]}
        extra={extraTabContent[curTab]}
        onChange={changeTab}
      />
      {createElement(cardComponent[curTab], {
        data: tabData,
        loading: fetchingMatches,
      })}
    </DescriptionPane>
  );
}
