import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
// import './todo.scss';

import { Button,Form } from 'react-bootstrap';
import {  Badge, Toast } from 'react-bootstrap';
import { SettingsContext } from './setting-context';
import { Pagination } from 'react-bootstrap';

import If from './if'

function TodoList(props) {
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState('');
  let list = props.list;
  const context = useContext(SettingsContext)
  const maxItems = context.itemPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  if (context.complete){
    list = list.filter((task) => !task.complete);
  }
  let last = currentPage * context.itemPerPage;
  let first = last - context.itemPerPage;

   if (context.sortBy === 'text'){
    list.sort ((a,b)=> {
      if (a.text && b.text){
        if (a.text.toLowerCase()  > b.text.toLowerCase() ) return 1
        else if (a.text.toLowerCase()  === b.text.toLowerCase() ) return 0
        else if (a.text.toLowerCase() < b.text.toLowerCase() ) return -1
      }
    })
  }

  else if (context.sortBy === 'difficulty'){
    list.sort ((a,b)=> {
      if (a.difficulty && b.difficulty){
        if (a.difficulty > b.difficulty) return 1
        else if (a.difficulty === b.difficulty) return 0
        else if (a.difficulty < b.difficulty) return -1
      }
    })
  }
  
  
  else if (context.sortBy === 'assignee'){
    list.sort ((a,b)=> {
      if (a.assignee && b.assignee){
        if (a.assignee.toLowerCase()  > b.assignee.toLowerCase() ) return 1
        else if (a.assignee.toLowerCase()  === b.assignee.toLowerCase() ) return 0
        else if (a.assignee.toLowerCase() < b.assignee.toLowerCase() ) return -1
      }
    })
  }
  
  let currentTasks = list.slice(first, last);
    let numOfPages =list.length / maxItems ;

  context.setTaskSum(list.length);

  

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= numOfPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

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
      {currentTasks.map(item => (
        <Toast
          key={item._id}
          onClose={() => props.deleteItem(item._id)} value={item._id}
          style={{ 'text-align': 'center', 'position': 'relative', 'left': '250px', 'bottom': '5px','maxWidth':'75%','minWidth':'50%' }}

        >
          <Toast.Header>
            <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}

            <p className="mr-auto ml-4">{item.assignee}</p>
          </Toast.Header>

          <Toast.Body onClick={() => props.handleComplete(item._id)} style={{ cursor: 'pointer' }}>
            <h6 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h6>
            <br />
            <p className="float-right" style={{ fontSize: '80%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
          </Toast.Body>


        </Toast>
      ))}
      <Pagination size="sm" style={{ 'text-align': 'center', 'position': 'relative', 'left': '250px', 'bottom': '5px'}}
>
        <Pagination.Prev size="sm" 
          disabled={active === 1 ? true : false}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        />
        {items}
        <Pagination.Next 
          disabled={active > numOfPages - 1 ? true : false}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
      </Pagination>

      <If condition={flag}>
        <Form onSubmit={editItem}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <span>Edit Task</span>
              <Form.Control type="text" name="text" />
            </Form.Label>
          </Form.Group>

          <  Button variant="warning" type="submit" >Submit Edit</Button>
        </Form>
      </If>

    </>


  );

}

export default TodoList;
