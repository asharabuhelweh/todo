import React from 'react';

import ToDo from './components/todo/todo.js';
import Header from './header.jsx';


export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
        <ToDo />
      </>
    );
  }
}
