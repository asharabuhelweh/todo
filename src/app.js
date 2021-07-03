import React, { useContext } from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.jsx';
import If from './components/todo/if.jsx';
import { AuthContext } from './components/todo/auth-context';


const App = () => {
  const context  = useContext(AuthContext);

  return (
    <>
      <Header />
      <If condition={context.loggedIn}>
        <ToDo />
      </If>
    </>
  );
};

export default App;


