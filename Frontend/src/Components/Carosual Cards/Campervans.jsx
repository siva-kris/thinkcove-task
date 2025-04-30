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
        "https://a0.muscache.com/im/pictures/ee920ff9-7e31-43db-bcb5-54da5e2623fa.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/35809bd4-cf04-4d90-9c92-041c9a965ffb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eda48f94-a260-4a48-a518-55d81cb8dda0.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-584721161507944601/original/c112f148-ec44-4c78-8303-225b9c6f8c70.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/685d62d5-cdab-4ef8-9b98-d362beea6231.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/37338652-7651-4da1-8325-ef5ac79ffc6e.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cbaa6a95-a498-49e1-90e6-ac7e15aa3b55.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/34e6035e-61ce-4fc9-8475-0a8628e03602.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6dcf8361-765a-4bdb-b5dc-521627fd5efb.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/7fde1672-2160-4593-90cd-00bd75da732a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/04b555bd-2c93-4caf-95b1-749fdcace5a6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e5bb2717-c75a-46f0-a072-42db557efaf8.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/780ce01b-2b32-4c6a-a877-3ffaee9c9c23.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/7d2be0b7-5371-4342-8623-7b3b06053393.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/6e6e0880-2715-4b96-a4c4-bf5492102dea.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTQyNjMwMjMyODgxNjgxMjc3/original/d4eb2bdd-e521-4e45-83b7-e0d1507c4c61.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-942630232881681277/original/d720d2be-337c-442e-9b9c-8dc396db95fd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-942630232881681277/original/30a83be9-afe8-482f-9d3a-8eba50af2fa1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/eb49f6ab-8a2c-4f4a-9fcf-ec319efce8f3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-45731996/original/925f3476-703f-4b56-880a-eb93fd88e698.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/d0945841-4745-40d5-a877-de7a28150c19.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cc0ef2e2-5847-4c2b-a16a-1cbfa00a364d.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-980248142836088949/original/b377d36c-7bad-4d9d-bd16-d20ed97e54c9.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-980248142836088949/original/bf334d4e-98e4-4175-a620-e5dad889985d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-45760329/original/c2153623-4ce3-4fcb-a099-b7a99b31b148.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-45760329/original/da5143ee-9eaa-40d5-8a40-6797ef02b3ff.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-45760329/original/27586043-b6bf-4ec4-9c8c-d02dd0231959.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/4c1d504f-dda4-46dd-a376-d2b149eeee2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/684a950f-1359-45cd-859e-5acdc3e9256b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/364ea920-2112-4fc9-b0d8-b68f5fc4a1ed.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1132258867126275366/original/2444c37b-3767-4e43-b646-4389cbd15539.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1134642466137719135/original/ffa0d578-9cf8-45b9-bbe4-90165fc06704.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1132258867126275366/original/0b52bb9c-2588-4a4c-834e-83bedb6e18bb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-598231427459356624/original/1f351561-702e-460a-9e89-d0bb50e4748f.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-598231427459356624/original/dbf339f7-a064-4a4d-831f-3fa78449a092.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/fb3113b0-e6cd-4f0c-aee1-12366571ddcf.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-744620677194371718/original/53d64d70-da4e-4f04-b655-7ede7001ca6e.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-744620677194371718/original/b645b586-52af-4f33-b657-4e814150e25c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-744620677194371718/original/a90ed862-58fc-4a1e-8a0e-9afff2cd2f60.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cc360153-d518-43b7-873a-832f629b5714.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/6c9a0893-cdbb-4ad3-8420-175fce99a07e.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f9cf4675-478a-44d6-8d8b-62a367c7c7dd.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzOTYzNDczMDM4NzA1NjkzOA%3D%3D/original/02841012-2405-4b2d-8469-b4ecb5e6fc92.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzOTYzNDczMDM4NzA1NjkzOA%3D%3D/original/8c7f1062-bcd1-4140-bc02-5ec26fcc5477.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzOTYzNDczMDM4NzA1NjkzOA%3D%3D/original/070ecb12-768e-4789-bcbb-29f608598374.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-54075882/original/e73a0666-5363-412e-b4b8-15387ef59dd1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-54075882/original/63f36a16-2037-4a61-9342-8b1df2171b9e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-54075882/original/9d455b1d-9c41-44e2-919c-1a2ded45a6e3.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1232324740982794158/original/fddd22b6-6df1-4b41-8e2a-ffcdf79c23b8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1232324740982794158/original/7287ba26-9eed-4786-a83b-c3d07bd03913.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1232324740982794158/original/b0fe2979-c532-418a-a52c-d2459b22a374.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/5892429d-fd04-4663-a5a2-e2a3dbf0d3b6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d94cc9f1-4fca-4553-8156-eddbaf55444a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b5542173-e58b-4ab4-9fe8-885fedaf5cd1.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-781636349931519566/original/09f0fd0d-2c3a-4407-adbb-22b66b2bf0fa.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzgxNjM2MzQ5OTMxNTE5NTY2/original/5643145e-bef7-412e-9068-5b13ca3e73b7.png?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-781636349931519566/original/4b5d307e-8957-420e-ba17-6185da471e42.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/ba6c5209-3835-4c1a-bde9-ef95ce74f09e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-36078549/original/faa30034-99fb-46e4-a0eb-c70eed4e7142.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/393a60b3-c2db-424f-b87c-5545637c2d7a.jpg?im_w=720",
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
