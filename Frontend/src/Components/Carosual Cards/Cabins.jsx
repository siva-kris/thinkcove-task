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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1311360303087056669/original/8c4d2524-eba4-46b4-aa2c-8949568bdaf4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1311360303087056669/original/15d12779-ee27-405e-a00d-2fd1b8d36bf6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMxMTM2MDMwMzA4NzA1NjY2OQ%3D%3D/original/f0bd7531-8c37-45b2-9496-894e871079f8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/827b7144-bfa4-4bb0-bd69-02579295bf9b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/350b2b63-6075-4217-9ffe-0c5a9bf7afde.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-851221457069159416/original/30468927-4c4b-489c-bd98-7ff307787c40.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-853189955208971108/original/aab48bd2-edb0-4ffd-87a3-f5cc7d7c3be2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/e43414c9-9cd6-429a-ab17-9e08d6bb189a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-853189955208971108/original/e17f60e0-62e3-4e82-b4d9-f25968beac53.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/decd42a0-ffa4-4dd3-bcc3-82aba3fca838.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/647f2ceb-af8e-432b-b3c6-a4816a1e8ddb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a4652e95-d641-47a5-bf8e-4b2afc896219.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/91fd04fa-b271-4335-8f18-61384692cd48.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-5151243/original/9bcc331c-567a-47ce-82c8-ce5e36ebc50c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/8e0ff048-78f6-49ed-a4d6-79d5de656d03.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/93a253aa-eb7b-4c0b-b099-af47b2a88e8d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/da3ea6d0-664b-4c2a-8d6f-82bfb2a71767.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2091a68c-4cf8-4255-b309-4a1226ce1d51.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/17eb3b05-d444-4e92-b479-f90d7621c4ed.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/15c70744-d4be-4f48-967e-33d7b5d1080c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/401b0545-42f8-45d8-a881-b75bf7583ad5.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1286208323180296244/original/f65a60fb-8865-4901-8cdb-70820b1e4da7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1286208323180296244/original/59132e17-641d-468c-88a6-289952403d08.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1286208323180296244/original/e367cb8d-f18d-4869-b454-e4219d2006aa.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjYxMTc4MTc=/original/e03409c6-607e-4c31-a781-a503b0829786.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjYxMTc4MTc=/original/c54ffd8b-fa26-48c6-811f-35ce434d16b1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/29d05512-de45-41f7-bfdc-9d046c40690d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/fffa2cf7-bb7c-4c45-b09d-22e4d24016f3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-944991643902274568/original/5781132a-1a78-4762-8f22-ecd151035623.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-944991643902274568/original/4572e9ad-7921-48bc-81d5-8994efcf887e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-52329661/original/800aa635-16b7-4ceb-adbc-3d2445edd9dd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-52329661/original/d431b2fb-ba8d-40c9-87a5-3f4308e66634.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-52329661/original/18d2f25f-8bac-4159-8163-1ae616a7354f.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/0591fcdd-f710-4e24-8684-e582f8438c22.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e03d9866-9c0c-4dae-8355-26ae6ff879a9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3830a3d6-de88-4da3-924d-0533622592e1.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/289eb631-bd4d-4e6b-aef4-3da4a6b20b8e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/795cc2cb-e20b-4ea7-a90e-1a342e89b940.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/faab3973-2242-47fa-a636-ea7c0e46339d.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-587439221666468647/original/c12474fc-e7bf-4875-b4d3-84068b64dd84.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-587439221666468647/original/a3a8257f-f158-4b9f-a9d6-446cf62c8819.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-587439221666468647/original/61243e65-4b9f-400d-936a-f90788e87c3e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/41e34c21-afe8-481b-a1ae-3317dbd13994.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTU1NDMwNzI=/original/88829086-5550-4272-8b45-bb58add2987a.png?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/3f483c6f-594b-46b9-baee-e9aada356196.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3406a14c-224e-45b9-bbe3-10e4c9f72dc1.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-22727228/original/9ba47437-a057-4ec6-b90e-324273daf058.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-22727228/original/45e9c4e9-197a-4caf-8b19-934b147da917.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1030857057389489236/original/af2f7f9b-1efa-4fe8-ab24-9dbe2c498119.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1030857057389489236/original/468d9744-f30d-4ff4-ac44-af477d5b1717.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1030857057389489236/original/872535ef-75b8-443b-b75e-f8ff6d600a8d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/ceb53a88-5f97-4a2d-9efe-17dcf017d883.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-762715731155963382/original/2f1f7cf3-cd1f-45e0-9a1c-f059441247b3.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/2d15232c-9ff9-4ba6-839c-768ead272d1f.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-992058045110075723/original/e68845e5-1405-46dc-a3c5-9c8894711e61.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/fe11fe10-facc-49a6-8b23-3f1231b1ea75.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-992058045110075723/original/ed7e5cde-e3f2-4355-baf6-617a2a493e73.jpeg?im_w=720",
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
