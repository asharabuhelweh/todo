import React from 'react';
import { useState } from 'react';

import If from './if'

function TodoList(props) {
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState('');

  const toggle = (id) => {
    setFlag(!flag);
    setId(id)
  }

  const editItem = e => {
    e.preventDefault();
    toggle(id);
    let newUpdate = e.target.text.value
    props.editItem(newUpdate, id)
  }

  return (
    <>
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span style={{ cursor: 'pointer' }} onClick={() => props.handleComplete(item._id)}>
            <p>
              {item.text} : {item.assignee} , Difficulty:{item.difficulty}, Due Date:{item.date}
            </p>
          </span>
          <button onClick={() => toggle(item._id)} value={item._id}>Edit</button>
          <button id="delete" onClick={() => props.deleteItem(item._id)} >X</button>

        </li>
      ))}
    </ul>
    <If condition={flag}>
    <form onSubmit= {editItem}>
    <label>
    <span>Edit Task</span>
    <input type="text" name="text"   />
    </label>
    <button type='submit' >Submit</button>
    </form>
</If>
</>
  );
}



export default TodoList;
