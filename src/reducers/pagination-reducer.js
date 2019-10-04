import {
  PAGINATION_SET_PARAMS,
  PAGINATION_DELETED
} from "../actions/constants";

const initialState = {};

export const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION_SET_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: {
          ...state[payload.paginationName],
          [payload.params.paramName]: payload.params.paramValue
        }
      };
    }

    case PAGINATION_DELETED: {
      return Object.entries(state).reduce(
        (acc, [key, value]) =>
          key !== payload.paginationName ? { ...acc, [key]: value } : acc,
        {}
      );
    }

    default: {
      return state;
    }
  }
};
