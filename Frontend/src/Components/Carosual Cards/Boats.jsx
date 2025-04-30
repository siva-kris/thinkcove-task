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
        "https://a0.muscache.com/im/pictures/miso/Hosting-45689556/original/33a7425e-2915-4fa2-a721-1f81eb35ed5b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-45689556/original/42f8e05a-add1-46fa-95c0-a264e3ad8e18.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-45689556/original/12ff8e6b-cc54-45bf-901c-b024120d5465.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1028883679008915159/original/28c011e7-8eca-4d6a-9c04-81e297a5b637.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1028883679008915159/original/96c939cd-2027-4464-942e-5b92030e8092.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1028883679008915159/original/a8a59314-cffa-457f-8c10-18b1868308ae.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2c999e04-42ca-451f-bbd8-abfea3903e16.jpg?im_w=720",

        "https://a0.muscache.com/im/pictures/df4effb0-d751-4f88-aa66-2a85bd0df850.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-913360509561636373/original/fe9f63fa-8abe-4545-9f63-9ba198e336a8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cb896104-97b2-43f4-9beb-4ff690d9731d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/df4effb0-d751-4f88-aa66-2a85bd0df850.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ecc7e024-9b21-491e-a463-5872d8f027c4.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/d03286a2-9d7d-4d2e-9481-0409abb345de.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0b5e2ee4-a137-4216-9fa6-449df0f7a08f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2c999e04-42ca-451f-bbd8-abfea3903e16.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-913360509561636373/original/fe9f63fa-8abe-4545-9f63-9ba198e336a8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-913360509561636373/original/6984a32b-b597-43be-9f61-e10a3f0d9f01.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-913360509561636373/original/48c69687-94ac-4337-a604-342133b0bc75.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/0d4e728a-6ede-484b-8d83-b8cb4370b072.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5c59a09d-0da3-4050-a08f-722bc4ddf0f5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f19f76b1-2304-4343-9c25-179b7b223b4c.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3373362f-b998-4cfd-8aeb-4707f1b90abe.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0150c981-d8e2-4973-a2f0-a1ed4353ae0e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/129b716d-056f-40f9-94b7-c88dfd15b376.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/c5bd9aa1-e429-4146-ae20-aafd8defc86d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4f21cfe3-befa-4408-87fe-a533b9f7633a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a2f50f53-6a70-4262-9eef-041f9aee14df.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1220131180443524293/original/5ffc7db9-31c8-45ce-aa9e-6b33e63903b2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1220131180443524293/original/91afaf15-d424-4182-96c1-c928a32a264a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1220131180443524293/original/e78a8070-4da4-45fd-ae8e-beb18567fd93.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cc1b161e-6ea9-4a75-9d2f-0f28e9308406.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-40525603/original/d7bbe78c-19df-4252-8106-4f4e4f2568a0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-40525603/original/32c9064c-04c7-4eb8-a909-49f59d38531e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1138779925998645069/original/4b3bc972-8d39-48ec-8bc1-4f213b1a4eaa.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODc3OTkyNTk5ODY0NTA2OQ%3D%3D/original/34038191-39d7-4bc1-81b4-c8f7809556c5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODc3OTkyNTk5ODY0NTA2OQ%3D%3D/original/122a06d1-cca2-448a-bfe6-77fc3f60207c.png?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1306185253217140206/original/f4d46530-ca53-46e4-b7a2-eb757b5ea3c8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1306185253217140206/original/eb117621-78c6-499b-8335-8b43503267f1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1306185253217140206/original/ce9c5a2a-ffdd-45ad-be8d-6724a03ed8d1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/cd75fea5-bc07-411c-b4ec-e0332e7f95ac.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-16083503/original/02e1a334-019b-48b9-8a58-1cd28b7c43c4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/156d369c-33ff-48e9-b35b-dd74cfe451bd.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-633157105592114539/original/7e78ba23-789f-4f83-95c2-12b6b823c1f0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-633157105592114539/original/e0371c3d-8362-4606-bd57-11ff5265aa1c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-633157105592114539/original/616b03c4-be37-47c2-8661-23fa95cbd873.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/07d06187-c942-44fe-9c9a-50947dcaf8dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/56659081-01f1-4faf-ab84-9c399c93d5ca.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/53abc8f6-c55a-4583-91ce-b32dee1cb903.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/fc9dbf55-3468-4ba3-ad32-84c84da61faf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/719d4bd7-7a71-4268-ad5e-79c9d4459737.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f7eefba8-04fa-4843-99b0-7c9bb33b7ff0.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/6cff9ff3-6c8b-4f0b-935d-52e44344689a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f2f43e86-4781-459e-a609-a714a7a7385c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/acf9050e-918d-443d-b674-7c4b6afae4b6.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-581688588396742857/original/b44de83c-56b4-40e5-be90-f61916620d14.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-581688588396742857/original/c5b726f3-db89-48d6-bb95-3cce4cddd1d3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-581688588396742857/original/37945d75-baf8-4313-ad8f-0406147c4071.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-44400699/original/2aea4fa6-61a6-42a9-b75b-b74b87bb479e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-44400699/original/b9834727-6c49-49fe-b074-046b15b9c607.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/58bde4a8-9614-4445-bb5a-d45e4c04a474.jpg?im_w=720",
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
