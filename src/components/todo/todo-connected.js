import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Badge } from 'react-bootstrap';
import Acl from './acl.jsx';
import useAjax from './ajax';
import './todo.scss';
import ContentSetting from './setting.jsx';



const ToDo = () => {

  const [list, _getTodoItems, _toggleComplete, _addItem, deleteItem] = useAjax();

  useEffect(_getTodoItems, [_getTodoItems]);

  document.title = `uncompleted tasks : ${list.filter((item) => !item.complete).length}`;
  return (
    <>
      <header>
        <h2>
          <Badge variant="dark" style={{ 'width': '96%', 'margin': '2%', 'padding': '20px 30px', 'text-align': 'left', 'margin-left': '30px' }}>
            There are {list.filter(item => !item.complete).length} Items To Complete
          </Badge>
        </h2>
      </header>

      <section className="todo">

        <Acl capability="create">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>
        </Acl>
        <div>
        <Acl capability ='read'>
             <ContentSetting />
             </Acl>
        </div>

       
        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteItem={deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;