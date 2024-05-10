import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
import menuIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import NavLinks from "../components/NavLinks";


const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className="header px-5 flex items-center justify-between bg-black">
        <nav className="flex justify-between items-center ">
        <div className="py-5">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
          <div className="horizontal-line hidden absolute bg-white w-[473px] h-[1px] lg:opacity-25 lg:left-[10%] ">
            <hr />
          </div>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <button type="button" onClick={toggleMenu}>
              <img
                src={isOpen ? closeIcon : menuIcon}
                className="absolute top-10 right-12 z-10 "
                alt={isOpen ? "Close Icon" : "Menu Icon"}
              />
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="menu">
            <NavLinks />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
