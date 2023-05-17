"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img
            src="/Banner5.jpg"
            className="object-cover w-full max-h-[500px]"
          />
        </div>
        <div>
          <img
            src="/banner2.png"
            className="object-cover w-full max-h-[500px]"
            S
          />
        </div>
        <div>
          <img
            src="/Banner6.jpg"
            className="object-cover w-full max-h-[500px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
