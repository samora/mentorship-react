const INCREMENT = 'counter/INCREMENT';

//region Actions
export function incrementAction() {
  return {
    type: INCREMENT,
  }
}
//endregion

//region Reducers
const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const { count } = state;
      return {
        ...state,
        count: count+1,
      };
    default:
      return state;
  }
}
//endregion