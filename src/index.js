import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Oks</h1>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
