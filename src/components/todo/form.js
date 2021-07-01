import React, { useState } from 'react';
import  { Button } from 'react-bootstrap';
import { Form, Card} from  'react-bootstrap'

 function TodoForm(props)   {

 const [item , setItem] = useState({});
   
  
  const handleInputChange = e => {
    setItem(  {...item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
   setItem({});
  };


return (
  <>
  <Card style= {{'position':'relative', 'left':'70px'}}>
  <Card.Header as="h3">Add Item</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}  
>
     
    <Form.Group controlId="formBasicEmail">
      <Form.Label>
      <span>To Do Item</span>
      <Form.Control
        name="text"
        placeholder="Add To Do List Item"
          onChange={handleInputChange}
        />
      </Form.Label>
      </Form.Group>

          
      <Form.Group controlId="formBasicEmail">
      <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
      </Form.Label>
      </Form.Group>
         
      <Form.Group controlId="formBasicEmail">
      <Form.Label>
          <span>Due Date</span>
          <Form.Control type="date" name="due"  onChange={handleInputChange} />
      </Form.Label>
      </Form.Group>
        <Form.Group controlId="formBasicEmail">
      <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control variant="info" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
      </Form.Label>
      </Form.Group>
         
        <Button style={{'width':'110px' ,'height':'45px'}} type='submit' variant="primary">Add Item</Button>

        </Form>
        </Card.Body>
           </Card>
           </>
  );
}

export default TodoForm;
