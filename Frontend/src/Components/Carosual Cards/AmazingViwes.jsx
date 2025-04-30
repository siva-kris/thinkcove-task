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
        "https://a0.muscache.com/im/pictures/94e6244c-b20b-4f8a-9e73-de1283bdd1cd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fdcb5df5-18bb-4563-aa81-6d1c7e2cbb19.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/11285262/36ab60a3_original.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI3MjExNTA1NjQ0NjU5NDYwNA%3D%3D/original/5f91a034-ad10-4aee-9f6b-dce101a12d84.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/b992501e-3be8-4568-893a-bdbd89b3ce3e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1272115056446594604/original/0dfb8df5-b634-4f86-ad8b-706d0f285acc.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/e87a6018-10e5-488b-a7f7-cddca3f63baf.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-604855093626546308/original/8bf35222-6018-4f7c-accb-569e338f0e4d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-604855093626546308/original/594ff2d7-9bfd-4404-9df0-27c4ecaf7a4e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/eff6e36c-329f-4adf-b49d-d81fa878c4d0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6e5afa90-a303-4811-af26-2bdf1bd8a62f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-991966875278256628/original/fb234be3-4b21-47ef-8f0d-fd4d4525b57c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1329330227869310972/original/b930ccf1-72ac-48da-b6d4-a197fd169c0c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1329330227869310972/original/b5d75967-c317-40fd-aaf7-9d2901e8733a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1329330227869310972/original/e8ff2cbb-6c65-4518-a08c-8fa02a267b65.jpeg?im_w=7203",
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
        "https://a0.muscache.com/im/pictures/a2a9aeeb-f9c2-4127-86bb-936138e22fb7.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-33978312/original/9b13a712-0cbc-4987-a0a9-107fad357674.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-33978312/original/90096f57-4902-4787-b2e5-787732a23acd.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/90c0ab07-d7bd-42f9-b085-f1bca998b0fe.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/05722dfc-522c-4362-9b3e-fcab749c7af6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDcwNjc0MTM%3D/original/30faada3-babc-45f8-9622-7fdacc2313df.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-978221014839366762/original/7a3ee67a-f98f-4e97-9790-e5dbca1c86c8.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-978221014839366762/original/d77abec1-f346-40f8-8f20-5bfb5c2533a2.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-978221014839366762/original/29a97972-ab98-4fea-88bd-3b07b2e38993.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1175974150067790967/original/2e65127d-5250-45c3-b354-aa3f22512b9e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1175974150067790967/original/bd3d619f-f09e-40ef-a490-48811bd8d100.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1175974150067790967/original/35c82501-bab6-4809-86ca-dd1c9497e717.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-874193507946066263/original/50ea5c97-e127-4440-8fcf-f1cbbf771d3c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-874193507946066263/original/711bdf0d-b6c4-4443-ba71-9df424c92bfc.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-874193507946066263/original/d88e0576-2f7b-423b-a930-29f39d6f9f2a.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1001728676575821244/original/c5d90cde-4e57-4d3d-91ed-ad174e29c51c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1001728676575821244/original/2ff14c2b-1b11-481e-b242-a4184a622ba7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1001728676575821244/original/6f32a6c1-9c52-4ccb-8341-8d052449062e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/9035839e-9881-4890-a157-a8f60393b3e6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fafc2cf8-7683-40f1-aa7b-2dc2b17c3a1f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cc7a89a1-1c42-48ae-bdb2-78a8aefe0cb9.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/ac2ac15d-73ea-472a-9776-e597e1fb34e0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7ebc080b-9594-48b7-83ff-b19b0b70d533.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2cb01cb9-890d-4d58-ae99-70b284386d00.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-946380964070440147/original/1037c595-804d-43a6-b786-f851f6bf794b.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-946380964070440147/original/f29db10e-866d-4477-9e2d-ebf7d0ada51c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-946380964070440147/original/2f1adc09-fe04-46d2-9d43-a0132d07ecc6.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1011928401403218101/original/6d93762b-4aee-4a99-8660-74c926e72362.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMTk1MDY2NDUwNTQyNjYyMg==/original/1af86d8d-1c6b-4f5e-84c1-f29ba2bab4a2.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1011928401403218101/original/914bd0a2-a483-4e46-9242-1fa6556e0f77.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-15658643/original/eb8b3452-5445-484b-b259-bf6926b25f74.png?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-15658643/original/02617785-2d6b-465a-a299-4dcf30d9a69c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-15658643/original/5fd3042e-1a72-433f-b650-ec63f9dd9f24.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-569176168823468028/original/c4e2e60c-f664-4b43-ad8e-800889ed922d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-569176168823468028/original/9e265b16-32c1-4673-ace8-52ea96816539.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-569176168823468028/original/c269b155-4ff8-4dba-8284-69a176419409.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/118635ed-a1f4-4b7f-bb0c-a1de2bb43c8f.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/f09357e0-1a7f-46aa-9d6f-38778ca0cb6b.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/3c99a7f3-4737-4b99-bb6c-b404068e9434.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/99e43a6e-5382-4388-839b-7349b2540aff.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/e46fd8d3-3c70-41df-8549-1c724562ca9d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/99e43a6e-5382-4388-839b-7349b2540aff.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-907264951621479978/original/43e84dfa-e66c-4918-9c9b-0c7b87eaf4bd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-907264951621479978/original/e7c18317-47aa-492f-98d3-bde1fb3718ab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-907264951621479978/original/a9e3b618-5ee4-4bba-98ae-59fc42612c1e.jpeg?im_w=720",
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
