const initialState = {
  testFlag: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TESTING':
      return {
        ...state,
        testFlag: true
      };
    default:
      return state;
  }
};
