import React from "react";
import parts from "./../../../assets/images/about_us/parts.jpg";
import person from "./../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            alt=""
            src={person}
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            alt=""
            src={parts}
            className="absolute right-5 top-1/2 w-3/5 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
