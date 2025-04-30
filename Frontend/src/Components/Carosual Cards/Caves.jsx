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
        "https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-611964103002302908/original/7b4ec467-ca7d-4123-b480-396ba6ba1565.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ae1d3902-f2e6-45a7-944d-3122259ce228.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-977931967537355674/original/09fafdf9-ffde-4eb2-9d27-91065937feab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-977931967537355674/original/d454ac95-8988-4530-911b-f2a0c4271529.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-977931967537355674/original/17052db0-d915-4b7c-bb9f-bcb6ee3fb338.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/ea34ac88-2977-4d01-b8a7-f56e5e5700a4.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51833930/original/863d0a84-c1b1-4b03-9913-065cbca4fa14.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51833930/original/42eb0b64-a3a3-4aa3-a0f4-b915098a9a77.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/11fb4e7a-eb9f-4714-82a6-08687a6c83af.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e5ebbf04-7326-4960-8247-d98daca29f8b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c80833ef-9981-4994-af7c-535c1ffaaee4.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/6300df88-af2e-4620-a73e-7660def9895f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/bf252dda-43fa-47e4-b31e-017a879d886d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/c05d649f-b5c1-468c-a4b8-1bfe216bb8d8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/41912165/e6ab5568_original.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/46791266/20b51db4_original.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/41912204/067ec7ad_original.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-41656133/original/5fbccf60-b601-467f-94b4-bc87c8195c22.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDE2NTYxMzM=/original/715b3ac1-0ec3-4d63-a22a-1ec3610a9a30.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDE2NTYxMzM=/original/b753d869-e397-497d-a4a2-c785c054575e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-52316210/original/f52d2022-77bf-48b5-a8c2-6194001b052e.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-52316210/original/07e7d6b9-91f7-4f5a-8de4-bba6eae39c3c.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-52316210/original/06d7ecd4-7093-417c-abee-e414297c6a50.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/0a21144d-9f85-4706-9987-6693033f4364.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b561e8fe-6d9a-4887-bb06-9fbb79402276.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzExNjQ2MjQ%3D/original/d1f47eed-8063-4e90-893c-c011bc22aa0d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-952818031911904563/original/cc54a1bd-342a-4fbb-929e-542d08cabd94.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTUyODE4MDMxOTExOTA0NTYz/original/58e9d8dd-25bd-4821-9df8-ad06f4ec4a2d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-952818031911904563/original/09037ae2-d5a7-4739-ab2b-a7af9079398d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-44850887/original/523ebe8f-0a94-40d0-8759-b02f6808339d.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-44850887/original/e9626bb8-30d7-4caa-bc1a-d3c7459dc489.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/e3b87766-dc59-441c-a048-f68787d4f61a.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-22755559/original/0b819256-9d30-4f5c-b982-62287a769339.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22755559/original/17400104-edd5-44c0-b7f4-aadd863c0aba.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/d8774c23-d825-4481-a1f6-cb373c815c11.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/64ad7c2c-dbb2-4626-95a0-20f7abd74482.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-36681666/original/2b3667fe-b45f-4265-8afe-d2a6c448d13b.jpeg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-36681666/original/ad6b47bc-f184-4424-b9bb-6a27db20df23.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/53afb838-d3be-42c2-ada0-60ec4b78893a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1fa10ed3-78aa-4e22-95b9-cec79dbce4a6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9f90a58c-8a40-4a6c-942f-549605952343.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1065535886394010644/original/6d072e0a-d8eb-4079-941e-6f8e013d7559.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1065535886394010644/original/87709db2-11e6-4f3e-a480-ca10ae7cf256.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1065535886394010644/original/ee6a7839-f738-4b30-9ff3-23e1bd09c328.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTQzMTM2MzY3ODQyNzkxMDA3/original/bbcd62ef-c8ae-4ad4-8f0a-3b8f45d829a1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTQzMTM2MzY3ODQyNzkxMDA3/original/a1fb5f71-3998-47ff-8da2-642d0b31aa9b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTQzMTM2MzY3ODQyNzkxMDA3/original/f3b51a45-163a-4127-962a-879f0d0adb27.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/67ae61c5-4578-4e29-adfa-dc09966a8914.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/8b847c62-5468-4e91-89cc-4b7d951f81c4.jpg?im_w=720",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/a4903266-15b2-45b9-aa89-c0527eefd5ef.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-902013369391365051/original/b76f4959-0da0-47e7-bcae-7901a44d2370.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-902013369391365051/original/8106dc32-f744-41ed-96bd-6673e532415e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-902013369391365051/original/e9bb831e-8b80-4bbc-9628-58dddd489173.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/bd892b12-e4aa-43fa-b372-ccefb96302f6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c89e4229-e5cb-414f-b1c0-2e4038db0fd3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/308bef90-fd48-4ce8-9bae-eccc323227e3.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-659355159565669581/original/3fc0cbfb-b531-40b1-bee7-e5ec16d41ff9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzEyMDAxMjM2MjM4NDMyMzEy/original/5821bc14-5fe6-41d7-9fb8-215cc5800e47.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzEyMDAxMjM2MjM4NDMyMzEy/original/4c7e047a-a3bb-4d81-8839-908aed6c85df.jpeg?im_w=720",
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
