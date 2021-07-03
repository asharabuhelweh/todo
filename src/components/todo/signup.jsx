import React, { useContext } from 'react';
import { AuthContext } from './auth-context';
import { Modal, Button, Form } from 'react-bootstrap';
import If from './if.jsx';
function Register() {
  const context = useContext(AuthContext);


  const submitHandler = e => {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value || 'user',
    }
    context.signUp(user.username, user.password, user.role)
  }

  return (
    <>
      <If condition={!context.loggedIn}>
        <Modal show={context.show} onHide={context.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>


          <Form style={{ 'margin': '20px', 'marginTop': '30px' }} onSubmit={submitHandler}>
            <Modal.Body >

              <Form.Label>Username</Form.Label>
              <Form.Control type='text' name='username' placeholder="Please enter your username" />

              <Form.Label>Email </Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter your email" />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Please Enter Password" />

              <Form.Label>Role</Form.Label>
              <Form.Control as="select" name="role" >
                <option value="user" >User</option>
                <option value="editor" >editor</option>
                <option value="admin" >Admin</option>
              </Form.Control >

            </Modal.Body>
            <Modal.Footer>

              <Button variant="primary" type="submit" onClick={context.handleClose}>Sign Up</Button>

            </Modal.Footer>
          </Form>
        </Modal>


      </If>


    </>
  )
}

export default Register;