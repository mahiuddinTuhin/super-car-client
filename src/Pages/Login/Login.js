import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import image from "./../../assets/images/login/login.svg";

const Login = () => {
  const { login, setLoading, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password);
    console.log(loading);
    navigate(from, { replace: true });
    console.log(loading);

    // alert("login successfully");
    setLoading(false);
  };

  const signIn = (email, password) => {
    login(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} alt="" className="w-3/4" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
          <h1 className="text-center mb-4 text-fuchsia-900">
            Create new account
            <Link to="/signup" className="text-blue-600 ml-3">
              Signup
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
