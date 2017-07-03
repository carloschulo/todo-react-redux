import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const middlewares = [createLogger()];

const persistedState = {
  todos: [
    {
      id: 0,
      text: "Welcome back",
      completed: false
    }
  ]
};

export default createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
