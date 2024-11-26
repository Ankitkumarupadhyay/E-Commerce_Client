import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" w-[100%] bg-white shadow-md h-16 flex items-center justify-between px-4 ">
        <div>
          <Link to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXriTGc-37yn8gRdBIlTg63J5QQHuAKXtAw&s"
              alt="img"
              className="w-40 h-16"
            />
          </Link>
        </div>
        <div className="hidden  md:flex items-center w-full justify-between max-w-sm px-2 ">
          <input
            type="text"
            placeholder=" Search product here..."
            className="w-full pl-4 outline-none border-2 h-8 focus-within:shadow-md  rounded-l-full"
          />
          <div className="min-w-[50px] cursor-pointer text-white bg-red-500 h-8 flex items-center justify-center rounded-r-full ">
            <IoSearchSharp size={"24px"} />
          </div>
        </div>
        <div className="flex items-center relative gap-5">
          <div className="cursor-pointer">
            <span>
              {" "}
              <FaShoppingCart size={"32px"} />{" "}
            </span>
            <div className="bg-red-600 absolute text-white w-5 h-5 rounded-full flex items-center justify-center p-1 -bottom-1 ">
              <p className="text-xs ">0</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <FaUserCircle size={"32px"} />{" "}
          </div>
          <div>
            <Link to={"/login"}>
              <button className="px-4 text-white py-1 bg-red-600 hover:bg-red-700 rounded-full ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
