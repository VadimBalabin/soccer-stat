import { Route, Switch, Redirect } from "react-router-dom";
import { PageContainer, Competition, Team, CardList } from './components';
import { Alert } from 'antd'
const { ErrorBoundary } = Alert;

// TODO: Fix route path
const App = () => {

  return (
    <PageContainer>
      <ErrorBoundary>
        <Switch>
          <Route
            exact
            path="/"
            component={CardList}
          />
          <Route
            exact
            path="/competition/:id/:tab"
            component={Competition}
          />
          <Route
            exact
            path="/competition/:id"
            component={Competition}
          />
          <Route
            exact
            path="/teams"
            component={CardList}
          />
          <Route
            exact
            path="/team/:id/:tab"
            component={Team}
          />
          <Route
            exact
            path="/team/:id"
            component={Team}
          />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ErrorBoundary>
    </PageContainer>
  )
};

export default App;
