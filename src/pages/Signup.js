import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../helpers/imageToBase64";
import summaryApi from "../common/commonFiles";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const response = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        toast.success(json.message);
        navigate("/login");
      }
      if (json.error) {
        toast.error(json.message);
      }
    } else {
      toast.error("Passwords did not match");
    }
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    // console.log(imagePic);
    setData({
      ...data,
      profilePic: imagePic,
    });
  };
  return (
    <>
      <div className=" container p-4 mx-auto">
        <div className="max-w-sm border-2 bg-white w-full rounded p-4  mx-auto">
          <div className="w-20 h-20  mx-auto overflow-hidden rounded-full relative">
            <div>
              <img src={data.profilePic || loginIcon} alt="icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-slate-300 absolute bottom-0 opacity-75 pl-1 cursor-pointer pb-4 pt-1">
                  Upload photo
                </div>
                <input
                  type="file"
                  onChange={handleUploadPic}
                  className="hidden"
                />
              </label>
            </form>
          </div>
          <form className="py-6" onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <div className="bg-slate-200">
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className=" w-full h-full outline-none p-2 bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Email :</label>
              <div className="bg-slate-200">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
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
                  required
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
            <div>
              <label>Confirm Password :</label>
              <div className="bg-slate-200 flex items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your Password"
                  required
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className=" w-full h-full outline-none p-2 bg-transparent"
                />
                <span
                  className="cursor-pointer pr-2"
                  onClick={handleShowConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={"26px"} />
                  ) : (
                    <FaEye size={"24px"} />
                  )}
                </span>
              </div>
            </div>

            <button className="px-6 text-white font-semibold text-lg py-2 w-full max-w-[150px] bg-red-600 hover:scale-110 transition-all mx-auto block  hover:bg-red-700 rounded-full mt-6  ">
              SignUp
            </button>
          </form>
          <p>
            Already have account ?{" "}
            <Link to={"/login"}>
              <i className="text-red-600 hover:underline hover:text-red-700">
                Login
              </i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
