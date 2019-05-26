import { FETCH_FREE_COMPANY, FREE_COMPANY_SEARCH } from '../actions/types';

const initialState = [];

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_FREE_COMPANY:
      return {
        ...state,
        payload
      };
    case FREE_COMPANY_SEARCH:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
};
