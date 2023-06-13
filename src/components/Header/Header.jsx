import React from "react";
import "./header.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const scroll1 = (lvl) => {
  const { height } = getWindowDimensions();
  window.scrollTo({
    top: height * lvl,
    behavior: "smooth",
  });
};

export default function Header() {
  return (
    <div className="header">
      <div className="header_container">
        <div className="left_container">
          <div className="top_container">
            <div className="top_text">Hello, I am</div>
            <div className="middle_text">Osha Pandey</div>
            <div className="bottom_text">Amazing employee to be</div>
            <div className="down_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              illum sunt alias consequatur impedit iste cum atque aliquid
              officiis voluptatibus incidunt voluptatem vitae.
            </div>
          </div>
          <div className="middle_container">
            <div className="button" onClick={() => scroll1(4)}>
              Let's Chat
            </div>
          </div>
        </div>
        <div className="right_container">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677732750/Osha/WhatsApp_Image_2023-03-02_at_10.22.12_AM_oscyay.jpg"
            alt="header-img"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
