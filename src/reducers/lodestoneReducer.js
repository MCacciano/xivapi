import { FETCH_LODESTONE } from '../actions/types';

const initialState = {};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LODESTONE:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
