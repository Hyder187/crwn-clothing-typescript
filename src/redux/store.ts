import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// export const persistor = persistStore(store);

export default store;
