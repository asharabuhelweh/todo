import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);





  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list3 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list3);
    }

  };
  useEffect(() => {
    let list2 = [
      {
        _id: 1,
        complete: false,
        text: 'Clean the Kitchen',
        difficulty: 3,
        assignee: 'Person A'
      },
      {
        _id: 2,
        complete: false,
        text: 'Do the Laundry',
        difficulty: 2,
        assignee: 'Person A'
      },
      {
        _id: 3,
        complete: false,
        text: 'Walk the Dog',
        difficulty: 4,
        assignee: 'Person B'
      },
      {
        _id: 4,
        complete: true,
        text: 'Do Homework',
        difficulty: 3,
        assignee: 'Person C'
      },
      {
        _id: 5,
        complete: false,
        text: 'Take a Nap',
        difficulty: 1,
        assignee: 'Person B'
      }
    ];

    setList(list2);
  }, []);

  const editItem = (text , id)=>{
    let item = list.filter ((item)=> item._id === id)[0] || {}
    if (item) {
      item.text = text;
      let list4 = list.map (element =>{
        if (element._id === id ){
          return item 
        }else {
          return element
        }
      })
      setList (list4)
    }
   
   
    }

  const deleteItem = (id) => {
    let list2 = list.filter((i) => i._id !== id) || {};
    setList(list2);
  };

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            editItem = {editItem}
            deleteItem={deleteItem}
          />
        </div>

      </section>
    </>
  );
}

export default ToDo;
