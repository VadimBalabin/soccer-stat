import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

function configureStore() {
  return createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)))
}

export const store = configureStore();