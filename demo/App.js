import React from 'react';
import { Provider } from 'react-redux';
import MainView from './src/views/MainView'
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

export default App;
