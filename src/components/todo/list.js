import React from 'react';
import { useState } from 'react';
import  { Button } from 'react-bootstrap';
import {ListGroup , Form} from  'react-bootstrap'

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
  <ListGroup  style={{  'position': 'relative', 'left': '250px', 'bottom': '5px', "maxWidth": '150%' }}
>
    {props.list.map(item => (
    
      <ListGroup.Item action variant={item.complete ? 'success' : 'danger'}
  

        className={`complete-${item.complete.toString()}`}
        key={item._id}
      >

        <Button variant="outline-light " onClick={() => props.deleteItem(item._id)} value={item._id}>Delete</Button>
        <Button variant="outline-light" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '}
        


        <span onClick={() => props.handleComplete(item._id)}>
          {item.text}  : {item.assignee} ,  difficulty : {item.difficulty} ,Due Date:{item.date}
        </span>
        </ListGroup.Item>
    ))}
    </ListGroup>

  <If condition={flag}>
    <Form onSubmit= {editItem}>

    <Form.Label>
      <span>Edit Task</span>
      <Form.Control type="text" name="text"   />
      </Form.Label>
      <Button variant="secondary" type='submit' >Submit Edit</Button>
      </Form>
  </If>
  </>
);
}







export default TodoList;
