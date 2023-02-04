import React, { Component } from "react";
import pic1 from "../imgs/pic1.jpg";
import pic2 from "../imgs/pic2.jpg";
import pic3 from "../imgs/pic3.jpg";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src={pic1} />
          </div>
          <div>
            <img src={pic2} />
          </div>
          <div>
            <img src={pic3} />
          </div>
          <div>
            <img src={pic1} />
          </div>
          <div>
            <img src={pic2} />
          </div>
          <div>
            <img src={pic3} />
          </div>
        </Slider>
      </div>
    );
  }
}
