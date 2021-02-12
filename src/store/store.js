import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducers from "./reducers/";

function configureStore() {
  return createStore(reducers(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)))
}

export const history = createBrowserHistory();
export const store = configureStore();