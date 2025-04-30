import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import H from "../Images/house.jpg";
import R from "../Images/rooms.jpg";
import F from "../Images/bedroom.jpg";
import Card1 from "../Images/card-img1.png";
import Card2 from "../Images/card-img2.png";
import Card3 from "../Images/card-img3.png";
import Card4 from "../Images/card-img5.png";
import Cardes1 from "../Images/card1.png";
import Cardes2 from "../Images/card2.png";
import Cardes3 from "../Images/card3.png";
import Cardes4 from "../Images/card4.png";
import C1 from "../Images/card-1.png";
import C2 from "../Images/card-2.png";
import C3 from "../Images/card-3.png";
import Logo from "../Images/logo.png";
import Img1 from "../Images/img-1.avif";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../LoginFirstarea/Frontpage.css";

function NavScrollExample() {
  const navigate = useNavigate();
  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: "test@example.com",
          password: "123456",
        }
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  function handlesuccess(credentialResponse) {
    console.log("Google Sign In success", credentialResponse);
  }
  function handleerror() {
    console.log("Google Sign In success");
  }

  return (
    <>
      {/* Top Navbar */}
      <div className="setbox">
        {window.location.pathname === "/" && (
          <Navbar expand="lg" className="setbox shadow-sm" sticky="top">
            <Container fluid>
              <Navbar.Brand href="#home" className="ms-lg-5">
                <img
                  src={Logo}
                  alt="Logo"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Nav className="ms-auto my-2 my-lg-0 nav-links me-lg-5 d-flex align-items-center">
                <Nav.Link href="/home">Airbnb your place</Nav.Link>
                <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )}
      </div>

      {/* Main Content */}
      <div className="setcontent">
        <Container fluid className="py-4">
          <Row>
            <Col xs={12} md={4}>
              <Container className="search-form-container d-flex justify-content-center align-items-center">
                <div className="search-box shadow">
                  <h3 className="mb-2 fw-bolder">
                    Find places to stay on Airbnb
                  </h3>
                  <p className="mb-4 text-muted">
                    Discover entire homes and rooms perfect for any trip.
                  </p>
                  <Form>
                    <Form.Group controlId="location" className="mb-3">
                      <Form.Label className="form-label-custom">
                        LOCATION
                      </Form.Label>
                      <Form.Control type="text" placeholder="Anywhere" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Col>
                        <Form.Label className="form-label-custom">
                          CHECK IN
                        </Form.Label>
                        <Form.Control type="date" />
                      </Col>
                      <Col>
                        <Form.Label className="form-label-custom">
                          CHECK OUT
                        </Form.Label>
                        <Form.Control type="date" />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col>
                        <Form.Label className="form-label-custom">
                          ADULTS
                        </Form.Label>
                        <Form.Select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label className="form-label-custom">
                          CHILDREN
                        </Form.Label>
                        <Form.Select>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </Form.Select>
                      </Col>
                    </Row>

                    <Button variant="danger" className="w-100 search-button">
                      Search
                    </Button>
                  </Form>
                </div>
              </Container>
            </Col>

            <Col xs={12} md={8}>
              <img
                src={Img1}
                alt="Airbnb interior"
                className="responsive-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* second content */}
      <div className="setsecond p-3">
        <Container>
          <Row>
            <Col sm>
              <div className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="#000"
                      d="m12 3l.295-.69a.75.75 0 0 0-.59 0zm0 18l-.372.651a.75.75 0 0 0 .744 0zm6.394-15.26l-.295.69zM8.024 18.727l-.373.652zm3.68-16.416L5.312 5.05L5.9 6.43l6.394-2.74zM4.25 6.659v6.86h1.5v-6.86zm3.401 12.72l3.977 2.272l.744-1.302l-3.977-2.273zm4.721 2.272l3.977-2.272l-.744-1.303l-3.977 2.273zm7.378-8.133V6.66h-1.5v6.86zm-1.06-8.467l-6.395-2.74l-.59 1.378l6.394 2.74zm1.06 1.608c0-.7-.417-1.332-1.06-1.608l-.591 1.379a.25.25 0 0 1 .151.23zm-3.401 12.72a6.75 6.75 0 0 0 3.401-5.86h-1.5a5.25 5.25 0 0 1-2.645 4.557zM4.25 13.519a6.75 6.75 0 0 0 3.401 5.86l.744-1.303a5.25 5.25 0 0 1-2.645-4.558zM5.31 5.05a1.75 1.75 0 0 0-1.06 1.608h1.5c0-.1.06-.19.152-.23z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m15 10l-4 4l-2-2"
                    />
                  </g>
                </svg>
              </div>
              <h4>Enjoy some flexibility</h4>
              <p>
                Stays with flexible cancellation make it easy to rebook if your
                plans change.
              </p>
            </Col>
            <Col sm>
              <div className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="#000"
                      d="m12 3l.295-.69a.75.75 0 0 0-.59 0zm0 18l-.372.651a.75.75 0 0 0 .744 0zm6.394-15.26l-.295.69zM8.024 18.727l-.373.652zm3.68-16.416L5.312 5.05L5.9 6.43l6.394-2.74zM4.25 6.659v6.86h1.5v-6.86zm3.401 12.72l3.977 2.272l.744-1.302l-3.977-2.273zm4.721 2.272l3.977-2.272l-.744-1.303l-3.977 2.273zm7.378-8.133V6.66h-1.5v6.86zm-1.06-8.467l-6.395-2.74l-.59 1.378l6.394 2.74zm1.06 1.608c0-.7-.417-1.332-1.06-1.608l-.591 1.379a.25.25 0 0 1 .151.23zm-3.401 12.72a6.75 6.75 0 0 0 3.401-5.86h-1.5a5.25 5.25 0 0 1-2.645 4.557zM4.25 13.519a6.75 6.75 0 0 0 3.401 5.86l.744-1.303a5.25 5.25 0 0 1-2.645-4.558zM5.31 5.05a1.75 1.75 0 0 0-1.06 1.608h1.5c0-.1.06-.19.152-.23z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m15 10l-4 4l-2-2"
                    />
                  </g>
                </svg>
              </div>
              <h4>More than 7M active listings</h4>
              <p>
                Join more than 1 billion guests who’ve found getaways in over
                220 countries and destinations.
              </p>
            </Col>{" "}
            <Col sm>
              <div className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="#000"
                      d="m12 3l.295-.69a.75.75 0 0 0-.59 0zm0 18l-.372.651a.75.75 0 0 0 .744 0zm6.394-15.26l-.295.69zM8.024 18.727l-.373.652zm3.68-16.416L5.312 5.05L5.9 6.43l6.394-2.74zM4.25 6.659v6.86h1.5v-6.86zm3.401 12.72l3.977 2.272l.744-1.302l-3.977-2.273zm4.721 2.272l3.977-2.272l-.744-1.303l-3.977 2.273zm7.378-8.133V6.66h-1.5v6.86zm-1.06-8.467l-6.395-2.74l-.59 1.378l6.394 2.74zm1.06 1.608c0-.7-.417-1.332-1.06-1.608l-.591 1.379a.25.25 0 0 1 .151.23zm-3.401 12.72a6.75 6.75 0 0 0 3.401-5.86h-1.5a5.25 5.25 0 0 1-2.645 4.557zM4.25 13.519a6.75 6.75 0 0 0 3.401 5.86l.744-1.303a5.25 5.25 0 0 1-2.645-4.558zM5.31 5.05a1.75 1.75 0 0 0-1.06 1.608h1.5c0-.1.06-.19.152-.23z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m15 10l-4 4l-2-2"
                    />
                  </g>
                </svg>
              </div>
              <h4>100+ filters for tailored stays</h4>
              <p>
                Pick your price range, the number of rooms you want and other
                key amenities to find the stay that fits your needs.
              </p>
            </Col>{" "}
          </Row>
        </Container>
      </div>

      {/* Third contend */}
      <div className="third contend p-3">
        <Container>
          {" "}
          <div className="settilte">
            <h2>Big, small, we have it all</h2>
            <Row className="p-2">
              <Col sm>
                <div className="icons">
                  <img src={H} className="set-card-img" alt="...house"></img>
                  <h4>House</h4>{" "}
                  <p>
                    If you need extra space, get an entire place all to
                    yourself.
                  </p>
                </div>
              </Col>{" "}
              <Col sm>
                <div className="icons">
                  <img src={F} className="set-card-img" alt="...flats"></img>
                </div>
                <h4>Flats</h4>
                <p>
                  Stay in some of the most convenient locations with spaces in
                  shared buildings.
                </p>
              </Col>{" "}
              <Col sm>
                <div className="icons">
                  <img src={R} className="set-card-img" alt="...rooms"></img>
                </div>
                <h4>Rooms</h4>
                <p>
                  Enjoy your own sleeping space and share a common area with
                  others.
                </p>
              </Col>{" "}
            </Row>
          </div>
        </Container>
      </div>

      {/* Four contend */}
      <div className="setfourpart p-5">
        <div className="settitle">
          <Container>
            {" "}
            <h3>Family-friendly stays with full kitchens</h3>
            <h6>
              Prepare a feast for loved ones in these stays with kitchens and
              BBQ grills.
            </h6>
            <br></br>
            <Row>
              <Col sm>
                {" "}
                <div className="icons">
                  {/* <img
                    src={R}
                    alt="..rooms"
                    style={{ width: "100px", height: "auto" }}
                  /> */}
                  <img src={Card1} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b>Tiny home in Cabangan, Philippines</b>
                  <br></br> Il Paraiso Beach Front Villa 1<br></br> 2 queen
                  beds2 queen beds<br></br> 4–9 May4–9 May<br></br>
                  <b> ₹39,782</b> for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Card2} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b>Home in Sharm El-Sheikh, Egypt</b> <br></br>Villa Montazah
                  - Sharm el-Sheikh <br></br>6 beds <br></br>1–6 May <br></br>
                  <b>₹154,060</b>
                  for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Card3} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b>Home in Quezon City, Philippines</b>
                  <br></br> Spacious 3BR-Tropical Poolhouse|Prime QC Location!
                  <br></br>7 beds
                  <br></br>1–6 Jun <br></br>
                  <b> ₹117,093</b> for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Card4} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b>Villa in Phan Thiet, Vietnam</b>
                  <br></br> TerraCotta Beachfront Villa Phan Thiet..<br></br> 10
                  beds<br></br> May25–30 <br></br>
                  <b>₹162,698</b> for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <button className="setbtn">Let's get Cooking</button>
              </Col>
            </Row>
          </Container>
        </div>
        {/* five content */}
      </div>

      {/* five contend */}
      <div className="setfivepart p-5">
        <div className="settitle">
          <Container>
            {" "}
            <h3>Homes with refreshing pools</h3>
            <h6>Relax with your crew by the pool in stays with 2+ bedrooms.</h6>
            <br></br>
            <Row>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Cardes1} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b> Villa in Nandi Hills</b> <br></br>Hill's Edge/Private Pool
                  Stay <br></br>4 beds <br></br>3–8 May<br></br> <b>₹74,747</b>{" "}
                  for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Cardes2} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b> Cottage in Muhamma </b>
                  <br></br>Tranquil Waters- A Pool villa by the..<br></br>5 beds
                  <br></br>1–6 May<br></br> <b>₹49,071</b> for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Cardes3} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b>Castle in Pattanur</b> <br></br>House of Dancing
                  Cactus-pool rural...<br></br> 2 double beds<br></br>3–8 May
                  <br></br> <b>₹30,126 </b>for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <div className="icons">
                  <img src={Cardes4} class="setimage" alt="...rooms"></img>
                </div>
                <p>
                  <b> Home in Bengaluru</b>
                  <br></br> Picnic 4 all. private heated pool & bbq..<br></br>3
                  beds <br></br>4–9 May<br></br> <b>₹56,431</b> for 5 nights
                </p>
              </Col>
              <Col sm>
                {" "}
                <button className="setbtn">Keep it Chill</button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* six contend */}
      <div className="sixcontend p-3">
        <Container>
          <div className="settitle">
            <h2>Get specific with your favourite amenities</h2>
            <p>
              Choose from top features like these – and more – for a
              personalised stay.
            </p>
          </div>
          <br></br>
          <Row>
            <Col sm>
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#000"
                    d="M9 10.75a3.25 3.25 0 0 1 6.5 0v13.402c.8.075 1.634.204 2.5.397V21h15.5v8.058a17 17 0 0 0 2.5-.264V10.75a5.75 5.75 0 0 0-11.5 0v1a1.25 1.25 0 1 0 2.5 0v-1a3.25 3.25 0 0 1 6.5 0v7.75H18v-7.75a5.75 5.75 0 0 0-11.5 0v1a1.25 1.25 0 1 0 2.5 0zm13.054 20.003c-9.48-4.866-14.726-.355-14.964-.15l-.002.001c-.51.458-1.3.418-1.76-.09a1.24 1.24 0 0 1 .08-1.75c.27-.25 6.689-5.941 17.806-.23c9.928 5.105 17.586.757 17.906.568c.59-.349 1.36-.15 1.71.438c.349.587.16 1.353-.44 1.701c-.23.14-3.9 2.259-9.438 2.259c-3.837-.103-7.472-.983-10.898-2.747M7.09 39.603c.238-.205 5.485-4.716 14.964.15c3.426 1.764 7.06 2.644 10.898 2.747c5.538 0 9.207-2.12 9.437-2.259c.6-.348.79-1.114.44-1.702a1.256 1.256 0 0 0-1.71-.437c-.32.189-7.977 4.537-17.905-.567c-11.117-5.712-17.535-.02-17.805.228a1.24 1.24 0 0 0-.08 1.752c.46.507 1.25.547 1.76.09z"
                  />
                </svg>
                <span className="fw-bolder">Pool</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    d="M9 19v-6.5m0 0v-7h4.5a3.5 3.5 0 1 1 0 7zm3 11C5.649 23.5.5 18.351.5 12S5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5Z"
                    stroke-width="1"
                  />
                </svg>
                <span className="fw-bolder">Free Praking</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#000"
                    d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM128 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50m70-110a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-73.76 48.24l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48m32-.48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0"
                  />
                </svg>
                <span className="fw-bolder">Washing Machine</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22z"
                  />
                </svg>
                <span className="fw-bolder">AC</span>
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm>
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#000"
                    d="m133.2 25l-53.69 94H432.5l-53.7-94zM25 137v46h462v-46zm32 64v46h46v-46zm352 0v46h46v-46zm-171.4.6s-22 8.8-24 18.8c-4.6 22.8 33.9 60.8 33.9 60.8s-13.3-34.6-14.3-52.8c-.5-9.1 4.4-26.8 4.4-26.8m54.4 14.8c-6.1 40.2-11.2 83.7-45.9 100.2c-30.3 14.4-36.4-78.5-94.1-91.5c44.9 101.1-68.9 139.9 42.2 185.2h19.5c-24-25.9-34.4-90.8-34.4-90.8s30.2 72 62.5 74.2c15 1 33.5-30.2 33.5-30.2s5.9 29.8-.1 46.8H319c27.3-14.8 44.6-35.7 51.2-57.3c6.5-20.9 3-42.5-10.9-59.9c-8.6 51.8-21.4 62.8-55.1 74.1c36.6-44.7 20.2-119.2-12.2-150.8M57 265v46h46v-46zm352 0v46h46v-46zM57 329v78h46v-78zm352 0v78h46v-78zM25 425v62h462v-62z"
                  />
                </svg>
                <span className="fw-bolder">Fireplace</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M4.616 18q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v1.192q0 .349-.23.578t-.578.23H9.808q-.348 0-.578-.23T9 19.192V18zm0-1h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.769q0 .23.192.423t.423.192M4 17V5z"
                  />
                </svg>
                <span className="fw-bolder">TV</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" />
                    <path d="M8 6s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6" />
                  </g>
                </svg>
                <span className="fw-bolder">Heating</span>
              </div>
            </Col>
            <Col sm>
              {" "}
              <div className="setcard">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M8.06 2c-.18 1.17.11 2.16.89 2.97c.5.5.66 1.17.47 2.03h.99c.12-.55.14-1 .04-1.45c-.09-.42-.4-.92-.95-1.52c-.45-.56-.61-1.23-.45-2.03zm2.49 0c-.19 1.17.11 2.16.89 2.97c.5.5.65 1.17.47 2.03h.98c.11-.55.14-1 .05-1.45c-.1-.42-.41-.92-.94-1.52c-.47-.56-.62-1.23-.47-2.03zm2.53 0c-.19 1.17.11 2.16.89 2.97c.5.5.64 1.17.42 2.03h1.03c.13-.55.14-1 .05-1.45c-.09-.42-.41-.92-.94-1.52c-.47-.56-.62-1.23-.47-2.03zM5 8c0 1.42.39 2.7 1.14 3.84a6.9 6.9 0 0 0 3 2.55l-3.98 6.05c-.1.12-.16.31-.16.56c0 .41.16.69.44.84c.12.1.31.16.56.16c.41 0 .69-.16.84-.44l.99-1.59h6.37c.21.58.59 1.08 1.08 1.45c.5.38 1.08.58 1.72.58c.83 0 1.53-.31 2.13-.91c.59-.59.87-1.29.87-2.09c0-.83-.28-1.53-.87-2.12c-.6-.6-1.3-.88-2.13-.88c-.64 0-1.22.17-1.72.55c-.5.37-.86.86-1.08 1.45H9.14l1.97-3.05c.16.05.45.05.89.05s.73 0 .89-.05l.99 1.55c.41-.54.96-.96 1.59-1.22l-.56-.89c1.12-.5 2.09-1.39 2.88-2.62C18.59 10.5 19 9.27 19 8zm12 10c.3 0 .53.09.72.28s.28.44.28.72c0 .27-.09.5-.28.71c-.18.2-.44.29-.72.29c-.26 0-.5-.09-.71-.29A1 1 0 0 1 16 19c0-.3.09-.53.29-.72c.21-.19.44-.28.71-.28"
                  />
                </svg>
                <span className="fw-bolder">Barbeque</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* seven contend */}
      <div className="seven contend p-5">
        <Container>
          {" "}
          <div className="settilte">
            <h1>Explore 60+ Airbnb Categories </h1>
            <h5>
              These are just a few collections grouped by style, location and
              nearby activities.
            </h5>
            <Row className="p-3">
              <Col sm>
                <div className="icons">
                  <img src={C1} className="set-card-img" alt="...house"></img>
                  <h4>Cabins</h4> <p>Cozy hideaways close to mother nature.</p>
                </div>
              </Col>{" "}
              <Col sm>
                <div className="icons">
                  <img src={C2} className="set-card-img" alt="...flats"></img>
                </div>
                <h4>OMG!</h4>
                <p>Find anything from UFOs to submarines.</p>
              </Col>{" "}
              <Col sm>
                <div className="icons">
                  <img src={C3} className="set-card-img" alt="...rooms"></img>
                </div>
                <h4>BeachFront</h4>
                <p>Sought-after properties by the water's edge.</p>
              </Col>{" "}
            </Row>
          </div>
        </Container>
      </div>

      {/* eight content */}
      <Container>
        <Row className="p-5">
          <Col sm>
            {" "}
            <h2 className="mb-4 fw-bold">Your questions, answered</h2>
          </Col>
          <Col sm>
            {" "}
            <div className="container my-2">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is Airbnb and how does it work?
                  </Accordion.Header>
                  <Accordion.Body>
                    We verify personal profiles and listings to make sharing
                    easy, enjoyable, and safe for millions of Hosts and
                    travellers worldwide.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How do I use search filters?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can filter listings by location, amenities, type of
                    place, and more.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Do I need to meet my Host?
                  </Accordion.Header>
                  <Accordion.Body>
                    Not necessarily. Many stays allow self-check-in or have
                    clear instructions to enter the space.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Need more information?</Accordion.Header>
                  <Accordion.Body>
                    You can check Airbnb’s Help Center or contact support
                    directly for further assistance.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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
            <Form.Group controlId="formPassword" className="mt-3">
              <GoogleOAuthProvider clientId="353604612400-4ftq1seombhmc55h34a4gsqgei0p7tb9.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handlesuccess()}
                  onError={handleerror()}
                />
              </GoogleOAuthProvider>
            </Form.Group>

            <Button
              onClick={() => navigate("/Aframe")}
              variant="danger"
              className="mt-4 w-100"
            >
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavScrollExample;
