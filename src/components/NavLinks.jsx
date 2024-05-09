import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex flex-col justify-center  backdrop-blur-2xl transition ease-in-out duration-300 absolute inset-y-0 right-0 w-64 md:flex-row md:w-[450px] md:h-24 md:px-12 ">

      <ul className="text-left m-4 md:flex md:text-nowrap uppercase text-[16px] tracking-[2.7px] text-white font-barlow-condensed md:gap-4 md:text-[14px] md:tracking-[2.36px]">
        <li className="mx-2 py-5">
          <NavLink
            to="/"
            className="md:hover:underline "
            activeclassname="text-white border-b-4 border-white pb-7"
          >
            <span>00</span> Home
          </NavLink>
        </li>
        <li className="mx-2 py-5">
          <NavLink
            to="destination"
            className="md:hover:underline "
            activeclassname="text-white border-b-4 border-white pb-7"
          >

            <span>01</span> Destination
          </NavLink>
        </li>
        <li className="mx-2 py-5">
          <NavLink
            to="crew"
            className="md:hover:underline "
            activeclassname="text-white border-b-4 border-white pb-7"
          >
            <span>02</span> Crew
          </NavLink>
        </li>
        <li className="mx-2 py-5">
          <NavLink
            to="technology"
            className="md:hover:underline "
            activeclassname="text-white border-b-4 border-white pb-7"
          >
            <span >03</span> Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
