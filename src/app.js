import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <ToDo />
    </>
  );
};

export default App;
