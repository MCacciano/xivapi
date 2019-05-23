import { GET_CHARACTER } from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTER:
      return payload;
    default:
      return state;
  }
};
