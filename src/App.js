import { Route, Switch, Redirect } from "react-router-dom";
import { PageContainer, Competition, Team, CardList } from './components';
import { Alert } from 'antd'
const { ErrorBoundary } = Alert;

const App = () => (
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
          path="/competition/:id/:tab?"
          component={Competition}
        />
        <Route
          exact
          path="/teams"
          component={CardList}
        />
        <Route
          exact
          path="/team/:id/:tab?"
          component={Team}
        />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </ErrorBoundary>
  </PageContainer>
)

export default App;
