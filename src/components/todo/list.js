import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {  Form, Badge,Toast } from 'react-bootstrap'

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
      {props.list.map(item => (
      <Toast  
      key={item._id}
      onClose={() => props.deleteItem(item._id)} value={item._id}
      style={{'text-align': 'center' , 'position':'relative', 'left':'250px','bottom':'5px', "maxWidth": '150%' }}

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
   
    <If condition={flag}>
    <Form onSubmit= {editItem}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>
    <span>Edit Task</span>
    <Form.Control  type="text" name="text"   />
    </Form.Label>
    </Form.Group>
  
    <  Button variant="warning" type="submit" >Submit Edit</Button>
    </Form>
</If>

</>

   
  );

}

export default TodoList;
