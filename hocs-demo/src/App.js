import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import AnotherView from './views/AnotherView';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/another" component={AnotherView}/>
          <Route exact path="/" component={HomeView}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
