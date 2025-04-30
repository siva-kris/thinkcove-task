import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./Aframeprice.css";
import Navbar from "../Navbar/Navbar";
export default function Afr() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Link to="/Aframepart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M31 36L19 24l12-12"
                />
              </svg>
              <span style={{ color: "black" }} className="setcon">
                {" "}
                Request to Book
              </span>
            </Link>
            <div className="setcard p-3 mt-5">
              <Row>
                <Col>
                  {" "}
                  <h6>Lower price.</h6>
                  <p>
                    Your dates are ₹2,160 less than the avg. nightly rate of the
                    last 60 days.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                      className="ml-2"
                    >
                      <path
                        fill="#000"
                        d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63M84 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
                      />
                    </svg>
                  </p>
                </Col>
              </Row>
            </div>

            <div className="setcont p-3 mt-3">
              <Container>
                {" "}
                <Row>
                  <Col>Your trip</Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <h6>Dates</h6>
                    <p className="mt-1">1–6 May</p>
                  </Col>
                  <Col className="mt-4">
                    <Link
                      to=""
                      style={{ textDecoration: "underline", color: "black" }}
                    >
                      Edit
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <h6>Dates</h6>
                    <p className="mt-1">1–6 May</p>
                  </Col>
                  <Col className="mt-4">
                    <Link
                      to=""
                      style={{ textDecoration: "underline", color: "black" }}
                    >
                      Edit
                    </Link>
                  </Col>
                </Row>
                <hr></hr>
              </Container>
            </div>
            <div className="setparas">
              <h3 className="setcon">Write a message to the host</h3>
              <p>
                Before you can continue, let Irene know a little about your trip
                and why their place is a good fit.
              </p>
              <Row>
                <Col xs="auto">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/8edbf267-84e4-48a5-bd8e-a7fca7f4eb3b.jpg?aki_policy=profile_x_medium"
                    className="rounded-circle"
                    height="35"
                    alt="Portrait of a Woman"
                    loading="lazy"
                  />
                </Col>
                <Col className="d-flex align-items-center">
                  <h6 className="mb-0">
                    Irene
                    <br></br>Joined in 2023
                  </h6>
                </Col>
              </Row>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </div>
            <hr></hr>
            <div className=" mt-5 mb-5">
              <h4 className="setcon">Cancellation policy</h4>
              <p>This reservation is non-refundable. Learn more</p>
            </div>
            <hr></hr>
            <div className=" mt-5 mb-4">
              <h4 className="setcon ">Ground rules</h4>

              <p>
                We ask every guest to remember a few simple things about what
                makes a great guest.
              </p>
              <p className="">Follow the house rules</p>
              <p>Treat your Host’s home like your own</p>
            </div>
            <hr></hr>
            <div className="mt-4 mb-4">
              <h5>
                The Host will need to accept this request. You’ll pay now, but
                will get a full refund if your reservation isn’t confirmed
                within 24 hours.
              </h5>
            </div>
            <hr></hr>
            <div className="">
              <p>
                By selecting the button below, I agree to the Host's House
                Rules, Ground rules for guests, Airbnb's Rebooking and Refund
                Policy and that Airbnb can charge my payment method if I’m
                responsible for damage.
              </p>
            </div>
            <Row>
              {" "}
              <Col>
                {" "}
                <button
                  type="submit"
                  className=" mt-3"
                  style={{
                    width: "50%",
                    padding: "10px",
                    backgroundColor: "#ff385c",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Coutinue
                </button>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} style={{ position: "sticky", top: "20px" }}>
            <div className="carding">
              <Row className="g-3">
                <Col xs={12} md={4}>
                  <img
                    src="https://a0.muscache.com/im/pictures/1c055ca8-6788-4e3f-a984-6cf6129787d8.jpg?aki_policy=large"
                    className="set-image img-fluid"
                    alt="Portrait of a Woman"
                  />
                </Col>
                <Col
                  xs={12}
                  md={8}
                  className="d-flex flex-column justify-content-center"
                >
                  <h6 className="mb-1">
                    Eagles Nest, Luxury Villa, Koh Yao Noi
                  </h6>
                  <p className="mb-2 text-muted">Entire villa</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>Your total</Col>
              </Row>
              <Row className="align-items-center">
                <Col xs={6}>₹1,18,270.87 x 5 nights</Col>
                <Col xs={6} className="text-end">
                  ₹5,91,354.35
                </Col>
              </Row>
              <hr />
              <Row className="align-items-center">
                <Col xs={6}>
                  <strong>Your total</strong>
                </Col>
                <Col xs={6} className="text-end">
                  <strong>₹5,91,354.35</strong>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
