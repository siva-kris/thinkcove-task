import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoMdMenu } from "react-icons/io";
import { Form, Button, Row, Col } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import Logo from "./logo.png";
import Car from "../Navbar/Carosula";
function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      {window.location.pathname !== "/" && (
        <div>
          <div className="setnav  " style={{ height: "170px" }}>
            <Navbar
              expand="lg"
              className="bg-body-tertiary"
              style={{ height: "150px" }}
            >
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "90px", height: "90px" }}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav
                    className=" mb-3 "
                    style={{
                      position: "relative",
                      top: "-20px",
                      left: "450px",
                    }}
                  >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#experiences">Experiences</Nav.Link>
                  </Nav>
                  <Form
                    className="mx-auto d-none d-lg-flex border rounded-pill shadow-sm py-3 "
                    style={{
                      padding: "6px 10px",
                      position: "relative",
                      top: "30px",
                      left: "-40px",
                    }}
                  >
                    <Row className="align-items-center gx-2">
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Where"
                          className="border-0"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="date"
                          placeholder="Where"
                          className="border-0"
                        />
                      </Col>
                      <Col>
                        <Form.Control type="date" className="border-0" />
                      </Col>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Who"
                          className="border-0"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button variant="danger" className="rounded-circle">
                          <IoSearch style={{ width: "20px", height: "20px" }} />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  <Nav className="ms-auto position-relative py-3">
                    <div
                      className="setbox d-flex align-items-center"
                      onClick={toggleDropdown}
                      style={{
                        cursor: "pointer",
                        border: "2px solid rgb(194, 194, 194)",
                        borderRadius: "15px",
                        padding: "5px",
                      }}
                    >
                      <IoMdMenu style={{ width: "25px", height: "25px" }} />
                      <img
                        src="https://via.placeholder.com/35"
                        className="rounded-circle ms-2"
                        height="35"
                        alt="User"
                        loading="lazy"
                      />
                    </div>

                    {showDropdown && (
                      <ul
                        className="dropdown-menu show"
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          zIndex: 1000,
                        }}
                      >
                        <li>
                          <a className="dropdown-item" href="#action">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#another">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#more">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <Car />
        </div>
      )}
    </div>
  );
}

export default BasicExample;
