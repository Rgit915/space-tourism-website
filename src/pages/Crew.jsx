import crewImage from "../assets/crew/image-douglas-hurley.png";
import { RxDotFilled } from "react-icons/rx";

const Crew = () => {
  return (
    <section className="crew flex flex-col items-center justify-center mt-8 space-y-4">
      <p className="navlink font-barlow-condensed  tracking-[2.7px] uppercase ">
        <span className="opacity-20 font-bold mr-3"> 02 </span> meet your crew
      </p>
      <img src={crewImage} className="" alt="crew image" />
      <hr />
      <div className="slider flex justify-items"><RxDotFilled /></div>
      <div className="crew-description">
        <p className="uppercase text-[16px] text-white font-bellefair opacity-30">Commander</p>
        <span className="uppercase text-[24px] text-white font-bellefair">Douglas Hurley</span>
        <p className="text-[15px] font-barlow text-light-blue leading-6">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </section>
  );
};

export default Crew;
