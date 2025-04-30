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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzNzc3NDk2NTkzOTkxOTIzNQ%3D%3D/original/2a809f07-a49a-442e-b154-2e5badecccb1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1237774965939919235/original/9bbd9208-9943-404c-820e-7291e569b829.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1237774965939919235/original/2b503425-7b1e-484b-aebb-3e8fc6e0286e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1201174227224289316/original/5ed96d8b-662f-4366-b558-6bf87b3aa8fc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1201174227224289316/original/300b654e-f9c6-4ead-849a-27ed52f83de4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1201174227224289316/original/3db198b3-f189-474d-b94b-1dbd24f0ee07.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/8c1728ae-4f45-4638-8926-eca53292bc2f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/a81a4301-55f1-4302-b68e-7c48f84c568d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-667057370672996755/original/f9400c66-9ba3-417b-bba0-f6648ee80430.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-39049869/original/d05ca6dd-95ee-4d09-b347-3c9c9ca30cb5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/527a8a57-0e30-49cb-b2f9-2148bb6ad97d.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1127305222505894362/original/b0a73652-b889-4566-8332-1451fba27294.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1127305222505894362/original/546e1c6c-1815-45c1-870c-bc4ac8ea1a3e.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1127305222505894362/original/6e52831a-27e1-49ea-9565-4d3132240e74.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwMzMzMTY0NDE2MzM0NTI5NA%3D%3D/original/9e4d62b7-3c4f-442f-ac29-bd8ea3f9c212.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwMzMzMTY0NDE2MzM0NTI5NA%3D%3D/original/d2baedf6-8db9-431a-85af-7b691ca9b68b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwMzMzMTY0NDE2MzM0NTI5NA%3D%3D/original/befe7432-5424-4150-8e14-335c7cf7b6a8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/5660766e-06bd-448a-8727-f325d70383b3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b82ce287-9d4e-4a34-82dc-4a806faf1911.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/670fc25b-f8dd-44a0-97e8-a652ccd77989.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1372305971513915751/original/fe44e269-c2f5-4152-8939-eaaba7ce7351.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1372305971513915751/original/439b51f6-afa0-4a74-9856-959a4765b926.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1372305971513915751/original/ead64b98-0b8d-495d-bbe0-a9fa68b6be25.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242067063611122397/original/a3b31758-adc1-4fee-a2bb-5a76b995d017.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242067063611122397/original/c640413c-bd85-4147-8651-12cfad9f7bad.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1242067063611122397/original/0c0cb37e-e8d9-48c3-8a72-5790a5256e7d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-4305754/original/e22d5ff8-53e1-4073-917f-347d59743413.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/92aa1461-acd5-487f-9598-09c58a43494e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f83560f1-3e55-4f40-831b-ee0206a2f9d3.jpg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/7405220e-7145-475a-8109-a3f6c01a49aa.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/35e64be5-3e75-4d88-8e8b-fe149e728001.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/cf61efd3-c634-40a7-b1bc-fd7eb9457880.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/9ea9db37-2a5e-4729-9a3d-c71c31b297f2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-50647280/original/497af0bc-494e-416c-834a-3047996a4c24.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-50647280/original/6230d871-f5fd-4ae3-875d-e70a3b2fdafd.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1337472674175997910/original/95353c03-cf28-4386-8186-669b5161be71.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1337472674175997910/original/d4de8fcb-a718-4b1c-be3c-d5ab4f864ba9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1337472674175997910/original/f920e8de-7e53-4477-999a-5cd5b9e5916c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069222567442238946/original/7a53884f-0c79-4eda-a34b-4d93de1ac6f3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069222567442238946/original/dbf9bef5-17b8-4240-bcfc-8dc3ed94e96f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1069222567442238946/original/06188f4c-3274-444b-994d-e1ce10663b61.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1348292752297624147/original/36fa35ca-c78d-4334-9b01-b5bdbc5b918d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1348292752297624147/original/6c8ea1c0-37e9-4baa-8603-05a211e1f7ac.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1348292752297624147/original/ef8da88c-392b-4267-93d5-fffcf5c89423.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/9694f24b-db6e-4a16-ab46-4d21938f124c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d74a9c9c-a149-483e-9e4e-c70bbdf314b0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-35884028/original/414ebf6b-35dd-42d1-8774-35d77f8fd321.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1346967847836222035/original/10403a20-4fe3-4112-a5ff-5723462f5764.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1346967847836222035/original/39783b5c-b4c2-4029-9cea-13e35578cb06.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1346967847836222035/original/7e2b40c2-d9df-4558-9865-d82db9b80963.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-893155834284873893/original/55ca3686-155e-461b-aca4-85bb739431d0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-893155834284873893/original/972ff7f0-11c0-46c6-8f8a-58c6e53e47be.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-893155834284873893/original/cdc98e3b-73b2-4194-86c2-2566a58bac35.jpeg?im_w=720  ",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-683105351279684142/original/431c1fc0-f11e-4cd1-a91a-91bcc51e531d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-683105351279684142/original/65616cc2-f97a-4e4c-9ceb-613191bf3d8e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-683105351279684142/original/1106402c-12b6-4f25-b340-0de87787f577.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-837944513669733292/original/d634ee17-d5f2-4ac7-8d11-c79a4bacc10d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-837944513669733292/original/22dfdcdb-c100-4b6c-85ce-0a3c4811800d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-837944513669733292/original/12f8d55b-dae3-4bf6-adaf-b3523e652228.jpeg?im_w=720",
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
