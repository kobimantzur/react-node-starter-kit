
import * as types from './types';


const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    default:
    return state;
  }
}