import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import "../styles/components/slider.scss";
import { sliderItems } from "../utils/data";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleChangeSlide = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="app__slider">
      <div
        className="app__slider-arrow"
        style={{ left: "15px" }}
        onClick={() => handleChangeSlide("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className="app__slider-wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="app__slider-slide"
            style={{ backgroundColor: `#${item.bg}` }}
            key={item.id}
          >
            <div className="app__slider-img_container">
              <img className="app__slider-img" alt="slide-img" src={item.img} />
            </div>
            <div className="app__slider-info">
              <h1 className="app__slider-title">{item.title}</h1>
              <p className="app__slider-description">{item.desc}</p>
              <Link className="app__slider-button" to="/products">
                SHOW NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        className="app__slider-arrow"
        onClick={() => handleChangeSlide("right")}
        style={{ right: "15px" }}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slider;
