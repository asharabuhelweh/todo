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
        


        <span style={{ "padding" : "10px"}} onClick={() => props.handleComplete(item._id)}>
          {item.text}  : {item.assignee} ,  difficulty : {item.difficulty} ,Due Date:{item.date}
        </span>
        </ListGroup.Item>
    ))}
    </ListGroup>

  
  </>
);
}







export default TodoList;
