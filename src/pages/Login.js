import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setData((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value,
    //   };
    // });
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <div className=" container p-4 mx-auto">
        <div className="max-w-sm border-2 bg-white w-full rounded p-4 mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="icon" />
          </div>
          <form className="py-6" onSubmit={handleSubmit}>
            <div>
              <label>Email :</label>
              <div className="bg-slate-200">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className=" w-full h-full outline-none p-2 bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password :</label>
              <div className="bg-slate-200 flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className=" w-full h-full outline-none p-2 bg-transparent"
                />
                <span
                  className="cursor-pointer pr-2"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <FaEyeSlash size={"26px"} />
                  ) : (
                    <FaEye size={"24px"} />
                  )}
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to={"/forgotPassword"}>
                <p className="hover:text-red-600 hover:underline">
                  Forgot password?
                </p>
              </Link>
            </div>
            <button className="px-6 text-white font-semibold text-lg py-2 w-full max-w-[150px] bg-red-600 hover:scale-110 transition-all mx-auto block  hover:bg-red-700 rounded-full mt-6  ">
              Login
            </button>
          </form>
          <p>
            Don't have account ?{" "}
            <Link to={"/signUp"}>
              <i className="text-red-600 hover:underline hover:text-red-700">
                SignUp Now
              </i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
