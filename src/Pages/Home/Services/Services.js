import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600 mb-4">Services</p>
        <h2 className="text-5xl font-semibold mb-4">Our Service Area</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          similique enim aliquam accusantium explicabo temporibus obcaecati est
          eum corporis! Consequatur!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
