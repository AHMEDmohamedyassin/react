import React from "react";
import {Navbar , Container , Nav , Form , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavBar = ({search}) => {
  return (
    <Navbar className="bg-secondary" expand="lg">
      <Container>
        <Link to={'/'}><Navbar.Brand className="text-white">أفلام</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control onChange={(e) => search(e.target.value)} type="search" placeholder="بحث ...." className="me-2" aria-label="Search"/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
