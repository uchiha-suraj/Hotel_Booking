import { configureStore } from "@reduxjs/toolkit";
import hotelListReducer from "./slice/hotelList";
import hotelReducer from "./slice/hotel";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  hotelList: hotelListReducer,
  hotel: hotelReducer,
  hotels: rootReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
