import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "600" : "400",
    };
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in");
  };

  const [isMobNav, setIsMobNav] = useState(false);
  const handleNav = () => {
    setIsMobNav(!isMobNav);
  };

  return (
    <div className="bg-black h-[80px] w-full fixed z-20">
      <div className="flex max-w-7xl items-center justify-between m-auto h-full text-cyan-400">
        <div className="text-5xl font-bold">AlloHealth</div>

        <div className="justify-center items-center gap-6 text-xl hidden md:flex text-cyan-400">
          <NavLink style={navLinkStyle} to="/">
            Home
          </NavLink>
          <NavLink style={navLinkStyle} to="/appointment">
            Appointment
          </NavLink>
          <NavLink style={navLinkStyle} to="/doctor-search">
            Doctor Search
          </NavLink>
          <NavLink style={navLinkStyle} to="/about-us">
            About Us
          </NavLink>
          <NavLink style={navLinkStyle} to="/contact-us">
            Contact Us
          </NavLink>
          <button
            className="bg-cyan-400 text-black p-1 pe-2 ps-2 rounded-full hover:scale-110 hover:bg-cyan-300 duration-300 active:scale-90"
            onClick={handleClick}
          >
            LogIn
          </button>
        </div>

        <svg
          className="size-10 cursor-pointer z-50 text-cyan-400"
          onClick={handleNav}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>

        <div
          className={
            !isMobNav
              ? "hidden"
              : "flex flex-col absolute top-0 left-0 h-screen w-screen text-black text-xl justify-center items-center bg-[#FEFAE0]"
          }
        >
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/"
            onClick={() => setIsMobNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/appointment"
            onClick={() => setIsMobNav(false)}
          >
            Appointment
          </NavLink>
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/doctor-search"
            onClick={() => setIsMobNav(false)}
          >
            Doctor Search
          </NavLink>
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/about-us"
            onClick={() => setIsMobNav(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/contact-us"
            onClick={() => setIsMobNav(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            className="py-6 text-3xl"
            style={navLinkStyle}
            to="/sign-in"
            onClick={() => setIsMobNav(false)}
          >
            SignIn
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
