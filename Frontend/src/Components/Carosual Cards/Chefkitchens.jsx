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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/ee0a1c85-79ea-4372-b08b-e81cc214774e.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/5c94e48e-7a7a-4b9f-b3a7-54b5ce6255e6.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-47930508/original/527cf8a5-1f20-43a0-9d95-21fce089e5da.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/1c055ca8-6788-4e3f-a984-6cf6129787d8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c2d8da86-4198-4329-85dd-4a517b6a5d90.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fb9a1983-1be8-4794-9442-934316ab7077.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/ae534e71-0efe-462e-8665-2d8bccbb3e4e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-15088699/original/f6c0af9a-75dd-4660-a833-7af4b7b434e7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-15088699/original/2c1356f1-1302-4006-b5bb-06eb44828d1f.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-43933156/original/359c1716-fc3f-4a06-aa00-5873ff788e26.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-43933156/original/d7b944bb-1212-4add-a993-7de97570a518.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-43933156/original/3c05e3a8-caa2-48de-a002-60081e354e4b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/150b0691-a339-41ce-af46-1ae3e6730a87.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f49a6751-ab86-4292-b146-4105aa607910.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/844a3696-566c-4287-822b-142e785c3d75.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/7428f523-da9a-4f97-a18a-25215529d857.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTA3MTE3Ng%3D%3D/original/fa1c36a3-3ce0-48dc-8756-2690de8e2f0c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTA3MTE3Ng%3D%3D/original/bc6e099d-3ce9-45b2-b36b-846e8ff3062a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/4ee1c41b-c88c-406a-b304-353bfbd83bc4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/9aec2433-e9a9-4ef8-8b36-cee5f2d6bfff.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/439f0e81-e889-4db2-9ef3-9935f2bade26.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MDk5OTA2NzM0NTExMTQ1NA%3D%3D/original/ec1384e8-31aa-45d2-980c-dac096706d50.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1340999067345111454/original/8e707abf-9ce8-4eb1-adeb-b3e47392d305.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1340999067345111454/original/29947515-ecb9-47c2-b200-d82718b5d183.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1359880810285153156/original/0fc59262-ac02-479c-b9df-ed364b7aa7a1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1359880810285153156/original/f2b41209-b107-4c39-b0c5-9d0f4384d8e5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1359880810285153156/original/8255e9f5-bf6a-47c3-b6df-d4cae2064bee.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5NTQ4NDEzNzQ4NDI2MDcyNw==/original/b3d1aa30-86d0-4fd4-ab30-c61cb502dc50.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5NTQ4NDEzNzQ4NDI2MDcyNw==/original/f81aad01-27a3-46e1-90b1-3e29158c1468.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5NTQ4NDEzNzQ4NDI2MDcyNw%3D%3D/original/3fac155f-eb2a-45e5-97ff-e38f6eb84fc8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-672081192055738394/original/e7d5d7f5-4dc3-4bc9-be5f-f46c5c96f29b.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-672081192055738394/original/df14dd11-5d42-46b4-a668-5c63b5abeb2f.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-672081192055738394/original/7c3d1f43-d891-4450-9747-e82b04f9c37f.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1352347503370062157/original/5f5ccace-bfcf-4747-8c0f-b7eef99547cc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1352347503370062157/original/a2bc110d-a799-4903-9f93-7a9fd5c69c6e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1352347503370062157/original/80e31b54-5231-4ef8-a48c-69aa5e8ed1c6.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzOTgyMDY1MDI2NzU3MDM3Nw%3D%3D/original/2959c963-f5e2-4725-8c82-895bff0311c0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1239820650267570377/original/c37f6576-ea3d-4d02-814f-119e8ecf6d0d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzOTgyMDY1MDI2NzU3MDM3Nw%3D%3D/original/91a53e8d-aade-4a2a-a643-e2933c194f9f.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/147f5773-5f0f-48b1-8946-f2630e0bb1ed.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/642da8b9-92ba-42ba-9efb-51faa405d4ce.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/461536d5-df3d-467a-818a-36a9b510ca45.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Nzg3MzY1NzA5Njc3MjI3MQ%3D%3D/original/2374663d-34a5-4d05-92c0-6f8c8f8a5408.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Nzg3MzY1NzA5Njc3MjI3MQ%3D%3D/original/824ea81e-a5cd-488e-a4a0-f519bf7f7b4a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Nzg3MzY1NzA5Njc3MjI3MQ%3D%3D/original/dbb7ae1b-a839-4a29-b395-e8ab285a508a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/monet/Select-35323831/original/ab726837-0899-49fe-bfb4-505111e14ed9?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzUzMjM4MzE=/original/3d2222a6-b434-4ca9-9ea2-24c2339e8825.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzUzMjM4MzE=/original/0d6da023-245f-4c93-a6ba-5f98110bb90b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MzMzNzc0MTM2MDk2NDUzNw==/original/b6198d36-e327-41e1-8ded-1517289cc6dc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MzMzNzc0MTM2MDk2NDUzNw==/original/dc0add31-17d1-43dc-a4f0-eaff8382fa44.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MzMzNzc0MTM2MDk2NDUzNw==/original/1ce2cf03-71c5-4bc6-af38-971461754c63.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-48087664/original/5b85b7cd-bbde-4043-b9de-b0d05aa3cc33.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48087664/original/4a93b468-f60b-4b05-982b-71dc6765e7c9.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48087664/original/5c67d59f-02a0-4911-870a-c9797dc73d3d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM1MTAxMjgyMDc1NDY5Njk5NQ%3D%3D/original/de7b5f90-11e6-4c17-91dd-469042975c4b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM1MTAxMjgyMDc1NDY5Njk5NQ%3D%3D/original/e52d68b7-b830-4650-81bf-28422ecfb38f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM1MTAxMjgyMDc1NDY5Njk5NQ%3D%3D/original/155b2914-a656-4c06-b437-1fc2eea607c9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48087664/original/5c67d59f-02a0-4911-870a-c9797dc73d3d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48087664/original/4a93b468-f60b-4b05-982b-71dc6765e7c9.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48087664/original/5c67d59f-02a0-4911-870a-c9797dc73d3d.jpeg?im_w=720",
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
