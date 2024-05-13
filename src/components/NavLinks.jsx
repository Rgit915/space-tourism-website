import { NavLink } from "react-router-dom";
import data from "../data.json";

const NavLinks = ({pathname}) => {
  const links = data.navigationLinks;

  return (
    <div className="flex flex-col justify-center  backdrop-blur-2xl transition ease-in-out duration-300 absolute inset-y-0 right-0 w-64  md:flex-row md:w-[450px] md:h-24 md:px-12 lg:top-[2.5em] lg:w-[50%]">
      <ul className="text-left m-4 md:flex md:text-nowrap uppercase text-[16px] tracking-[2.7px] text-white font-barlow-condensed  md:gap-4 md:text-[14px] md:tracking-[2.36px]">
        {links.map((link)=> (
          <li className="mx-2 py-5" key={link.to}>
            <NavLink
              to={link.to}
              activeclassname="border-opacity-100"
            >
              <span>{link.linkNumber}</span> {link.name}
            </NavLink>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default NavLinks;
