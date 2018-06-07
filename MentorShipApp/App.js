import React from 'react';
import { Provider } from 'react-redux';
import MainView from './views/MainView'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

export default App;
