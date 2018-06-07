import { combineReducers } from 'redux';

import { dogsReducer } from './dogs';

const rootReducer = combineReducers({
  dogs: dogsReducer,
})

export default rootReducer;