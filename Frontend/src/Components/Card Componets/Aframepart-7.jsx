import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Form, Button } from "react-bootstrap";

import { BsDoorOpen } from "react-icons/bs";
import { GiHills } from "react-icons/gi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import "./Image-banner.css";
import NumImage from "../Card Componets/numbers.png";
import Image from "react-bootstrap/Image";
import Footer from "../Navbar/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
export default function A() {
  const Cardimg = [
    {
      id: 1,
      img: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1370871612102856219/original/0622898b-053c-49ef-930b-1c356b5c0b0f.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1370871612102856219/original/d07df376-814b-4bd2-b754-aefd066729bf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM3MDg3MTYxMjEwMjg1NjIxOQ==/original/0505dfc7-f4e3-4151-8d2b-bc68f7edd6e5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1370871612102856219/original/7ba772b1-719a-4e93-acb1-18d2a5197486.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM3MDg3MTYxMjEwMjg1NjIxOQ==/original/e161985c-01d8-44b6-b12a-371aef3cfd38.jpeg?im_w=720",
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // reviews

  const ratingData = [
    { star: 5, value: 80 },
    { star: 4, value: 15 },
    { star: 3, value: 5 },
    { star: 2, value: 0 },
    { star: 1, value: 0 },
  ];

  const Reviews = [
    {
      img: "https://a0.muscache.com/im/pictures/user/User/original/0dfe9450-0675-4da4-846f-e31ae3086807.jpeg?im_w=240",
      name: "Ivan",
      para: "Beautiful accommodation in an indescribably beautiful and quiet location overlooking the sea and the Turkish coast. The host is responsive and attentive. The interior is clean and of...",
      rating: 4.5,
    },
    {
      img: "https://a0.muscache.com/im/pictures/user/04075ade-2c38-459c-94b7-f3e2878f716f.jpg?im_w=240",
      name: "Beata",
      para: "Great place to stay! Fantastic view, 10 min to the sea, 15 min to the cliff jumping spot, pool and water barrel right next to the house.",
      rating: 5.0,
    },
    {
      img: "https://a0.muscache.com/im/pictures/user/51d042d8-8513-4c8e-bbdf-bd6201f940c7.jpg?im_w=240",
      name: "Raymond",
      para: "A great place out of the way with amazing views.",
      rating: 4.0,
    },
    {
      img: "https://a0.muscache.com/im/pictures/user/51d042d8-8513-4c8e-bbdf-bd6201f940c7.jpg?im_w=240",
      name: "Aziz",
      para: "The cottage has a very nice view and peaceful environment.",
      rating: 4.5,
    },
  ];
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    guestType: "",
    guestQuantity: 0,
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="mx-3">
        {" "}
        <Container>
          {" "}
          <div className="setname fw-bold">
            <h3>Baagh Villas Corbett</h3>
          </div>
        </Container>
        <div className="setbanner">
          <Container>
            {Cardimg.map((D, index) => (
              <Row key={index} className="mb-4 ">
                <Col sm={8} className="banner-1">
                  <img src={D.img[0]} alt="..image" className="img-fluid " />
                </Col>
                <Col sm={4}>
                  <Row className="banner-2">
                    <Col>
                      <img src={D.img[1]} alt="..image" className="img-fluid" />
                    </Col>
                    <Col>
                      <img src={D.img[2]} alt="..image" className="img-fluid" />
                    </Col>
                  </Row>
                  <Row className="mt-3 banner-2">
                    <Col>
                      <img src={D.img[3]} alt="..image" className="img-fluid" />
                    </Col>
                    <Col>
                      <img src={D.img[4]} alt="..image" className="img-fluid" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
        <div className="setdetails">
          <Container>
            <Row>
              <Col sm={8}>
                <h3>Entire villa in Georgia</h3>
                <p>10 guests4 bedrooms8 beds2 bathrooms</p>
                <hr></hr>
                <Row className="p-3">
                  {" "}
                  <Col xs="auto">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/User-11660669/original/cc3074b5-5413-4180-83c4-cde495f16f29.jpeg?im_w=240"
                      className="rounded-circle"
                      height="35"
                      alt="Portrait of a Woman"
                      loading="lazy"
                    />
                  </Col>
                  <Col className="d-flex align-items-center">
                    <h6 className="mb-0">
                      Hosted by Vano
                      <br></br>8 years hosting
                    </h6>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="align-items-start mb-3 ">
                  <Col xs="auto">
                    <BsDoorOpen size={24} className="mt-1" />
                  </Col>
                  <Col>
                    <h6 className="mb-1">Self check-in</h6>
                    <p className="mb-0 text-muted">
                      Check yourself in with the lockbox.
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-start mb-3 ">
                  <Col xs="auto">
                    <GiHills size={24} className="mt-1" />
                  </Col>
                  <Col>
                    <h6 className="mb-1">Mountain view</h6>
                    <p className="mb-0 text-muted">
                      Soak up the view during your stay.
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-start mb-3">
                  <Col xs="auto">
                    <MdOutlineCalendarToday size={24} className="mt-1" />
                  </Col>
                  <Col>
                    <h6 className="mb-1">Free cancellation before 7 May</h6>
                    <p className="mb-0 text-muted">
                      Get a full refund if you change your mind.
                    </p>
                  </Col>
                </Row>
                <hr></hr>
                <Col>
                  <h4 className="settitle "> Where you'll sleep</h4>
                  <div className="mx-5">
                    <img
                      src="https://a0.muscache.com/im/pictures/e7f07164-3af2-4890-8bcc-c643120da0e6.jpg?im_w=960"
                      alt=""
                      className="mb-3 "
                      style={{
                        width: "300px",
                        height: "250px",
                        borderRadius: "15px",
                      }}
                    />
                    <h6>Bedroom</h6>
                    <p>1 double bed, 1 single bed, 1 sofa bed</p>
                  </div>
                </Col>
                <hr></hr>
                <div className="setconted">
                  <h6>What this place offers</h6>
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#000"
                          d="m30.007 15.042l-6.79-6.748h.007a359 359 0 0 1-3.256-3.256c-1.312-1.34-3.275-1.472-4.738 0c-.842.848-1.907 1.916-2.683 2.692l-.292.292l-.262.26c-.907.907-1.533 1.532-3.001 1.536v.013c-.415.01-.83.03-1.002.065c-.628.128-1.297.465-2.022 1.344c-.898 1.09-3.015 3.62-3.961 4.748v5.467L2 21.457v8.539h28V22.46h.007zm-16.5-6.858c.744-.745 1.677-1.681 2.432-2.44c.556-.56 1.155-.771 1.697-.76c.55.01 1.125.252 1.617.754c.468.478 1.035 1.048 1.578 1.59a7.3 7.3 0 0 0-1.88.66c-.564.3-1.594.798-2.89.798c-.898 0-1.666-.214-2.554-.602m6.242 16.84l.379.002c3.063-.023 6.077-.914 8.872-2.052v6.022H3v-6.739q.159-.03.324-.058c.933-.15 1.989-.22 3.181-.137c1.23.095 2.617.364 4.182.904l.742.256c3.342 1.157 5.116 1.772 8.32 1.803m.372-.998a14 14 0 0 1-.36-.001c-2.855-.028-4.362-.545-7.704-1.702l-.719-.248c-1.771-.61-3.351-.911-4.759-1.01a14 14 0 0 0-3.572.172v-4.885c1.025-1.224 2.9-3.465 3.733-4.476c.47-.57.857-.806 1.165-.92q.04-.015.08-.027l.003.733v.006c.002.397.004.833.004 1.339c0 1.05.302 2.083.935 2.876c.649.813 1.614 1.327 2.789 1.327c1.285 0 2.448.666 3.405 1.634l5.158 5.18z"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Mountain view</span>
                    </Col>
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M28.13 4.5v36.901c0 1.16.94 2.099 2.1 2.099h0a2.1 2.1 0 0 0 2.098-2.099V25.489h5.056zm-11.217 0v10.924M23.21 4.5v11.736a4.2 4.2 0 0 1-4.198 4.198v20.967c0 1.16-.94 2.099-2.099 2.099h0a2.1 2.1 0 0 1-2.099-2.099V20.434a4.2 4.2 0 0 1-4.198-4.198V4.5"
                          stroke-width="1"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Kitchen</span>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Wifi</span>
                    </Col>
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M22 12H2m18 5h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M15.04 2.599a1.94 1.94 0 0 0-2.648 0c-.414.393-.572.845-.115 1.28l1.416 1.348c.456.434.929.29 1.347-.108a1.72 1.72 0 0 0 0-2.52m0 0c.496-.326 1.053-.781 1.672-.523c.29.122.49.419.889 1.013l1.498 2.233c.565.842.847 1.263.894 1.74c.047.476-.148.94-.539 1.865L18.158 12M4 12V7.5C4 6.373 4.45 6 5.5 6S7 6.373 7 7.5V12m0 0V7.5C7 6.373 7.45 6 8.5 6s1.5.373 1.5 1.5V12"
                          color="#000"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Dedicated workspace</span>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="#000" stroke-width="1">
                          <path d="M18.5 5.51c-.2-.59-.59-1.01-1.25-1.01H6.75c-.66 0-1.04.42-1.25 1.01l-2 5.74v7.5c0 .55.2.75.75.75h.5c.55 0 .75-.2.75-.75V17.5h13v1.25c0 .55.2.75.75.75h.5c.55 0 .75-.2.75-.75v-7.5z" />
                          <path d="M6.5 14.5a1 1 0 1 1 0-2a1 1 0 1 1 0 2Zm11 0a1 1 0 1 1 0-2a1 1 0 1 1 0 2Z" />
                          <path
                            stroke-linejoin="round"
                            d="M5.75 9.5L7 6h10l1.25 3.5z"
                          />
                        </g>
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">
                        {" "}
                        Free driveway parking on premises
                      </span>
                    </Col>
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#000"
                          d="M245.003 21.882c-166.998.752-303.014 211.052-130.59 381.17c8.035 25.41 42.784 41.465 94.91 57.862c37.832 11.993 50.783-4.965 42.102-27.322c-37.478-96.526-122.616-93.237-128.593-102.07C19.647 179.044 185.37 34.12 321.578 99.659c154.92 74.51 93.159 218.387 5.099 279.26c-33.979 23.392-54.793 53.902-43.615 84.13c5.99 16.174 34.958 29.057 45.928 26.818c8.658-1.764-36.293-26.3-8.303-55.948c22.237-23.66 89.603-37.464 125.124-103.51c67.453-125.152 28.701-238.4-130.697-296.26c-12.156-4.374-24.254-7.519-36.38-9.55a199.7 199.7 0 0 0-33.73-2.716zm11.434 80.2s-28.375 30.73-27.871 62.145c.03 6.434 1.304 12.957 3.231 19.139c10.2 12.01 18.472 25.93 25.648 41.036c7.086-18.501 16.129-34.364 27.367-47.29c.711-3.9 1.096-7.74 1.096-11.625c-.415-31.398-29.471-63.405-29.471-63.405m114.657 53.941c-53.459 3.158-88.03 51.295-108.637 93.234c-.89 1.912-7.449 2.436-8.6.46c-15.21-27.53-24.758-48.212-43.555-63.807c-17.79-14.795-40.236-23.601-70.45-23.764c1.305 11.993 7 44.86 30.808 63.08c8.125 6.24 19.924 9.474 31.904 12.245c11.92 2.684 24.163 4.803 33.503 10.348c7.531 4.477 12.334 11.475 14.618 19.614c2.283 8.108 2.224 17.314.475 27.07c-2.937 16.945-10.912 35.58-21.557 52.747c0 0 31.488 13.12 37.093 62.636c10.436-25.351 32.407-39.849 32.407-39.849c-11.563-16.442-27.99-58.99-31.903-75.712c-2.165-9.62-2.847-18.769-1.068-26.997c1.75-8.212 6.079-15.505 13.343-20.383c9.014-6.035 21.022-8.822 32.852-12.2c11.86-3.397 23.394-7.37 31.34-14.1c14.054-12.008 21.05-29.25 24.46-43.718c1.661-7.25 2.521-13.715 2.847-18.31c.12-1.127.09-1.72.12-2.594M157.973 387.005c9.72.266 35.546 20.438 28.251 21.939c-31.767 6.533-35.988-13.624-31.287-20.722c.588-.887 1.647-1.254 3.036-1.217"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Pets allowed</span>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M9 20v-2H4.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v2zm-4.384-3h14.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616v10.769q0 .23.192.423t.423.192M4 17V5z"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">
                        {" "}
                        40-inch HDTV with cable/satellite TV
                      </span>
                    </Col>
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="#000"
                          fill-rule="evenodd"
                          d="M3.554 4.061a2.03 2.03 0 1 0 0-4.061a2.03 2.03 0 0 0 0 4.061m8.047-.968a.5.5 0 0 0-.707 0L8.642 5.345a.5.5 0 0 0 .354.853H13.5a.5.5 0 0 0 .354-.853L11.6 3.093ZM8.534 9.11a.5.5 0 0 1 .462-.308H13.5a.5.5 0 0 1 .354.853L11.6 11.907a.5.5 0 0 1-.707 0L8.642 9.655a.5.5 0 0 1-.108-.545M6.067 5.903a3.55 3.55 0 0 1 1.04 2.512V9.44a.5.5 0 0 1-.5.5H5.585l-.452 3.623a.5.5 0 0 1-.497.438H2.472a.5.5 0 0 1-.496-.438L1.523 9.94H.5a.5.5 0 0 1-.5-.5V8.415a3.554 3.554 0 0 1 6.067-2.512"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Lift</span>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#000"
                          d="M16 28a11 11 0 1 1 11-11a11 11 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9 9 0 0 0-9-9"
                        />
                        <path
                          fill="#000"
                          d="M18.59 21L15 17.41V11h2v5.58l3 3.01zM4 7.592l3.582-3.589l1.416 1.413l-3.582 3.589zm19-2.184l1.415-1.413l3.581 3.589l-1.415 1.413z"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Carbon monoxide alarm</span>
                    </Col>
                    <Col xs="auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m18 8l-.8 3a1.25 1.25 0 0 1-1.2 1H8a1.25 1.25 0 0 1-1.2-1L6 8M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9 11c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m-5-5c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m10-5c.643.288 1.017.756 1 1.25c.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25"
                        />
                      </svg>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <span className="ms-2">Smoke alarm</span>
                    </Col>
                  </Row>
                  <hr></hr>
                </div>
                <div className="setcal">
                  <h2 className="settitle">5 nights in Sarpi</h2>
                  <p>8 May 2025 - 13 May 2025</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangeCalendar />
                    </DemoContainer>
                  </LocalizationProvider>
                  <hr></hr>
                </div>
              </Col>

              {/* Left card */}

              <Col sm={4}>
                <Form
                  className="setform"
                  style={{ position: "sticky", top: "20px" }}
                >
                  <Container>
                    <Link to="">
                      <h1>
                        <span
                          style={{
                            width: "100px",
                            height: "100px",
                            color: "black",
                            textDecoration: "underline",
                          }}
                        >
                          ₹69,936
                        </span>{" "}
                        <span
                          className="text-black"
                          style={{ fontSize: "15px" }}
                        >
                          for 5 nights
                        </span>
                      </h1>
                    </Link>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formStartDate">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            value={formData.startDate}
                            onChange={(e) =>
                              handleChange("startDate", e.target.value)
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formEndDate">
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                            type="date"
                            value={formData.endDate}
                            onChange={(e) =>
                              handleChange("endDate", e.target.value)
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Container>
                  <Form.Group className="mb-3" controlId="formGuestType">
                    <Form.Label>Select Guest Type</Form.Label>
                    <Form.Select
                      value={formData.guestType}
                      onChange={(e) =>
                        handleChange("guestType", e.target.value)
                      }
                    >
                      <option value="">Select type</option>
                      <option value="adults">Adults</option>
                      <option value="children">Children</option>
                      <option value="infants">Infants</option>
                      <option value="pets">Pets</option>
                    </Form.Select>

                    {formData.guestType && (
                      <>
                        <Form.Label className="mt-3">
                          Number of{" "}
                          {formData.guestType.charAt(0).toUpperCase() +
                            formData.guestType.slice(1)}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          min={formData.guestType === "adults" ? 1 : 0}
                          value={formData.guestQuantity}
                          onChange={(e) =>
                            handleChange(
                              "guestQuantity",
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </>
                    )}

                    <Button
                      as={Link}
                      to="/Afprice"
                      className="submit mt-3"
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#ff385c",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginTop: "20px",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      Reserve
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Rating and reviwe area */}
        <div className="d-flex justify-content-center align-items-center">
          <Image
            src={NumImage}
            fluid
            style={{ width: "500px", height: "200px" }}
          />
        </div>
        <div className="conent text-center">
          {" "}
          <h1 className="">Guest favourite</h1>
          <p>
            This home is a guest favourite based on ratings, reviews and
            reliability
          </p>
        </div>
        <Container className="my-5">
          <h4 className="mb-1">Overall Rating</h4>
          <Row>
            <Col>
              {ratingData.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-0">
                  <div style={{ width: "30px" }}>{item.star}</div>
                  <ProgressBar
                    now={item.value}
                    variant="black"
                    style={{ flex: 1, height: "5px", borderRadius: "5px" }}
                  />
                </div>
              ))}
            </Col>
            <Col>
              <p>Cleanliness</p>
              <p>4.9</p>
              <span className="mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M20.66 20L13.87 3.81q-.555-1.26-1.71-2.04C11.4 1.26 10.55 1 9.61 1q-1.26 0-2.31.63c-1.05.63-1.26.99-1.67 1.69S5 4.8 5 5.64L5.03 9h-3v5.45c.62-.28 1.28-.42 1.97-.42v-3h5c.57 0 1.04.2 1.43.59c.39.38.57.85.57 1.38v7.03H8.91A4.7 4.7 0 0 1 7.97 22H13v-9c0-.72-.2-1.38-.55-2S11.61 9.91 11 9.56C10.42 9.2 9.75 9 9 9H7V5.64c0-.72.25-1.33.76-1.85S8.89 3 9.61 3c.53 0 1.02.16 1.45.46s.75.68.94 1.15L18.46 20l-2.46.03V22h7v-1.97zM4 18c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
                  />
                </svg>
              </span>
            </Col>
            <Col>
              <p>Accuracy</p>
              <p>4.9</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </span>
            </Col>
            <Col>
              <p>Check-in</p>
              <p>4.9</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M7 13.23q-.517 0-.874-.356T5.769 12t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357M7 17q-2.077 0-3.538-1.461T2 12t1.462-3.538T7 7q1.54 0 2.778.835q1.238.834 1.807 2.165h9.204l2 2l-3.193 3.154l-1.712-1.288l-1.807 1.326L14.298 14h-2.713q-.57 1.312-1.807 2.156T7 17m0-1q1.477 0 2.52-.889T10.856 13h3.76l1.43.967l1.858-1.333l1.621 1.222L21.381 12l-1-1h-9.525q-.292-1.223-1.336-2.111T7 8Q5.35 8 4.175 9.175T3 12t1.175 2.825T7 16"
                  />
                </svg>
              </span>
            </Col>
            <Col>
              <p>Communication</p>
              <p>4.9</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    d="m5.5 11.493l2 2.998l2-2.998h4a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-.999h-12a1 1 0 0 0-1 1v8.994c0 .552.447.999 1 .999z"
                    clip-rule="evenodd"
                    stroke-width="1"
                  />
                </svg>
              </span>
            </Col>
            <Col>
              <p>Location</p>
              <p>4.9</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="m15 19.923l-6-2.1l-3.958 1.53q-.384.143-.713-.083T4 18.634V6.404q0-.268.13-.489t.378-.307L9 4.077l6 2.1l3.958-1.53q.384-.143.713.054t.329.588v12.384q0 .287-.159.498q-.158.212-.426.298zm-.5-1.22v-11.7l-5-1.745v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z"
                  />
                </svg>
              </span>
            </Col>
            <Col>
              <p>Value</p>
              <p>4.9</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#000"
                    d="M213.3 0h-128C38.2 0 0 38.2 0 85.3v128L298.7 512L512 298.7zm-128 128c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7S128 61.8 128 85.3S108.9 128 85.3 128"
                  />
                </svg>
              </span>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container className="my-5">
          <Row className="g-4">
            {Reviews.map((review, index) => (
              <Col key={index} xs={12} md={6}>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={review.img}
                    className="rounded-circle me-3"
                    height="50"
                    width="50"
                    alt="User portrait"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="mb-0">{review.name}</h6>
                    <Rating
                      name={`rating-${index}`}
                      value={review.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </div>
                </div>
                <p className="text-break">{review.para}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
