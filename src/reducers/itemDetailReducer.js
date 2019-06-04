import { FETCH_ITEM_DETAIL } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEM_DETAIL:
      return { ...state, ...payload };

    default:
      return state;
  }
};
