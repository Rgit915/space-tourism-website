import { useState } from "react";

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
      <header>
        <nav className="flex justify-between items-center ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <button type="button" onClick={toggleMenu}>
              {isOpen ? (
                <img
                  src={closeIcon}
                  className="absolute top-10 right-12 z-10 "
                  alt="close Icon"
                />
              ) : (
                <img src={menuIcon} alt="Navigation menu" />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="menu backdrop-blur-2xl p-10  transition ease-in-out duration-300 absolute inset-y-0 right-0 w-64  md:flex md:bg-[#979797]">
            <NavLinks />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
