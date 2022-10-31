import React from "react";
import img1 from "./../../../assets/images/banner/1.jpg";
import img2 from "./../../../assets/images/banner/2.jpg";
import img3 from "./../../../assets/images/banner/3.jpg";
import img4 from "./../../../assets/images/banner/4.jpg";
import img5 from "./../../../assets/images/banner/5.jpg";
import img6 from "./../../../assets/images/banner/6.jpg";

import "./banner.css";
import BannerItem from "./BannerItem";
const Banner = () => {
  const imageList = [img1, img2, img3, img4, img5, img6];
  let n = 0,
    prev = 0,
    next = 1,
    total = 6;
  return (
    <div className="carousel w-full py-10">
      {imageList.map((image) => {
        n += 1;
        n < 2 ? (prev = total) : (prev = n - 1);
        n > 5 ? (next = 1) : (next += 1);
        return (
          <BannerItem key={n} image={image} prev={prev} next={next} n={n} />
        );
      })}
    </div>
  );
};

export default Banner;
