import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/global";
import { paginationReducer } from "@skolozub/react-redux--pagination";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pagination: paginationReducer
});
