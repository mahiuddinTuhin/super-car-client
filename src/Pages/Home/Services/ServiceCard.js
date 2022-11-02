import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  // console.log(_id);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p className="text-orange-600 text-2xl">Price: ${price}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/checkout/${_id}`} className="btn btn-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
