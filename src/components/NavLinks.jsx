import { NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <div className="flex flex-col justify-center items-center uppercase text-[16px] tracking-[2.7px] text-white font-barlow-condensed backdrop-blur-2xl  transition ease-in-out duration-300 absolute inset-y-0 right-0 w-64 md:flex-row md:w-[450px] md:h-24 md:px-12 md:gap-9 md:text-[14px] md:tracking-[2.36px]">

      <NavLink to="/" className="md:hover:underline "> <span className="mr-4">00</span>Home  </NavLink>
      <NavLink to="destination" className="md:hover:underline "> <span className="mr-4">01</span>Destination </NavLink>
      <NavLink to="crew" className="md:hover:underline "><span className="mr-4">02</span>Crew </NavLink>
      <NavLink to="technology" className="md:hover:underline "> <span className="mr-4">03</span>Technology</NavLink>
    </div>
  );
};

export default NavLinks;
