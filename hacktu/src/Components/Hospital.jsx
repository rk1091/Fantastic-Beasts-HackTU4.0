import React, { Component } from "react";
import pic1 from "../imgs/pic1.jpg";
import pic2 from "../imgs/pic2.jpg";
import pic3 from "../imgs/pic3.jpg";
import Slider from "react-slick";
import { Text } from "@chakra-ui/react";

export default class SimpleSlider extends Component {
  // export default function SimpleSlider(){
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
        <Text
          fontSize="65px"
          bgGradient="linear(to-l, #553c9a, #b393d3)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          {/* background-clip: text;color="transparent"
         -webkit-background-clip: text;font-weight: 600; */}

          <center
            style={{ margin: "10px" }}
            fontSize="5xl"
            fontWeight="extrabold"
          ></center>
          {/* background-clip: text;color="transparent"
         -webkit-background-clip: text;font-weight: 600; */}

          <center style={{ margin: "40px", p: "20px" }}>
            Our Accredited & Trusted Providers
          </center>
        </Text>
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
