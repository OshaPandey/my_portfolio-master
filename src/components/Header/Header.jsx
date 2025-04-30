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
            <div className="bottom_text">Crafting the future of AI—one model at a time.</div>
            <div className="down_text">
            Passionate AI engineer and data scientist at Mercedes Benz Research and Development India, turning data and models into intelligent solutions. 
            Specializing in large language models and generative AI, I craft human-like interactions, 
            build insightful data-driven applications, and push the boundaries of what's possible with machine learning. 
            Always curious, always ready for the next big challenge.
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
            src="https://res.cloudinary.com/dakac0rtz/image/upload/v1746022010/osha_prof_pic-removebg-preview_eiygjk.png"
            alt="header-img"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
