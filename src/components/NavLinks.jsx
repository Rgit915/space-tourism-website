import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden">
      <NavLink to="/"> 00 Home </NavLink>
      <NavLink to="destination">01 Destination </NavLink>
      <NavLink to="crew">02 Crew</NavLink>
      <NavLink to="technology">03 Technology</NavLink>
    </div>
  );
};

export default NavLinks;
