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
        createdAt: 'há 1 min',
        user: 'Felipe Chierice',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis esse tenetur fuga? Quaerat fugit asperiores consequuntur itaque voluptas enim? Ducimus quam ipsa itaque obcaecati. Consequatur rem nesciunt officiis, magni asperiores debitis laudantium modi eaque harum distinctio, reiciendis vel accusantium praesentium aut? Deleniti, beatae. Sint amet ipsum, sit maxime illum quas nisi doloremque! Et molestiae magnam illum impedit in quod itaque?',
      },
      {
        id: 2,
        createdAt: 'há 7 min',
        user: 'Danielli Ramos',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore natus et veritatis autem vitae culpa adipisci, quas minus, aspernatur molestiae quae vero voluptates nostrum, ex maiores maxime consectetur ipsa excepturi.',
      },
      {
        id: 3,
        createdAt: 'há 23 min',
        user: 'Valeria Regina',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestias deleniti neque ratione sunt earum maxime recusandae. Soluta sequi odio obcaecati et? Praesentium perferendis impedit, ut delectus hic et aliquam quibusdam obcaecati deserunt dolorem doloribus officia, alias iure qui animi? Fugiat recusandae sit dolor excepturi enim fugit distinctio adipisci est.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="page-content">
          <div className="timeline-offset">
            <Timeline posts={posts} />
          </div>
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
