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
        "https://a0.muscache.com/im/pictures/miso/Hosting-974645034426647072/original/e8e8b586-1b18-494a-b766-fff09e6024cf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-974645034426647072/original/62e7867e-78ed-496b-a4b7-d20ce21f525c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-974645034426647072/original/d806421a-e8e9-41a9-9b66-f4f1b0f998ef.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-974645034426647072/original/726194af-80f2-4840-b013-2a9840759d5c.jpeg?im_w=720",

        "https://a0.muscache.com/im/pictures/miso/Hosting-974645034426647072/original/f91a7e2e-7bd7-43bb-86b3-463907437423.jpeg?im_w=720",

        "https://a0.muscache.com/im/pictures/miso/Hosting-982497456706533145/original/f388bb9b-130a-4eb7-ba19-0af16625d1bf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTA2OTkxNjQ%3D/original/db151599-78fe-46d9-88cd-a8b956efaa70.jpeg?im_w=720",
        "https://picsum.photos/300/200?random=2",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1313802113750058020/original/53e032a5-73e9-4a0d-ae7c-082b8b165723.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1313802113750058020/original/53e032a5-73e9-4a0d-ae7c-082b8b165723.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1313802113750058020/original/2c1c654f-4a23-40a4-89e8-74b465cd77d2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654198341965956021/original/987adda7-2ff7-4fa1-bfd7-fc94512d5511.jpeg?im_w=720",
        "https://picsum.photos/300/200?random=3",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1313802113750058020/original/ac0d7173-76e9-4594-beda-f54715e93546.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1325472827692658040/original/00fe678a-4742-4595-9841-b1f81c83867b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM2OTAyOTczMTk4MTAyNDY0NA==/original/9cca835d-2fef-4933-9e9c-2d78a017ac31.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM2OTAyOTczMTk4MTAyNDY0NA==/original/4b76ad79-9f7a-4401-a663-d0aa96b1fd68.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-850514865125519151/original/46f64dc2-0739-47af-af82-58e202ef84e1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-964806073408835999/original/8adb9366-5163-403f-ae0b-778624b822ac.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1132297101486898149/original/4d53268a-2b56-4231-aade-dd3997117732.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-653614736289902566/original/e2464b5f-6582-4033-aeb3-d3342e765fdd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-653614736289902566/original/ce24dd91-7167-4b7d-8ad3-426647a343fd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-850514865125519151/original/3c0426a0-6a5c-4588-bc97-c1a8979f5650.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MDgxOTkxMDg5MDI0NTM4Nw%3D%3D/original/6029d18e-779a-4b56-b746-9f1e78b87328.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1250819910890245387/original/e8f15fca-24d8-4981-86e4-07bf4ac72e41.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MDgxOTkxMDg5MDI0NTM4Nw%3D%3D/original/dd509680-c64c-49ff-a3e0-7d4be4a62501.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/4a96e708-4846-4dff-b11e-024e39a8b6e1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/54c49e5a-9859-4c6d-b7a7-6e734a297385.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NjU3OTk3NzIyNDU4MTMyNg%3D%3D/original/ace2a0f5-4f3e-4aa4-852c-b5ae43da6b4b.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-20076777/original/c5ee5259-16b6-47ad-8678-f8e15ff15cef.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/d84c71d1-a54f-4062-854c-b29881d2e1a2.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6cf7d44c-7311-45dd-8ac1-adbd2bbf1410.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1375790295718742141/original/4ade7669-2dbc-4204-90f7-80fb07dfc64d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/3d071e19-bad8-4d9a-99c9-db17b7ab81ea.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5f2f46a5-4a2a-4a14-aa58-48be1da5bce9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDc5ODQwOTY%3D/original/60d5e3cf-0695-4db8-8c7b-1a349663f606.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDc5ODQwOTY%3D/original/ba3a19d1-8a3f-4650-b143-f1fcbed9f3fb.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/2f4d9b28-ad91-4c12-8225-31c1f23e1955.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50686670/original/8cf12079-f0d9-4e82-9f10-ac82062e54b0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/787eeecc-357c-4b4a-beb2-c2325155c254.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/dba63cbd-8629-4d0e-bba3-e2b481941777.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1309471658215432504/original/94e682bd-73ed-4361-b9d3-79d7948efc9e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1309471658215432504/original/7c95f608-91d0-40df-8b9c-da8a632db4cc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1309471658215432504/original/21140a1f-e5f3-46dd-8447-df22e1b11aac.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1309471658215432504/original/638cb474-cc75-4170-9f48-fcec1aeeb57e.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-645991502129517571/original/0b8f7d38-8749-4928-ae9b-0a73b45cbaa3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-645991502129517571/original/9fe0cf03-a3cd-4c1d-8bb2-6edbd1be970c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/729a4383-b703-4b38-82a7-89a68e498b22.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-645991502129517571/original/84a969f3-4f88-4bfb-a0b8-be44e8d7431d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1253671345855047537/original/d928c006-1371-485b-af5b-cb2afdeabb37.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1253671345855047537/original/c6c34bc3-a662-427c-a7e6-4b9fe78bfc69.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1253671345855047537/original/94db5455-d2e5-497b-bcfd-bacd14063de2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1253671345855047537/original/abb09737-4f18-445a-80cf-a962bf02ab4d.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1378244395862863750/original/09345485-9290-4c2b-9e37-01c60de09bc4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1378244395862863750/original/84ca68c0-51f7-4cff-b78e-7374d698300d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1378244395862863750/original/0b94a8e4-1175-4993-9732-d1339e5243c0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1378244395862863750/original/d3e4c5ba-ff51-4ebe-a5f3-8f5d428d497c.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/6b1764a5-8c00-4137-a053-bbcb5fbf8a56.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e334718e-c357-4235-8faa-09728cd29104.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4a62ce8c-2797-49dd-9bfc-77dc4a88d7bf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5ebfa055-ae71-4a47-a30c-ac57b6d0b25a.jpg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/miso/Hosting-1023039456029808942/original/0a0574bc-d72e-40aa-8d5a-b66e43ee3967.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1023039456029808942/original/c80ceb28-e1da-4fcc-a993-9255d3131acc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1023039456029808942/original/32a811a9-a43f-433c-bef7-6104dfd8da70.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1023039456029808942/original/86780b72-f875-49c0-92c1-f0fdad32edd8.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1069774514082922530/original/e2cbb3fb-4e71-4bf1-a210-e64ea6305b90.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1069774514082922530/original/f3db711c-fd39-4baf-923b-3625f5021785.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1069774514082922530/original/69252a9c-72c7-488e-a479-ba69766b1459.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1069774514082922530/original/209a7364-de73-433e-86fa-0b0fa75ca049.jpeg?im_w=720",
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
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1365408261653464939/original/fc744b72-9acd-4360-b0bd-d8838188716f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1365408261653464939/original/ab2609e8-a6cf-40d5-8f08-1421884a1954.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1365408261653464939/original/188ccb35-d403-4ffa-8a1c-172a3ccb3981.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1365408261653464939/original/ad999cc0-0c59-4ddb-8e06-11dd1c815cb9.jpeg?im_w=720",
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
