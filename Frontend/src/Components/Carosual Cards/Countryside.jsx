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
        "https://a0.muscache.com/im/pictures/2a52a2c1-e12a-41dc-a667-0970c43ef0f2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/30e042f3-88f3-438b-b8fa-618b77138722.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9d78ed90-4111-4fa6-b693-3e70e4a61648.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/90dc8737-eef9-4947-b05c-54ba3e392d11.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-720088944205299761/original/45e74f0a-d1a0-470c-b24d-769f15708dcc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-720088944205299761/original/8dcbf4e4-c3fd-408e-a547-963a6d3756de.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1315303299475673812/original/080d0edd-3076-4fc9-b5e5-7f499e4125a1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1293835391140620658/original/1ec60b25-379c-48df-980f-2dbe7980dce7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1293835391140620658/original/7c0f1483-525e-4a7b-b2bd-2f6f9f9a93e9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/7ef7f41b-62e2-43c1-b68f-8cd23e954167.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/062b4382-2379-4858-a750-a13f8baac367.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e33cf17f-8324-482c-a2dc-13db163e28d8.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1305521537531820730/original/d9470a7a-e956-4577-84bd-e23262b240f4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1305521537531820730/original/a3bf7d1e-83dc-499d-9c31-13567dbd098e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1305521537531820730/original/9f991314-bc9c-4427-af11-89d610ab694a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2e0132fb-11a6-4e9a-8449-67b1dd76d276.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/91c48761-30b7-4cbc-8724-b9f7a0737da1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c783e4ab-1b90-4181-bd1b-8fa834be8429.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/1b7ee487-da23-4424-bb76-d58712afa349.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-956282294518355560/original/dcf290b8-7958-4697-a1e7-016bc5ae46d2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-956282294518355560/original/52952402-ff55-4fff-88b0-24d692cf6e5f.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/aebcb5e0-c9a9-484f-be89-f0eb932503d9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/9ee4fa16-b263-477a-a1ae-22669d8e6155.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/8c135447-ba29-4fce-83e3-04c7773750d1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/6575abcf-874b-4e19-948f-9f30da55d115.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjE4OTAyOTE%3D/original/59c68d3c-393b-47a2-a6b7-e90261e9339c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/bfeb071d-947d-4793-89c6-4b138a583cf6.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b90dd38f-f1e3-49f3-92f5-834bc0823d53.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/bcf6a8b3-5b40-4a2d-8d5d-105a5ca6f3e5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/156b0a61-6042-454c-bb19-c008f168ec28.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/86f8cd12-89e8-40b8-a10c-a2f83bfae782.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/386a05c6-9887-4dee-a099-a13400abff2e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/03beaa13-87c5-41e2-a97a-3e7c17d408b8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2a8ab78a-5b1a-4647-b785-3d5a1ed006b3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6bba0a16-ddd6-4adf-9e98-90e528cbb4d8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1c74a681-56c1-40fb-a031-a8554bac3de9.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1327623950793234873/original/482b2905-56a8-441b-abeb-e8fcbb56405d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1327559298225453485/original/20cd19ac-bc18-49a8-a1ab-e1d619d85081.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1327559298225453485/original/d8c3a11a-50e2-4b20-877a-d3cf7c4d1cf7.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/92aa1461-acd5-487f-9598-09c58a43494e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954521538522422/original/e1fe2f2e-12ed-4be9-9f61-1f521d443f80.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954521538522422/original/1b757391-1e5b-4745-a089-8672363d22fe.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/aebcb5e0-c9a9-484f-be89-f0eb932503d9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/9ee4fa16-b263-477a-a1ae-22669d8e6155.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-545149353871407636/original/8c135447-ba29-4fce-83e3-04c7773750d1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1281555180831666264/original/ff4c2cb2-bdf6-41ae-beb4-3ada40b1ad25.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1281555180831666264/original/56a32bab-0e72-4266-a355-6fd1b015e496.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1281555180831666264/original/d4888546-1830-4b7d-8a37-d0652cfe7181.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/86f8cd12-89e8-40b8-a10c-a2f83bfae782.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/386a05c6-9887-4dee-a099-a13400abff2e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-603422057981221501/original/03beaa13-87c5-41e2-a97a-3e7c17d408b8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2a8ab78a-5b1a-4647-b785-3d5a1ed006b3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6bba0a16-ddd6-4adf-9e98-90e528cbb4d8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1c74a681-56c1-40fb-a031-a8554bac3de9.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/a6e9ab77-4626-4cc7-bd57-bfbf1dba49b4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9a7c5963-35c2-4fd6-a5e7-6b2cec305163.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a0e8c46f-e779-4e94-8696-6680dbb9a33c.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/92aa1461-acd5-487f-9598-09c58a43494e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f83560f1-3e55-4f40-831b-ee0206a2f9d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4d778a0b-ba38-404d-8374-35ba58da63ed.jpg?im_w=720",
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
