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
        "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM1MTk0MTk%3D/original/77ba298c-56d2-4e16-a6d1-7bd3d1af0be6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/ad0a54d5-65ac-4cc3-b202-07cc99d2f081.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/ccda7793-d09d-40f6-aa13-40f1ebc19759.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/31f16670-9196-4416-bd5f-c0a9462f8fc7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/a9396cc5-dd0d-4fb3-adf5-85f0944462a2.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/47a239d9-3739-4f32-ae97-3c706ec23d7e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-31426569/original/de9d61c5-feed-4859-be0b-f75bb514f8aa.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-31426569/original/1c273a53-2309-4740-9958-31623a5b08d0.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1041398366372889590/original/37eec4e5-40fe-4167-a296-7db08ac68d9f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTM5ODM2NjM3Mjg4OTU5MA%3D%3D/original/3d111ac3-7cd9-4026-a6b6-3d6d08ffd032.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTM5ODM2NjM3Mjg4OTU5MA%3D%3D/original/c7314de2-5e5f-4013-97de-dd629d53a8e3.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM5MDMxNDE0OTgxNTY3MDY4MA==/original/8bdb0320-f2b8-487c-802c-25d2c9e1b57d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-839878227441241617/original/e35b9df2-bdb6-45b4-b746-cbbca329c3d6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM5MDMxNDE0OTgxNTY3MDY4MA==/original/10665b5a-900a-4e9d-b876-4a1c8c3bd59a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-47086741/original/89035847-1f96-4269-af1e-120a19e1cfd7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/751624de-45d1-4917-ab1b-8124fd32fb1a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/933a307e-8b76-448e-8433-24a12fb28841.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b87046c6-c860-4469-87b5-62b5201f2310.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/430a0e9e-c125-4640-9138-bed56ebf3910.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2802c21b-14c2-4d0d-9f68-30342f8cd1d1.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/9f028184-f893-4789-9b09-6739274ee7a2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13557afe-4184-4e9e-8343-47574fec2c29.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6f96eac0-b702-4351-96ee-b07bb0bb9efb.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-832355501498041527/original/551de2c9-6981-4222-b21d-75dd8792bd2d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-832355501498041527/original/ca8c5bfa-9fa6-47b8-81c9-4af891d721a4.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-832355501498041527/original/ba5db749-a132-4543-8a0a-fdc4963240ee.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3d014422-5757-4fdd-bfdb-797b03e04c44.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a69ecdc0-cd38-42d4-8285-d82c7b8c7823.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13d23966-a44f-4ae4-a0c1-59886f40b6a8.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/b2a2d280-e39d-42d3-8499-e32bc96729a0.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-681506574120137388/original/c408431a-d99c-4790-9d77-632b2b12e034.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-681506574120137388/original/a6a603d5-e145-46e9-bf76-40395d13e4a0.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1331831684072786874/original/f631c4b3-fdd7-4ba4-b968-f42539e111ad.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1331831684072786874/original/b0c6cb11-1ee9-4dd3-86ed-1e5fb92d6edb.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1331831684072786874/original/663425da-5c93-4758-b22e-a2515c9d200b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/a3e41a30-dc6a-4cd8-9941-e8ec106b179f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fcf762f0-d3b1-4768-9cae-fe1c6ea83d77.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c361946c-8938-40b1-92a7-3341cb533c31.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1258608423814447471/original/0aa8e69d-8f92-45ef-be65-124d47a770e8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1ODYwODQyMzgxNDQ0NzQ3MQ%3D%3D/original/319b165f-8ee2-4e83-a1f8-edd72761efa0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1ODYwODQyMzgxNDQ0NzQ3MQ%3D%3D/original/0e32799f-ff14-4f5c-a3c9-fa7bdbf56ac6.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTc1MTA2ODgwNDI5NjA2MDkw/original/a20799ad-10fb-4546-bdbd-9f38073fd54d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-975106880429606090/original/769e9b01-0190-4f96-82a7-a2821a10da8d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-975106880429606090/original/88ede8b4-2cb2-4944-9a0d-c1f3383b665d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/509a4a27-0932-4dbe-97eb-5102f9ef4aab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/0e8af923-88b0-4158-b06d-d8c144c84f98.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/fce411e5-997d-434f-b1b4-3394e16d2973.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-578700489517829279/original/54f9dcd5-989e-4f32-a7de-ff530e9f50af.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-578700489517829279/original/cb57494a-f7a2-4180-8036-c33c3ce31d67.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-578700489517829279/original/c7f1f33c-1e1b-44c9-9ee4-519176765ba1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/a187513d-fc2d-43ce-9dac-32811514a8fb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/262dbc80-42d1-44cf-b26e-fa0655a7736d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/dcdced84-100d-4132-bf46-f884e14aa28d.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MDg2MzU5Njc5MzMxNzU5OQ%3D%3D/original/b6f772cd-bafb-485a-bf00-ba2ed0bbf4e7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MDg2MzU5Njc5MzMxNzU5OQ%3D%3D/original/65f66beb-9403-4bc6-9502-418e2aba3353.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MDg2MzU5Njc5MzMxNzU5OQ%3D%3D/original/fc8fa0d0-b0bb-42b5-8042-a6934ffb36b0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MDg2MzU5Njc5MzMxNzU5OQ%3D%3D/original/efe5d57c-7ddb-462e-b4ed-6fb08689a38c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-943149688969006037/original/69dd4a8f-0b47-4b25-b2a0-b0a1671fb428.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-943149688969006037/original/c9d36ee3-f4a3-4dde-adba-cf853f46a9e4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-943149688969006037/original/446e3907-0ed3-413a-880e-5bae2e54e94c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTQzMTQ5Njg4OTY5MDA2MDM3/original/063a7534-b2a8-4598-8162-925befada85e.jpeg?im_w=720",
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
