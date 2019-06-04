import { SEARCH_ALL } from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_ALL:
      return payload;
    default:
      return state;
  }
};
