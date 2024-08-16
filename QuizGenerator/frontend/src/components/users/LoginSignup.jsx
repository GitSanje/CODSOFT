import React from "react";
import Button from "../partials/Button";
import Input from "../partials/Input";
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

const LoginSignup = ({ mode }) => {
  const social_icons =
    "w-full btn btn-link btn-floating mx-1 bg-gray-300  text-gray-500  rounded-full hover:bg-indigo-400 hover:text-white  ";
  const $active = "bg-indigo-700 text-white ";
  const $button =
    "inline-block font-semibold text-black bg-gray-300 rounded h-10 w-32 flex items-center justify-center ";

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md mt-4">
          {/* <!-- Pills navs --> */}
          <ul className="flex justify-around mb-6">
            <li className="nav-item">
              <Link
                className={`nav-link ${$button} ${mode === 'login' ? $active : ''}`}
                to="/login"
              >
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${$button} ${mode === 'signup' ? $active : ''}`}
                to="/signup"
              >
                REGISTER
              </Link>
            </li>
          </ul>

          {/* <!-- Pills content --> */}
          <div id="pills-content">
            {/* <!-- Pills login --> */}
            {mode === 'login' && (
              <div id="pills-login" className="tab-pane fade show active">
                <form
                  method="POST"
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-center mb-3">
                    <p className="text-lg font-semibold pb-2">Sign in with:</p>
                    <div className="social_accounts">
                      <Button className={social_icons} type="button">
                        <i className="fab fa-google"></i>
                      </Button>
                    </div>
                  </div>
                  <p className="text-center font-medium">or:</p>

                  <Input
                    type="email"
                    id="loginName"
                    placeholder="Email or username"
                    name="email"
                    label="Email or username"
                  />

                  <Input
                    type="password"
                    id="loginPassword"
                    placeholder="Password"
                    name="password"
                    label="Password"
                  />

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="loginCheck" className="form-check-input" />
                      <label htmlFor="loginCheck" className="ml-2 text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-indigo-500 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg"
                    id="signinbtn"
                  >
                    Sign in
                  </Button>
                  <div className="text-center mt-4">
                    <p>
                      Not a member?{" "}
                      <Link to="/signup" className="text-indigo-500 hover:underline">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            )}
            {/* <!-- Pills register --> */}
            {mode === 'signup' && (
              <div id="pills-register" className="tab-pane fade show active">
                <form
                  method="POST"
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-center mb-3">
                    <p className="text-lg font-semibold  pb-2">Sign up with:</p>
                    <Button className={social_icons} type="button">
                      <i className="fab fa-google"></i>
                    </Button>
                  </div>
                  <p className="text-center font-medium">or:</p>

                  <Input
                    type="text"
                    id="registerFullName"
                    placeholder="Full Name"
                    name="name"
                    label="Full Name"
                  />
                  <Input
                    type="email"
                    id="registerEmail"
                    placeholder="Email"
                    name="email"
                    label="Email"
                  />
                  <Input
                    type="password"
                    id="registerPassword"
                    placeholder="Password"
                    name="password"
                    label="Password"
                  />
                  <Input
                    type="password"
                    id="registerRepeatPassword"
                    placeholder="Repeat Password"
                    name="password_confirmation"
                    label="Repeat Password"
                  />

                  <div className="flex justify-center items-center mb-4">
                    <input type="checkbox" id="registerCheck" className="form-check-input" />
                    <label htmlFor="registerCheck" className="ml-2 text-gray-500">
                      I have read and agree to the terms
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg"
                    id="signupbtn"
                  >
                    Sign up
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
