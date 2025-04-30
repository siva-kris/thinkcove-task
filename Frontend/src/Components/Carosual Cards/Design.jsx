import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./Aframe.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Aframe() {
  const CardData = [
    {
      id: 1,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/da4846db-6f66-49b0-88c1-0d387ca67998.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/e0020a05-0a84-48dd-b311-768e14aeeb51.jpeg?im_w=720",
      ],
      name: "Sarpi, Georgia",
      kilo: "4,836 kilometres away",
      day: "8–13 May",
      price: "₹92,990 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 2,
      images: [
        "https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-3251026/original/825da780-127b-4155-982b-2a958b436eb2.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/a246b08e-5a1d-46f9-a75a-c4392fd670a7.jpg?im_w=720",
      ],

      name: "Imereti, Georgia",
      kilo: "4,811 kilometres away",
      day: "12–17 May",
      price: "₹50,224 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 3,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-797659157916763175/original/abeb45aa-852a-414a-85a2-6e59de118119.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-797659157916763175/original/97cdf537-fe51-493f-a4a5-d64150d824ed.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-797659157916763175/original/2322412a-1d9a-44ec-9c20-cbf290c463b8.jpeg?im_w=720",
      ],

      name: "Mtskheta-Mtianeti, Georgi",
      kilo: "4,646 kilometres away",
      day: "12–17May",
      price: "₹82,299 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 4,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-53083913/original/4944ed3f-ee5f-4765-993d-5e91d2dc6745.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53083913/original/829d28d1-7e13-4e8a-bf48-ef9f11fc527f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-53083913/original/6586e131-d4ec-4d60-8ab6-56cd005a71b6.jpeg?im_w=720",
      ],
      name: "Imereti, Georgia",
      kilo: "4,811 kilometres away",
      day: "13–17 May",
      price: "₹55,990 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 5,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/0c68a135-b239-4a95-b3d6-ad89816cd922.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/4cc34170-ec04-4608-b6d1-0ae3c28981b4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/c27f11a3-fe81-469f-a76c-5e4a0c765ec2.jpeg?im_w=720",
      ],

      name: " Lonavala, India",
      kilo: "945 kilometres away",
      day: "1–6 May",
      price: "₹385,718 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 6,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-878101686473328377/original/02373dd0-bb8b-4a42-ab45-2ae111caa205.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/193e8dd3-302e-4e2b-8aed-a07ffdc3e365.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/22c9b80b-f6fa-4aa7-b8e6-077d6ee0e125.jpg?im_w=720",
      ],

      name: "Saguramo, Georgia",
      kilo: "4,646 kilometres away",
      day: "8–13 May",
      price: "₹44,755 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 7,
      images: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-774328770611431627/original/9eb48fda-4e12-4cba-9122-284f5290fd8b.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-774328770611431627/original/05f021f0-52ea-4d01-970b-04374cac8945.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-774328770611431627/original/328ec4dc-3205-4da7-9549-e8c5f360115a.jpeg?im_w=720",
      ],

      name: "Srinagar, India",
      kilo: "2,578 kilometres away",
      day: "7–12 May",
      price: "₹559,680 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 8,
      images: [
        "https://a0.muscache.com/im/pictures/2a1724ca-c902-4c82-b64a-215c2fd1e414.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fc72fed1-4a12-412a-b7a8-57f8a2711a91.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDIzMDU3NDQ%3D/original/395b6468-b38d-48eb-80ef-80c25b055c62.jpeg?im_w=720",
      ],

      name: "India",
      kilo: "103 kilometres away",
      day: "1–6 May",
      price: "₹59,912 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 9,
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDcwNjk0NTg1NTA4MjU3MA%3D%3D/original/078fe674-8c8a-47b2-8778-1238ca8ad8f7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDcwNjk0NTg1NTA4MjU3MA%3D%3D/original/8a0043eb-bdbd-4e66-b694-d4a26ee9efc0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDcwNjk0NTg1NTA4MjU3MA%3D%3D/original/1e6861d8-6007-483b-beb3-f65f92bf84a0.jpeg?im_w=720",
      ],

      name: "Mestia, Georgia",
      kilo: "4,836 kilometres away",
      day: "1–6May",
      price: "₹61,662 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 10,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-52539316/original/942e2903-4f17-4753-8f91-09dcc0617e64.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-52539316/original/07c42220-e72b-48de-9caf-f2008f7a21bf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-52539316/original/c61babd8-44e1-40eb-a53b-8a4b7b555bdb.jpeg?im_w=720",
      ],

      name: "Kasnazan, Iraq",
      kilo: "4,336 kilometres away",
      day: "1–6 May",
      price: "₹397,817 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 11,
      images: [
        "https://a0.muscache.com/im/pictures/7b671289-929b-4f94-94c9-9d0608d6a7ee.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0b29768f-1fa8-4f7d-b1c5-b4c226c3a0fd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1f97132d-1715-4a4f-b84e-cc61692f01ae.jpg?im_w=720",
      ],

      name: "Mandrem, India",
      kilo: "627 kilometres away",
      day: "22–27 May",
      price: "₹31,377 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 12,
      images: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/ae71d719-bb9b-466d-aa76-c29a1d43afd7.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f5327f99-ca6b-4564-a713-5e7b1a384eca.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f5327f99-ca6b-4564-a713-5e7b1a384eca.jpg?im_w=720",
      ],

      name: "Tskhvarichamia, Georgia",
      kilo: "4,634 kilometres away",
      day: "2–7 May",
      price: "₹43,760 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 13,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-812489515735850680/original/44a9be3a-f072-49da-a77b-787659e45a13.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-812489515735850680/original/fb5f59d3-31df-428b-a5ec-6a0ec8d308c9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-812489515735850680/original/d3b067b4-29c0-4959-85d0-1f952a2c84d6.jpeg?im_w=720",
      ],

      name: "Mandrem, India",
      kilo: "627 kilometres away",
      day: "11–16 May",
      price: "₹31,624 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 14,
      images: [
        "https://a0.muscache.com/im/pictures/9132512c-a355-440e-8f7c-45a6cc0c508e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/445f6a6d-efcc-43aa-8f44-3d6f965c941a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ef8e7fbb-c953-4e9b-a9dd-77f5d056186e.jpg?im_w=720",
      ],

      name: "Mandrem, India",
      kilo: "626 kilometres away",
      day: "9–14 May",
      price: "₹28,529 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 15,
      images: [
        "https://a0.muscache.com/im/pictures/2821388b-7ade-4797-966f-d6aaa7c48764.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3a66f945-7265-4381-b5ab-90c896d0f71c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/67f97a3c-dfad-4aea-b8cd-228d7d9fe5a5.jpg?im_w=720",
      ],

      name: " Calangute, India",
      kilo: "612 kilometres away",
      day: "4–9 May",
      price: "₹20,250 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 16,
      images: [
        "https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/a0215d98-dcc9-45e4-8c8b-6c79f5238cb6?im_w=720",
        "https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/42ebf54f-e39e-4156-97ec-076122c97359?im_w=720",
        "https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/bdd621f4-22cd-4c2d-a613-118847ba9488?im_w=720",
      ],

      name: "Kodaikanal, India",
      kilo: "105 kilometres away",
      day: "5–31 May",
      price: "₹11,289 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 17,
      images: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-52603835/original/8ed3f77a-cb94-47ac-8f05-f29b340f5785.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-52603835/original/0d516484-60a3-4417-8056-4339dc8ca7d7.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-52603835/original/a8773e5f-936c-401f-8626-bd2359b8afde.jpeg?im_w=720",
      ],

      name: "Fagu, India",
      kilo: "2,836 kilometres away",
      day: "13–18 May",
      price: "₹54,314 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 18,
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-822694712660139042/original/7b0bd0d0-fa0c-4dd5-8bc6-17d18d558d35.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-822694712660139042/original/87a1456e-c167-4cdd-a4ba-a708081be800.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-822694712660139042/original/61ac1c65-39c0-4dc5-8501-e78fb4049df9.jpeg?im_w=720",
      ],

      name: "Balacola, India",
      kilo: "48 kilometres away",
      day: "11–16 May",
      price: "₹20,313 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 19,
      images: [
        "https://a0.muscache.com/im/pictures/27559be8-5148-4ac3-893d-19cfa34f469e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/51afcaf7-e1cd-4ae7-9b93-cbb1113fbdd9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5009fb5a-3223-4fc8-9d4b-a2038d4e14ef.jpg?im_w=720",
      ],

      name: "Mandrem, India",
      kilo: "627 kilometres away",
      day: "14–19 May",
      price: "₹26,996 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 20,
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1206945306170666409/original/d91b254f-8a10-4f20-b84c-9ab17c7a3745.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1206945306170666409/original/4eac2e48-9737-44b3-ac15-84a326b7c4d2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1206945306170666409/original/22f09c5d-d1ef-4692-8d5b-2504c56a5e54.jpeg?im_w=720",
      ],

      name: "Tandi, India",
      kilo: "2,288 kilometres away",
      day: "1–6 May",
      price: "₹22,818 for 5 nights",
      link: "/Aframecontent",
    },
  ];

  return (
    <>
      {" "}
      <Navbar />
      <Container>
        <Row className="mb-4">
          {CardData.map((card) => (
            <Col key={card.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={card.link} style={{ color: "black" }}>
                <div className="card-box mt-3">
                  <Carousel interval={null}>
                    {card.images.map((src, idx) => (
                      <Carousel.Item key={idx}>
                        <img
                          className="d-block w-100 card-img"
                          src={src}
                          alt="..image"
                          style={{
                            width: "320px",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="card-info mt-2">
                    <h6 className="fw-bold">{card.name}</h6>
                    <p className="mb-1">{card.kilo}</p>
                    <p className="mb-1">{card.day}</p>
                    <p className="mb-0 fw-bold">{card.price}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
