import {ADD_DATA} from './actions';

export const testReducerInitialState = {
  data: [],
};

export const testReducer = (state = testReducerInitialState, action) => {
  switch(action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [
           ...state.data,
          action.payload,
        ]
      }
    default:
      return state;
  }
}