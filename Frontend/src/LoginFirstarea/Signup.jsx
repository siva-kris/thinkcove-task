import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1>Find Your Perfect Stay</h1>
            <p>Explore amazing places to stay with our easy booking system.</p>
            <Form>
              <Form.Group controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Where are you going?" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckIn" className="mt-3">
                <Form.Label>Check-In Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckOut" className="mt-3">
                <Form.Label>Check-Out Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Button variant="danger" type="submit" className="mt-4">
                Search
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <img
              src="https://source.unsplash.com/800x600/?travel,hotel"
              alt="Stay"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="danger" type="submit" className="mt-4 w-100">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LandingPage;
