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
        "https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-19065198/original/183329c4-8735-47d6-8462-a426494cdf69.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-19065198/original/2c44b843-22bc-4fd7-9367-ef9d59cae52a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2c23315a-a12e-49fd-bac6-2279d21003e5.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-47056325/original/c1d3bbc3-605a-48a1-95b2-65a864f0fccf.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/374acb8b-6217-48f5-8040-c85fea3240b5.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1313559375071946294/original/b9685fc0-026c-4cf4-a1fd-347657a0be2b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1313559375071946294/original/ed3e5b92-8c76-4b3d-8d8a-1c41b327b47e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1313559375071946294/original/ab1a2c6d-52f9-4d5d-9349-b4549881ef40.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-740310972714516739/original/84a07567-894f-4611-951b-2ba6d996054b.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-740310972714516739/original/3c4281ac-636f-4cde-ab44-0390265408b9.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-740310972714516739/original/af5e49ee-4c24-4404-bd7f-a02738f9d6f2.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/8520a083-d771-485b-8b39-0dad6f5a3f3e.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/eb592028-ec2d-4817-99b6-ac8030e8ac00.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/b6112437-921c-4f61-a928-412679fb2930.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-53682105/original/03e13a6c-1aa0-4ec9-9933-a4b8496313ad.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53682105/original/8260460a-a224-43c9-aa09-b0b571302d4d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53682105/original/7cc3b1a6-91bb-4f57-8ca4-5d7f81d33a26.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-20952140/original/c023d322-6416-4885-b05d-484759141663.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjA5NTIxNDA=/original/931df09a-13c9-4179-ad4d-d1e4f16cc0e6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-20952140/original/70428230-fe50-45da-ab61-57d8dcd6f7f1.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/f43c0231-7e08-4678-bcf9-e4068a7b0614.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/80c33fdd-66b7-482a-843b-6db982efa6c6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b381fc45-e155-4205-bf58-e0669671dc7a.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-600558440407415802/original/f8154e4b-e932-4885-9af7-15d80c88b369.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-600558440407415802/original/5c2dae6b-ce4b-416e-b5e8-ec2276eee7b8.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-600558440407415802/original/5ed1cb30-c51e-4d0c-a8e0-34cccc8b1f63.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-44962123/original/21e4652f-561f-4715-aaf5-bf0d4463bf82.jpeg?im_w=720https://a0.muscache.com/im/pictures/c3867e87-7064-40af-8d80-086196cf4ab8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-44962123/original/21e4652f-561f-4715-aaf5-bf0d4463bf82.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/ae974f0d-f3b0-4598-9a38-7fcd861c6f82.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/fc829068-a24d-4abf-a5d8-2d3ac3a83491.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-44074270/original/fbcedcbb-3fbf-4617-a9ac-b48cec5f9289.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-44074270/original/a2d79902-d427-45d4-a303-36a33cdf4bfa.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3a829d16-30d6-4130-a5f6-7e94cac3876f.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/0aeb2d3c-19c0-42c1-b526-d7836f1ddf34.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-14300924/original/ef816722-97a7-4bcb-b073-09ef8ebe05a9.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-7036652/original/025eabbb-2e4b-4330-8e72-6f971686ce18.png?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-7036652/original/a6fd448d-c4c5-4cde-abf2-6502adfd3940.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-7036652/original/2f8fa39b-6f47-439b-b60a-b47fe21d0bf7.png?im_w=720",
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
        "https://a0.muscache.com/im/pictures/b3e38b26-e672-4fbe-876e-42d708cdd2dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b4cdb0bb-6094-41dd-b23b-0053ddca2627.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/943af5bb-cd0f-4390-9420-7aa24dea313b.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-53515886/original/f58e2442-93ed-4d84-a2f1-30bea0cbe26a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53515886/original/d4b7ccb5-713c-4d2f-9332-fc50953595e2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53515886/original/2e6d5e10-6fef-448a-b061-78c4979d4583.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-932471640089966835/original/2442fbe3-cb9b-489f-8ec2-fb1bbabf7b13.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-932471640089966835/original/af278ce8-0287-4a99-9e3c-0b92d3d9dd00.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-932471640089966835/original/85cff69f-535c-48a7-ae71-7f86266aa4bd.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/d10645a3-6fa0-4a17-9ae8-02278355e9f5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/12b9a833-d8e8-4899-8aa2-009350a86153.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/56645052-dc08-4dd9-8fc7-b9e1189babe8.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/9e45b8df-204b-4bcc-91b0-a00ad8ecf387.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e1ca48ae-63a3-4903-9d5b-448eff7d1269.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/26e29477-4e0a-4cf2-a505-571e4ea52e49.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/9639fa8e-2928-4462-8490-9f4c901e2eb4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c6d97b0b-1ff9-4da6-ab35-412f951fa523.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3da3445b-a817-4aa0-a3f8-45e1e23fa271.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/8884bf58-5920-42aa-80d8-7395ac7aa450.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cd45fd5-d084-45b1-91c6-194d2fee11d6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-27818219/original/d028dd10-ea57-498c-80e1-64c398b6e10e.jpeg?im_w=720",
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
