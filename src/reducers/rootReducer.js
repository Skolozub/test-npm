import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/global";
import { paginationReducer } from "./pagination-reducer";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pagination: paginationReducer
});
