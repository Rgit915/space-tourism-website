import { NavLink } from "react-router-dom";

const PlanetNavLinks = () => {
  return (
    <div className="planet-nav-links text-[16px] tracking-[2.36px] flex space-x-6 font-barlow-condensed text-light-blue">
      <NavLink to="/"> Moon </NavLink>
      <NavLink to="mars">Mars </NavLink>
      <NavLink to="europa">Europa</NavLink>
      <NavLink to="titan">Titan</NavLink>
    </div>
  );
};





export default PlanetNavLinks;
