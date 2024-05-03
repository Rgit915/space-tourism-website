import crewImage from "../assets/crew/image-douglas-hurley.png";
import { RxDotFilled } from "react-icons/rx";

const Crew = () => {
  return (
    <section className="crew flex flex-col items-center justify-center ">
      <div className="md:mt-12">
        <p className="navlink font-barlow-condensed  tracking-[2.7px] uppercase md:text-[20px] md:tracking-[3.38px] ">
        <span className="opacity-20 font-bold mr-3"> 02 </span> meet your crew
      </p>
      </div>
      <div className="md:flex md:flex-col-reverse">
      <div className="crew-image">
        <img src={crewImage} className="" alt="crew image" />

      </div>
      <hr className="md:hidden"/>
      <div className="slider flex justify-center "><RxDotFilled /><RxDotFilled /><RxDotFilled /><RxDotFilled /></div>
      <div className="crew-description w-[327px] h-[212px] flex flex-col justify-center items-center">
        <p className="uppercase text-[16px] text-white font-bellefair opacity-30">Commander</p>
        <span className="uppercase text-[24px] text-white font-bellefair">Douglas Hurley</span>
        <p className="text-[15px] font-barlow text-light-blue leading-6 p-2">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      </div>

    </section>
  );
};

export default Crew;
