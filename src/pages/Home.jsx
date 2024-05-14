import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home flex flex-col justify-center items-center space-y-8 text-center min-h-screen bg-center  md:px-12 lg:flex lg:flex-row  overflow-hidden">
      <div className="my-12 text-light-blue flex flex-col items-center md:gap-8 md:mx-12 lg:text-justify lg:mx-0 xl:flex xl:flex-col xl:justify-center xl:place-items-start">
        <p className="text-[16px] tracking-[2.7px] font-barlow-condensed uppercase md:text-[20px] md:tracking-[3.38px]">
          So, you want to travel to
        </p>
        <h1 className="text-[80px] uppercase text-white font-bellefair md:text-[150px] leading-[150px]">
          Space
        </h1>
        <p className="text-[15px] leading-[25px] font-barlow w-[327px] h-[125px] md:w-[444px] md:h-[112px] md:text-[16px] md:leading-7 md:px-8 md:mx-4 md:mb-8 lg:h-[128px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <NavLink to={"destination"}>
          <button
          type="button"
          className="text-dark-blueish text-[20px] tracking-[1.25px] font-bellefair uppercase rounded-full w-[150px] h-[150px] bg-white outline-solid border-[2px] border-gray-500/30 transition-all duration-[0.9s] hover:outline-width-[2em] lg:w-[274px] lg:h-[274px] xl:text-4xl"
        >
          Explore
        </button>
        </NavLink>

      </div>
    </section>
  );
};

export default Home;
