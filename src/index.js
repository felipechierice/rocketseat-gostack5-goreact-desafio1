import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';

import Header from './components/Header';
import Timeline from './components/Timeline';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        user: 'Felipe Chierice',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium nemo magnam odit, quaerat sapiente laudantium suscipit nulla rerum voluptatibus.',
      },
      {
        id: 2,
        user: 'Danielli Ramos',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam dolores? Quia omnis praesentium quos?',
      },
      {
        id: 3,
        user: 'Valeria Regina',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem neque ex sint, perferendis necessitatibus inventore enim illum, quae, vitae velit molestias quas blanditiis porro!',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Timeline posts={posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
