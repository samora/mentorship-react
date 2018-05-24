import React, { Component, Fragment } from 'react';

export function withHeader(WrappedComponent) {
  class Header extends Component {
    render() {
      return (
        <Fragment>
          <h1 id="main-header">Hammer Time!</h1>
          <WrappedComponent {...this.props}/>
        </Fragment>
      )
    }
  }

  return Header;
}