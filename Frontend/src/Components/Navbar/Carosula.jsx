import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carosula.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import C1 from "./Icons/aframes.jpg";
import C2 from "./Icons/design.jpg";
import C3 from "./Icons/icons.webp";
import C4 from "./Icons/countyside.jpg";
import C5 from "./Icons/lakefront.jpg";
import C6 from "./Icons/national parks.jpg";
import C7 from "./Icons/amazing pool.jpg";
import C8 from "./Icons/arctic.jpg";
import C9 from "./Icons/amazing vies.jpg";
import C10 from "./Icons/barns.jpg";
import C11 from "./Icons/beachfront.jpg";
import C12 from "./Icons/bed & breakfasts.jpg";
import C13 from "./Icons/boats.jpg";
import C14 from "./Icons/cabins.jpg";
import C15 from "./Icons/camper vans.jpg";
import C16 from "./Icons/castels.jpg";
import C17 from "./Icons/caves.jpg";
import C18 from "./Icons/chef kitchens.jpg";
import C19 from "./Icons/containers.jpg";
import C20 from "./Icons/cycladic homes.jpg";
import C21 from "./Icons/domes.jpg";
import C22 from "./Icons/earth homes.jpg";
import C23 from "./Icons/frams.jpg";
import C24 from "./Icons/golfing.jpg";
import C25 from "./Icons/grand pianos.jpg";
import C26 from "./Icons/hanoks.jpg";
import C27 from "./Icons/historical homes.jpg";
import C28 from "./Icons/houseboats.jpg";
import C29 from "./Icons/islands.jpg";
import C30 from "./Icons/luze.jpg";
import C31 from "./Icons/mansions.jpg";
import C32 from "./Icons/new.jpg";
import C33 from "./Icons/off the grid.jpg";
import C34 from "./Icons/omg.jpg";
import C35 from "./Icons/play.jpg";
import C36 from "./Icons/rooms.jpg";
import C37 from "./Icons/ski-in-out.jpg";
import C38 from "./Icons/skiing.jpg";
import C39 from "./Icons/surfing.jpg";
import C40 from "./Icons/tiny house.jpg";
import C41 from "./Icons/top cities.jpg";
import C42 from "./Icons/top of the world.jpg";
import C43 from "./Icons/treehouse.jpg";
import C44 from "./Icons/trending.jpg";
import C45 from "./Icons/tropical.jpg";
import C46 from "./Icons/vineyards.jpg";
import C47 from "./Icons/windmills.jpg";
import { useState } from "react";
const IconsItems = [
  { img: C1, label: "A-frame", link: "/Aframe" },
  { img: C16, label: "Castles", link: "/Castle" }, // fixed
  { img: C12, label: "Bed & Breakfast", link: "/Bed&bearkfast" }, // match exactly
  { img: C2, label: "Design", link: "/Design" },
  { img: C3, label: "Icons", link: "/Icon" }, // fixed
  { img: C4, label: "Countryside", link: "/Countryside" },
  { img: C5, label: "Lake", link: "/Lake" },
  { img: C6, label: "National Parks", link: "/Nationalpark" }, // fixed
  { img: C7, label: "Amazing Pool", link: "/Amazing" }, // assuming it's "Amazing"
  { img: C8, label: "Arctic", link: "/Arctic" }, // fixed capitalization
  { img: C9, label: "Amazing Views", link: "/AmazingViewes" }, // fixed spelling to match route
  { img: C10, label: "Barns", link: "/Barns" },
  { img: C11, label: "Beach Front", link: "/Beachfront" },
  { img: C13, label: "Boats", link: "/Boats" },
  { img: C14, label: "Cabins", link: "/Cabins" },
  { img: C15, label: "Camper Vans", link: "/Campervans" },
  { img: C17, label: "Caves", link: "/Caves" },
  { img: C18, label: "Chef Kitchens", link: "/Chefkitchens" },
  { img: C19, label: "Containers", link: "/Container" }, // fixed
  { img: C20, label: "Cycladic Homes", link: "/Cycladichomes" },
  { img: C21, label: "Domes", link: "/Domes" },
  { img: C22, label: "Earth Homes", link: "/Earthhomes" },
  { img: C23, label: "Farms", link: "/Frames" }, // assuming this was meant to be Frames
  { img: C24, label: "Golfing", link: "/Golfing" },
  { img: C25, label: "Grand Pianos", link: "/Grandpianos" },
  { img: C26, label: "Hanoks", link: "/Hanoks" },
  { img: C27, label: "Historical Homes", link: "/Historicalhomes" },
  { img: C28, label: "House Boats", link: "/Houseboats" },
  { img: C29, label: "Islands", link: "/Island" }, // fixed
  { img: C30, label: "Luxe", link: "/Luxe" },
  { img: C31, label: "Mansions", link: "/Mansion" }, // fixed
  { img: C32, label: "New", link: "/New" },
  { img: C33, label: "Off-the-Grid", link: "/Offthegrid" },
  { img: C34, label: "OMG", link: "/Omg" },
  { img: C35, label: "Play", link: "/Play" },
  { img: C36, label: "Rooms", link: "/Room" }, // singular in route
  { img: C37, label: "Ski-in-out", link: "/Skingout" }, // match exact spelling
  { img: C38, label: "Skiing", link: "/Skiing" },
  { img: C39, label: "Surfing", link: "/Surfing" },
  { img: C40, label: "Tiny House", link: "/Tinyhouse" },
  { img: C41, label: "Top Cities", link: "/Topcites" }, // match spelling
  { img: C42, label: "Top of the World", link: "/Topofworld" },
  { img: C43, label: "Treehouse", link: "/Tresshouse" }, // typo fix to match route
  { img: C44, label: "Trending", link: "/Trending" },
  { img: C45, label: "Tropical", link: "/Tropical" },
  { img: C46, label: "Vineyards", link: "/Vineyards" },
  { img: C47, label: "Windmills", link: "/Windmills" },
];
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-20px",
      top: "10%",
      zIndex: 1,
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      cursor: "pointer",
    }}
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: "-20px",
      top: "10%",
      zIndex: 1,
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      cursor: "pointer",
    }}
  >
    ›
  </button>
);

export default function SimpleSlider() {
  const [activeIndex, setActiveIndex] = useState(null); // add this

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 18,
    slidesToScroll: 10,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ margin: "20px", padding: "10px", gap: "3px" }}>
      <Slider {...settings}>
        {IconsItems.map((icon, index) => (
          <div
            className={`set-icon ${activeIndex === index ? "active" : ""}`}
            key={index}
            style={{ textAlign: "center" }}
            onClick={() => handleClick(index)}
          >
            <Link
              to={icon.link}
              className="set-icon-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={icon.img}
                alt={icon.label}
                className="set-icon-img mx-auto"
              />
              <h5 style={{ fontSize: "12px" }} className="text-center">
                {icon.label}
              </h5>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
