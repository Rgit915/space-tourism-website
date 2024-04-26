import { NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <div className="flex flex-col justify-center items-center text-[16px] tracking-[2.7px] text-white font-barlow-condensed me-8 ">

      <NavLink to="/"> <span>00</span>Home  </NavLink>
      <NavLink to="destination"> <span>01</span>Destination </NavLink>
      <NavLink to="crew"> <span>02 </span>Crew </NavLink>
      <NavLink to="technology"> <span>03</span>Technology</NavLink>
    </div>
  );
};

export default NavLinks;
