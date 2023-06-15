import React from "react";
import "./navbar.scss";

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

// const getColor = () => {
//   return true;
// };

export default function Navbar() {
  return (
    <div className={`navbar`}>
      <div className="navbar_container">
        <div className="left_container">
          <img
            onClick={() => scroll1(0)}
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677691570/Osha/zyro-image_1_vs7kgv.png"
            alt="logo"
          />
        </div>
        <div className="right_container">
          <div className="nav_items" onClick={() => scroll1(1)}>
            About me
          </div>
          <div className="nav_items" onClick={() => scroll1(2)}>
            Projects
          </div>
          <div className="nav_items" onClick={() => scroll1(3)}>
            Socials
          </div>
          <a
            href="https://drive.google.com/file/d/1x7qGFvqYNHSFvI_3TPbGrcHhOisC4__3/view?usp=drive_link"
            target="_blank"
            className="link"
          >
            <div className="nav_items nav_button">Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}
