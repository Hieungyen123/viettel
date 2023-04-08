import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styled from "./Slide.scss";
import Slider from "react-slick";
import './Slide.scss'

import img1 from "../../Image/slide1.jpg"
import img2 from "../../Image/slide2.jpg"
import img3 from "../../Image/slide3.jpg"


export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
            <img className="img" src={img1} alt="" />
          </div>
          <div >
            <img  className="img"  src={img2} alt="" />
          </div>
          <div >
            <img className="img"   src={img3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
