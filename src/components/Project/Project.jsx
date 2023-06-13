import React from "react";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { useState } from "react";
import "./project.scss";

const data = [
    {
        title: "Sample Title 1",
        link: "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
        title: "Sample Title 2",
        link: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 2
    },
    {
        title: "Sample Title 3",
        link: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 3
    },
    {
        title: "Sample Title 4",
        link: "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 4
    },
    {
        title: "Sample Title 5",
        link: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 5
    },
    {
        title: "Sample Title 6",
        link: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 6
    },
];

export default function Project() {
  const [slider, setSlider] = useState(0);
  return (
    <div className="project">
      <div className="top_container">
        <div className="title_container">Recent Projects</div>
        <div className="content_container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          molestias, in esse unde repellat beatae dolore ratione autem
          provident.
        </div>
        <div className="slider">
            <div className="slider__item">

                <div className="project__item">
                    <div className="top__container">
                        <img src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project-img" className="project__image" />
                        <div className="sno" >01</div>
                    </div>
                    <div className="bottom__container">Sample Title 1</div>
                </div>

                <div className="project__item item-m-1">
                    <div className="top__container">
                        <img src="https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project-img" className="project__image" />
                        <div className="sno" >02</div>
                    </div>
                    <div className="bottom__container">Sample Title 2</div>
                </div>

                <div className="project__item item-m-2">
                    <div className="top__container">
                        <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project-img" className="project__image" />
                        <div className="sno" >03</div>
                    </div>
                    <div className="bottom__container">Sample Title 3</div>
                </div>

            </div>
        </div>
        <div className="dots__container">
            <span className={(slider === 0) ? "dot active" : "dot"} onClick={() => setSlider(0)} ></span>
            <span className={(slider === 1) ? "dot active" : "dot"} onClick={() => setSlider(1)}></span>
            <span className={(slider === 2) ? "dot active" : "dot"} onClick={() => setSlider(2)}></span>
        </div>
      </div>
    </div>
  );
}
