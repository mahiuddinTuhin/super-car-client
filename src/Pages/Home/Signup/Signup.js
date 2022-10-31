import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import image from "./../../../assets/images/login/login.svg";
const Signup = () => {
  const { setUser, user, loading, createUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }) // this is signup js 19no line 
      .catch((err) => console.log(err));
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
              Signup
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
