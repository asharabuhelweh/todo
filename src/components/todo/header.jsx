import { Navbar } from 'react-bootstrap';
import React from 'react';

function Header  (props)  {
  return (
    <>
    
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
    </Navbar>
    </>
  );
};

export default Header;