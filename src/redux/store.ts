import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
// export const persistor = persistStore(store);

export default { store, persistor };
