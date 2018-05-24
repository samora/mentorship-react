import { createStore } from 'redux'
import { counterReducer } from './modules/counter';

export default createStore(counterReducer);