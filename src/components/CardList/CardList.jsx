import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { competitionsAction, teamsAction } from '../../store/actions';
import { CardMenu } from '../CardMenu';
import { CardListView } from './CardLisView';
import { SearchBox } from '../SearchBox';
import './CardList.css';
import { Heading } from '../Heading';

export function CardListBase() {
  const { pathname } = useLocation();
  const [heading, setHeading] = useState('');
  const history = useHistory();
  const [tab, setTab] = useState('competitions');
  const [list, setList] = useState([...Array(8).keys()]);
  const dispatch = useDispatch();
  const { data, isFetching, loaded } = useSelector((s) => s[tab]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        dispatch(competitionsAction.getCompetetionList());
        setHeading('Competitions');
        setTab('competitions');
        break;

      case '/teams':
        dispatch(teamsAction.getTeamList());
        setHeading('Teams');
        setTab('teams');
        break;

      default:
        break;
    }
  }, [dispatch, pathname]);

  useEffect(() => {
    if (loaded) {
      setList(data);
    }
  }, [data, loaded]);

  function changeTab({ key }) {
    switch (key) {
      case 'competitions':
        history.push('/');
        break;

      case 'teams':
        history.push('/teams');
        break;

      default:
        break;
    }
  }

  const handleClick = (code) => {
    // remove the last letter
    history.push(`/${tab.slice(0, -1)}/${code}`);
  };

  const handleSearch = (e) => {
    const val = e.target.value.trim();
    if (!val.length) {
      setList(data);
      return;
    }

    const filteredData = data.filter((item) =>
      RegExp(val, 'i').test(item.name + item.area.name)
    );
    setList(filteredData);
  };

  return (
    <>
      <Heading heading={heading} />
      <SearchBox handleSearch={handleSearch} />
      <CardMenu tab={tab} changeTab={changeTab} />
      <CardListView
        tab={tab}
        data={list}
        loading={isFetching}
        loaded={loaded}
        handleClick={handleClick}
      />
    </>
  );
}
