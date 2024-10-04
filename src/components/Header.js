import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navitems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Projects",
      path: "portfolio",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex bg-white justify-between gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 ">
      <h1 className="text-black md:text-4xl text-2xl font-bold font-rubic ">
        Vijay <span className="text-yellow-500 italic">Constructions </span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navitems.map(({ link, path }) => (
          <Link
            key={path}
            className="cursor-pointer p-3 rounder-full  px-3 uppercase hover:bg-yellow-500 hover:text-black rounded-full  text-[15px] font-bold "
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      <button className="bg-yellow-500 hover:bg -black hover:text-white text-black rounded-full font-semibold px-10 py-3 transform hover:scale-105 transition-transform  duration-300 cursor-pointer lg:flex hidden  ">
        REACH US
      </button>
      <div
        className="flex justify-between items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isOpen ? (
            <IoClose className="text-yellow-500 text-3xl cursor-pointer"></IoClose>
          ) : (
            <FaBars className="text-yellow-500 text-3xl cursor-pointer"></FaBars>
          )}
        </div>
      </div>
      <div
        className={`${isOpen ? "flex" : "hidden"}
        } w-full bg-yellow-500 p-4 absolute top-[72px] left-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navitems.map(({ link, path }) => (
            <Link
              key={path}
              className="cursor-pointer p-3 rounder-lg  px-3 uppercase hover:bg-black hover:text-white    rounded-full  text-[15px] font-bold "
              to={path}
              spy={true}
              onClick={toggleMenu}
              offset={-140}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
