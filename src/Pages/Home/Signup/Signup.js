import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import image from "./../../../assets/images/login/login.svg";
const Signup = () => {
  const { createUser, updateNameUrl, verification } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const url = form.url.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        handleUpdateProfile(name, url);
        handleVerification();
        alert("check mail for verify your address: ", email);
        navigate("/");
      })
      .catch((err) => console.log(err));

    const handleVerification = () => {
      verification()
        .then((result) => {})
        .catch((err) => console.log(err));
    };
    const handleUpdateProfile = (name, url) => {
      const profile = {
        displayName: name,
        photoURL: url,
      };
      updateNameUrl(profile)
        .then(() => {
          console.log("profile updated username and url", profile);
        })
        .catch((err) => console.log(err));
    };

    // form.reset();
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} alt="" className="w-3/4" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Signup</h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Mr. John Huutler"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                required
                type="url"
                placeholder="https://pixabay.com/image/tree.png"
                className="input input-bordered"
                name="url"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Signup" />
            </div>
          </form>
          <h1 className="text-center mb-4 text-fuchsia-900">
            Already have an account
            <Link to="/login" className="text-blue-600 ml-3">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
