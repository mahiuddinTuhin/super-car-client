import React from "react";

const BannerItem = ({ image, prev, next, n }) => {
  return (
    <div id={`slide${n}`} className="carousel-item relative w-full">
      <div className="carouselImage">
        <img src={image} alt="" className="w-full rounded-2xl" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
        <h1
          className="text-5xl font-bold text-white uppercase
          "
        >
          Affordable <br />
          price for car <br />
          servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2 w-2/5">
        <h1
          className=" font-bold font-xl text-white 
          "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem esse
          eveniet fugit voluptatum molestias aliquam praesentium, numquam
          suscipit est. Quam, unde quod! Aspernatur quas at sapiente fugiat
          eaque, sint ad.
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/3 w-2/5">
        <button className="btn btn-outline mr-5">Button</button>
        <button className="btn btn-outline btn-primary">Button</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} alt="" className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
