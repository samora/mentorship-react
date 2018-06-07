import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './modules/rootReducer';

export default applyMiddleware(
    promiseMiddleware(),
)(createStore)(
  rootReducer,
  devToolsEnhancer()
);