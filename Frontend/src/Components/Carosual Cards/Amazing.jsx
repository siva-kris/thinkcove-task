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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1114237414014272578/original/927f5ab5-9b4f-4680-8c9a-25c8b53e0311.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1114237414014272578/original/389c04bd-2159-45f4-bc5e-4f3963f99563.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1114237414014272578/original/dc4ae61a-4e82-444e-a045-db0d5092d9c4.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-858470516437524672/original/18c275fb-cb16-4be0-bb68-ec3632e0ec85.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-858470516437524672/original/405b0a88-0f78-4d00-ba4e-ebf7df200e96.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-858470516437524672/original/8889bf6a-763a-494c-9da0-cce9372feb83.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1332827163091007249/original/c3c0a0df-6211-42dc-be8b-b4108d94d8a8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1332827163091007249/original/872f8ba2-f283-4bd3-bfb1-cad7d816fc8c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1332827163091007249/original/5177e033-e398-4de1-babc-d08b952fefdb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTExNzA4MDkwNTgxODYzNjY5Mg%3D%3D/original/5831fbfe-0cbc-4959-a3d2-0f423b731e73.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1117080905818636692/original/9504c248-4fd0-4ffd-a1b7-9d5f56a6ae91.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1117080905818636692/original/34ead349-b3a0-4b6b-a6da-b23215ea65b9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/f4843c9f-eeaa-4ffa-9aaf-ba32ed0c56c0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/05d4b61e-8c92-4e19-9f35-f0d75172c3f6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/98c6c799-90d1-416a-a1ea-9df911d5daaa.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNjkxMjc1NDU5OTA1MTEwNg%3D%3D/original/053a7824-6721-4814-bb3e-5aea5bd3a361.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNjkxMjc1NDU5OTA1MTEwNg%3D%3D/original/dc2f10fe-462d-4240-aef8-ccc5c0057751.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNjkxMjc1NDU5OTA1MTEwNg%3D%3D/original/63bd98e1-0772-4995-882f-759d05963c90.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/e4174b1f-b8a7-4ae8-8dcd-3d06e77a4cd4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7514d3bd-cb1e-406a-93d6-9ee87d3a3bb4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fbb462db-0ab8-4da6-9387-b82387e7edba.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/8c1728ae-4f45-4638-8926-eca53292bc2f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/a81a4301-55f1-4302-b68e-7c48f84c568d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/f9400c66-9ba3-417b-bba0-f6648ee80430.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b8dfd0aa-b653-42f7-9bb1-d765dd7b41d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-32846629/original/7acc29eb-7802-400b-b510-faf3e886a6c0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-32846629/original/3b88b7d2-ba15-43bf-b422-c27d9464794b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI3MjExNTA1NjQ0NjU5NDYwNA%3D%3D/original/5f91a034-ad10-4aee-9f6b-dce101a12d84.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/b992501e-3be8-4568-893a-bdbd89b3ce3e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/0dfb8df5-b634-4f86-ad8b-706d0f285acc.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-995433353546423140/original/b008b88c-ce95-4667-a4b7-070244f1b3fd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/b4232b3d-73e2-4b6a-bdaf-d6d0568ff85a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a84d991e-8d4a-4ff6-818b-ca07292d3343.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1188312740817268486/original/8ebd0927-60ab-42e8-af42-e29f5a7603c1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1188312740817268486/original/a67f049f-9b2a-4b8b-8bf4-e621517315f9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1188312740817268486/original/e89960f2-50a2-4812-8e3e-c65e92a6f55c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/20e801d0-0385-4764-9d4c-f5e5a7cd4578.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/458be275-af05-4cd6-ae4c-48dbfc0b5d5d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Nzk2ODc3MDU5MjQyMjkxMDcx/original/954afa10-b519-4ec8-a73a-e2d69d4995ef.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1062299430434925103/original/d32a8b54-0ed5-437d-abc5-35870d4e9554.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1062299430434925103/original/3189a060-3bf4-4108-8700-7758e0cfc4bd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1062299430434925103/original/ffd50872-3f9a-45cb-b04b-7aa09d6b0223.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-604855093626546308/original/80222406-a41a-4d45-bafb-2130a6edda29.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-604855093626546308/original/8bf35222-6018-4f7c-accb-569e338f0e4d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-604855093626546308/original/594ff2d7-9bfd-4404-9df0-27c4ecaf7a4e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAyNzA2NDIxNTM3MzYzNjY0NQ%3D%3D/original/b5cddc93-33df-481e-93d7-a6232956c74d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/b98bd942-41fa-48e9-b208-1f21b585440a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1027064215373636645/original/8d8cf8c3-0491-4211-9b3d-1338e7f9411a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1261581349533700142/original/8d6ac352-4da5-4a19-a299-c29bea2d1106.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1261581349533700142/original/a8c4c202-0674-467a-9e80-ce85707b1a1d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1261581349533700142/original/2edadc95-1a66-4905-bf8f-636350e942b9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/2b78e1f4-d7bd-4b26-8825-b46e68e930c7.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/e3014ee0-9651-40f3-ad5f-e4c1f46b5829.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/6134746b-732e-40da-8b6e-186165e8355b.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1327139198268921787/original/87d61b64-06c2-436d-ae12-148de7285eb3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1327139198268921787/original/ef13eba6-f803-45f4-a4c7-1e0dacc99a97.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1327139198268921787/original/f85e7a13-86ba-4c31-a579-71582f978389.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1174051011893825492/original/fc9fae20-4896-46ba-926b-3f195437c904.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1174051011893825492/original/8bfef737-8464-4e5a-87c0-80d37c1ce90e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1174051011893825492/original/771780b1-dc28-48a1-ab3a-14ed0ae5b50f.jpeg?im_w=720",
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
