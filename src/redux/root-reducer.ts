import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
// import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import directoryReducer from "./directory/directory.reducer";
// import shopReducer from "./shop/shop.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import { IUserState } from "./user/user.interaces";
import { IDirectoryState } from "./directory/directory.interfaces";
import { Collections } from "./shop/shop.interfaces";
import { ICartCollection } from "./cart/cart.intefaces";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export interface IRoot {
  directory: IDirectoryState;
  shop: Collections;
  cart: ICartCollection;
  user: IUserState;
}

const rootReducer = combineReducers<IRoot>({
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
