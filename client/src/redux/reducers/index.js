import { combineReducers } from "@reduxjs/toolkit";
import hotelsreducer from "./hotelsreducer";

const rootReducer = combineReducers({
  hotels: hotelsreducer,
})

export default rootReducer;