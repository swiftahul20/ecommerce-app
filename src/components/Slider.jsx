import React from "react";
import Sliders from "react-slick";
import { Button } from "./Button";

const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Sliders {...settings}>
        <div className="bg-[#f5fafd]">
          <img
            style={{ height: 460 }}
            className="ml-40"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          ></img>
        </div>
        <div>
          <img
            className="ml-36"
            style={{ width: 460 }}
            src="https://i.ibb.co/cXFnLLV/3.png"
          ></img>
        </div>
      </Sliders>
      <div className="absolute left-[50%] top-[35%]">
        <div className="grid grid-rows-3 place-items-start gap-2">
          <span className="text-7xl font-bold"> SUMMER SALE </span>
          <span className="text-xl tracking-widest">
            {" "}
            Get flat 30% off for new arrivals!{" "}
          </span>
          <Button label="Shop Now" color="black" size="md" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
