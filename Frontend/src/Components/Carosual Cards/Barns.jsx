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
        "https://a0.muscache.com/im/pictures/9c774fb7-a514-47d0-b2d1-746e9c0c840c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-28061765/original/12f86e92-35d0-4a57-9c52-06960198a0bc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/0a717f26-87cf-419b-b101-5ec1c767ca73.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-869604781174680918/original/c5fa2ee6-0d06-47a7-a9ef-25abb1210712.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-869604781174680918/original/ead96a2c-033a-4ae3-8eed-ca5c3df54df8.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-869604781174680918/original/f46720de-d013-49e7-9122-7a17601082cc.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/ae42d540-bfb9-4478-8aff-0432ad1ac758.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-957664372840702231/original/7079f6a7-019b-4e4f-9497-ac55a06427e8.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-957664372840702231/original/c4e05454-c282-4912-8aa1-6ac407182562.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/1b4df8fc-64d7-4a9c-9509-6f3205fc1594.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a793e3eb-a47c-4562-af1d-3a195aa57bb6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/52f11ebc-42bb-45bb-9709-48d71f80648b.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/8349eedc-0ec4-4afe-b0c5-4752f59674ed.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0b19897c-8fdd-4087-a96a-6a097d080b91.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/235fbc72-87e1-4284-a945-ca43e40c1705.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/f37bdfcc-7c8f-4181-b394-f36e15a80fd5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2b35b0cb-7274-4d3f-9e8e-b9dd8aa0436a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6a9b172d-1211-4b40-9019-c98f3b25c601.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMDcxMDkyMzkwMDIwNjMxOA%3D%3D/original/23c48ec9-2f0b-48cb-8424-c1f342996854.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1071654544650971868/original/34398bd1-4186-479e-8d31-89c73932dfc8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA3MTY1NDU0NDY1MDk3MTg2OA%3D%3D/original/edbc1520-24c1-411a-be9c-73a326c3338b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/269b041f-d704-4488-b6d9-0ac75a510aa0.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/70963665-43ce-4163-9350-42a2f26eeba1.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-26774207/original/bae623fe-94ac-4f11-a3ec-a3b04e66c172.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/72d30482-70de-49f4-8643-9e1ace4c6fe2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/efe57273-c133-49ac-8685-e44478e792d6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/64370f87-e49d-4e3a-aef3-8cc18031ecfe.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/f855cee6-6533-4eb8-8d2a-64b7001cc119.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/73fd76bd-71f6-43af-85ad-bc4533436c34.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-3910782/original/d2e9827f-61fd-44e5-86a0-01ff393af86a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/98a190f7-379e-42fa-bc57-c83ac9574a44.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ca012b2a-0d5e-492f-a6d0-4d2441bad39b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a5b26448-1c24-4053-acae-1b8c413bd2c1.jpg?im_w=720",
      ],
      name: "Mandrem, India",
      kilo: "627 kilometres away",
      day: "22–27 May",
      price: "₹31,377 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 12,
      images: ["", "", ""],

      name: "Tskhvarichamia, Georgia",
      kilo: "4,634 kilometres away",
      day: "2–7 May",
      price: "₹43,760 for 5 nights",
      link: "/Aframecontent",
    },
    {
      id: 13,
      images: [
        "https://a0.muscache.com/im/pictures/795cc2cb-e20b-4ea7-a90e-1a342e89b940.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/289eb631-bd4d-4e6b-aef4-3da4a6b20b8e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/faab3973-2242-47fa-a636-ea7c0e46339d.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242809292926031372/original/101bb0f7-a7c0-44d0-8b5d-76470d21057b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242809292926031372/original/b59662e1-55da-44be-9574-2111e4df34a0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242809292926031372/original/8aa86fa8-997a-49bf-ae71-a2aac8852153.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/c907a68c-082b-4829-b142-e7f7263f495a.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/0dc20155-bfd2-4f5a-b09a-9303b8edb0e0.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/0e2527ca-8668-429d-a339-32a48dcb36b8.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1268174465052223787/original/49e9dd73-10be-49c4-a43f-07ab33ee1d73.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1268174465052223787/original/03ad518a-ea63-4bb7-9d69-c13ec0c8b1e1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1268174465052223787/original/64c516c3-67f3-487a-aedd-7459a023d850.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/62acfab9-a9e5-43e8-b6e7-927c805e9e98.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/573a9e55-f1b8-4cfe-8fba-5a407d763f2d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-38146398/original/2096c8b8-947a-493d-9bf6-6b0cd88df9d9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-44258075/original/c0592327-3401-45e6-b717-7f6f98d93794.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/609561a3-066f-4929-a990-13ee6b81faa2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-44258075/original/657f7d1b-d357-4daf-b61d-fe5a3da7537c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-27496670/original/4e499eb2-130a-4a3e-991a-5e28f3ebf138.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-27496670/original/e812d248-5d97-4a59-843f-d851ec144ea7.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-27496670/original/e2abbb72-ffb8-47e0-8ddf-54d485355f0b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-53054318/original/d5e98be3-2fa1-4a7e-8c52-6faa7905b7d4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTMwNTQzMTg%3D/original/de72442d-f9c3-4c40-b34c-0d28ba702f71.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTMwNTQzMTg%3D/original/94a65334-dc6e-4bd6-9556-7efb54dbf42a.jpeg?im_w=720",
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
