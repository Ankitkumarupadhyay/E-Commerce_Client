import React from "react";
// import "../CSS/footer.css";

import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full  pt-4  bg-red-600">
        <div className="flex justify-center items-center ">
          <FaRegCopyright size={"18px"} className="hover:text-white " /> 2024
          All Rights Reserved{" "}
        </div>
        <div className="flex justify-center ">
          {" "}
          Designed by {"   "}
          <span className="text-white ml-1 font-semibold hover:underline">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ankit-kumar-upadhyay-5005b3244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
                Ankit Kumar Upadhyay
            </a>{" "}
          </span>{" "}
          <br />
        </div>
        <div className="flex justify-center gap-2">
          <a
            target="blank"
            className="m-1 hover:text-white"
            href="https://www.instagram.com/ankit__upadhyay_3800?igsh=bWVsamUzbG51cnBr"
          >
            <IoLogoInstagram size={"32px"} />
          </a>
          <a
            target="blank"
            className="m-1 hover:text-white"
            href="https://www.facebook.com/profile.php?id=100023545757586"
          >
            <FaFacebook size={"32px"} />
          </a>
          <a
            target="blank"
            className="m-1 hover:text-white"
            href="https://www.linkedin.com/in/ankit-kumar-upadhyay-5005b3244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedinIn size={"32px"} />
          </a>
          <a
            href="https://github.com/Ankitkumarupadhyay"
            className="m-1 hover:text-white "
            target="blank"
          >
            <FaGithub size={"32px"} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
