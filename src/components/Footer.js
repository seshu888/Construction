import React from "react";
import { FaArrowUp, FaCopyright } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center gap-2 p-5">
        <FaCopyright className="fill-yellow-500 lg:size-5 size-8" />
        <p>Copyright 2024, VIJAY CONSTRUCTIONS, All Rights Reserved</p>
      </div>
      <div
        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed right-6 bottom-10"
        id="icon-box"
      >
        <Link to="hero" smooth={true} offset={-100} spy={true}>
          <FaArrowUp className="size-6" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
