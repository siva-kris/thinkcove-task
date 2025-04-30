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
        "https://a0.muscache.com/im/pictures/bf8e9f71-fbf6-440e-9df9-69608754b3ff.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/00e02a83-605a-47c4-b1fd-9f66b6daceea.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cb7a11d-f9ff-4d76-8dc8-d74ab3851a65.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/55f63472-2752-4969-9213-30002aecc346.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/db0154a4-6001-40d8-92d3-4f652ce4cb6b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/103648429/d73220f2_original.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/8da04f17-bb15-48b7-b278-54f58a9f63ba.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1b481bc6-effd-4740-b3fb-936a3839ec88.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/23ef74b4-4148-4619-9b41-deb578a5dd87.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b54bd8f8-d213-4bd8-96c2-b5d5b59dcdfe.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/863e84e9-1812-4ac8-955b-1e65352c630d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/661b55d1-b211-46ab-ae1f-dbe07685613e.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/1f011087-8245-4a41-9985-17958584492f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c1fff9ec-190a-48d2-a38f-b533bedc299c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/31c7f9c3-311b-4d4e-8e67-806b85ebf025.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/a11b3cfb-b22b-493c-b5fd-5c474315db20.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0bee83fc-8e11-459d-972e-8057878cced7.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/25861630-519b-4815-9f57-339f254af28d.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/e54d02a8-e46d-4858-97d0-9fa97236fbb8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-798134823941565291/original/b41a584f-fdcc-4b82-bec6-8d4792a4e6d4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-798134823941565291/original/addf39c5-94d4-4c2c-861a-05997c03f13b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/5eff2775-ff20-499f-ab9c-513bb6c11a7e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fae45b89-40ef-4edf-bdfe-9fe0ff54ae6b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7e3c833f-da4c-4c30-976b-388b7b5b0def.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/1e133000-bb52-4c29-beb0-b144c4c1c95e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ccac3623-b09f-44fc-bf8d-5b428e4e8633.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/caf02dcd-3f32-41ab-a3f3-6f0b5cd3e4b4.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-584465758974362122/original/2c5391d5-d0f9-4313-a2a2-ab715fccaff4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-584465758974362122/original/7d200150-5c58-4a2d-ab44-eb8bf1f3dc43.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-584465758974362122/original/9980f898-8ee3-4006-b386-e3953671cfac.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-554083626203655099/original/68d0b46e-bf82-4a1d-8620-7a76d9282c88.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-554083626203655099/original/8134bd0b-e1d0-46c6-99c3-4bb39eef8b72.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-554083626203655099/original/623bcee6-9475-4190-9919-b31240be47fa.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/023adea5-c00b-41ee-a832-264f053e194c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-40109158/original/1cf2e9ad-f8d9-4ed4-9cda-3d6b2582b140.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-40109158/original/ae9930c0-c7ca-4f56-bfe8-0c905ebaea35.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/65ce7c80-9558-45a2-a204-af352a868f24.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/81e9cc9d-e259-4d15-8400-eebf67e6ff41.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/481e8106-2cd3-4d19-b568-48c245bb0807.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-614176171796317617/original/73e2c0d4-1413-4cb4-b05a-da0240d7901a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-614176171796317617/original/22efc63b-8d8a-4cd7-96df-fe2956259aaf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/3a9d5f2a-e53d-4fb3-8cb4-5953813aedc2.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/d38cb2ec-6546-4556-a210-78ad7f290b7f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-52679483/original/24606fc1-3344-414a-ba2c-7555894419b0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-52679483/original/ec29ee32-e422-459d-954b-c7f325397902.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/0e1a7a15-f422-421e-b7f8-a3df6d0ed4bc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31368042/original/7ef06be5-5fff-404c-b0f7-db1f9add7bc7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/8243089c-c50a-46c6-873f-0d7a67fc2fb3.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/6c3b3cec-e812-4df2-bc62-510a9cc310a1.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-30830660/original/50466547-36de-4d01-958c-12d4bc8ac0c0.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-30830660/original/a5279b9d-33cb-4261-ab47-a5fb06b2bb73.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-31244881/original/95b3d559-1d8a-48e1-b004-a57e82aa3080.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31244881/original/12213fbd-772f-4ded-89ae-96ada5de3081.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31244881/original/36ec72a7-95c8-4a6e-8e73-f9e4140025cb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1019218859649561432/original/f9019abb-7f2f-4590-8c5e-6df43a0232d3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1019218859649561432/original/cd491bd3-61da-441c-bdec-6d434c2525f7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1019218859649561432/original/ec9d6884-669f-48bb-ba57-450ea200093d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/eb4120bb-e281-41eb-bef5-7dac96eb90f2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/74254c91-9859-4e1e-98e9-636fe7635d5e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/dbb71bc5-a825-41e9-936c-98be8cc41d45.jpeg?im_w=720",
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
