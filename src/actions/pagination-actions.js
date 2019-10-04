import {
  PAGINATION_SET_PARAMS,
  PAGINATION_DELETED
} from "./constants";

export const setPaginationPage = ({ paginationName, params }) => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName,
    params
  }
});

export const deletePagination = ({ paginationName }) => ({
  type: PAGINATION_DELETED,
  payload: {
    paginationName
  }
});
