import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Anh0 from "./top0.png";
import Anh1 from "./top1.png";
import Anh2 from "./top2.png";
import Anh3 from "./top3.png";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fuki.co.jp/img/top2.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fuki.co.jp/img/top4.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fuki.co.jp/img/top8.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fuki.co.jp/img/top7.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
