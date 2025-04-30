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
        "https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/9e4c806e-dbad-4186-a0c6-bd75adc0c068.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/c3dd25b2-eed3-41d8-b6eb-49374b69548e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/bb645493-1c2a-4140-a3dc-56ebc9c0652a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/352bca00-41a3-4391-b303-1919599cb382.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01b3d56e-d6d9-489b-bfe7-8e04f3d68670.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0532805-1216-4dd4-9f23-46e46f47b23a.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/756a3baf-6756-487b-a89e-caaa3fa3ccc1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-51778220/original/2e7a33d8-7467-4fbe-b585-f74cb0e4e20d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-51778220/original/a911ef92-bc0f-4fb5-9135-e7da77f2c1b6.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-835950977031876366/original/86cc2226-52dd-4c8b-8d6d-b659bbcb0db8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/df44df58-7031-4af2-9f3a-2fdec3d9b78e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2a6eec6c-22ad-4a5a-ad10-47e2f78bb561.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51907005/original/9c25628e-1da0-4ee4-b08e-dbb361a9d0fc.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51907005/original/6510c42e-0bd8-4480-a391-c32bb986b481.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51907005/original/f8b937ad-4630-4b2f-92a5-99376b7d7861.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/63ae89fa-f5d7-455b-9da4-f62023ea5210.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/ec139e7c-cfe2-4caa-84fa-a6ece19af5ea.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069499823616321647/original/0ac5562c-64e0-4a0b-a0ae-31cb38d76ce7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069499823616321647/original/123e035a-19e4-4584-87f9-9222f16c9416.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069499823616321647/original/0db0bf7f-3003-4fb0-a33f-866018ebc3bb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/0a015d94-ae15-45ed-87b4-62e3d11fae8a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9410c4da-9989-42e7-ab2b-65159dde00f8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39363663/original/fa8c0298-09f6-4467-9636-31d090df32b2.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-796190267508949677/original/0638da67-0e41-4938-b8df-b159a3f84d50.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-796234852134663086/original/d3c4ad75-b9dd-4127-9833-85b6fda6f338.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-796234852134663086/original/309b6c6a-8902-4a84-beac-5aeebe5fe5fb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/518a83bc-7ae8-4265-92d3-471adbeefa1f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0ce8cd1-977d-4934-91af-cbb9ac8bd6d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/27c009f3-ccbc-4177-a59f-caff4b952672.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b17769d4-059f-46c4-b77e-abe559169085.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0d45bbde-e910-4b71-b85d-caaf209e29ea.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6c06b5d4-e738-4287-9dbc-70ddaba42560.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/680264a8-d0fd-4c5d-9a73-cf6cb43dd0d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f376712b-0ab5-4cd3-aa5b-2fa9cf2a0b6c.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-39400094/original/47a24308-6676-4331-bc4f-21b0e46ff70e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/23a27c15-1d7c-4484-9df1-92cf681cc04b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-39400094/original/e2560d6c-ccf1-41f8-93ff-bf4cccb3ef84.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/90b3bcd4-96c1-422f-81f9-b76da6dacc5e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0b15d3b8-69ce-4809-83b5-6ca6b2b32702.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/aaf66c87-b77a-42f6-99c9-562dab69e249.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-876868924006577815/original/b12a9112-5c43-4422-b01e-3ec12714e4fe.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-876868924006577815/original/c7f9fa17-90f3-4b04-9cb1-371ad20b810e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-876868924006577815/original/63dc0f11-3fba-4925-85e3-fe149dfae117.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2891928b-4548-45b9-861f-34a52db94910.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/395374c4-b817-4852-8c65-6ff3df352a72.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8e6ba88c-0695-4c71-b1f8-a0cd00dbeeeb.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3ef4659a-2f5b-44ee-a3ff-b8c14d731ee7.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26705543/original/b912f280-78f4-4423-895b-971ba1794727.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26705543/original/61d20a31-9a08-4e75-b769-9faa3fb394bd.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/f1bf65a4-efdb-4f64-8ca8-58890e44e409.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fb5686f3-c114-4d5f-937e-59560c05aac6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-12128094/original/4c639bb8-6402-43c5-8311-51fdd5baa8f6.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-936629103533933845/original/05800b9b-788f-4c20-9d83-1793849e3bf5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-936629103533933845/original/f1bf01b9-9e55-4376-87cd-65170068a4f7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-936629103533933845/original/cda6b36a-1014-461a-a687-e4bd1d61c83f.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-869269302654014867/original/9d709332-66d3-44e2-ab01-bfa1f9e95006.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/3699a724-f081-40f8-aa69-4f4a4dbeeca5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fff96e8a-8b59-4ab7-a8b4-25fb9d14451d.jpg?im_w=720",
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
