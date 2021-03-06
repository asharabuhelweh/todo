import React from 'react';
import  { Button } from 'react-bootstrap';
import { Form, Card} from  'react-bootstrap'
import ContentSetting from './setting.jsx'
import  useForm from './useForm';
import Acl from './acl.jsx';
 function TodoForm(props)   {

  const [handleInputChange , handleSubmit] = useForm(callback);


  function callback (data){
    props.handleSubmit(data);

  }

  return (
    <>
    <Card style= {{'position':'relative', 'left':'70px'}}>
    <Card.Header  as="h3">Add Item</Card.Header>
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
