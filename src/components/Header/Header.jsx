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
            <div className="bottom_text">I bridge ideas and reality with code.</div>
            <div className="down_text">
            Passionate web developer and software engineer, transforming code into amazing creations. 
            Crafting user-friendly websites, developing seamless software solutions, pushing boundaries.
             Always up for a challenge.
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
            src="https://res.cloudinary.com/dakac0rtz/image/upload/v1679483033/Osha_Picture_zoomed_w54muj.jpg"
            alt="header-img"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
