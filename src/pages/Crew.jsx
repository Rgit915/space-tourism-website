import { useState } from "react";
import crewData from "../data.json";
import { RxDot, RxDotFilled } from "react-icons/rx";

const Crew = () => {
  const crew = crewData.crew;

  const [activeCrew, setActiveCrew] = useState({
    name: crew[0].name,
    image: crew[0].images["png"],
    role: crew[0].role,
    bio: crew[0].bio,
    index: 0,
  }); // State to track active crew member

  const handleDotClick = (index) => {
    const selectedCrew = crew[index];

    setActiveCrew({
      name: selectedCrew.name,
      image: selectedCrew.images.png,
      role: selectedCrew.role,
      bio: selectedCrew.bio,
      index: index,
    }); // Update active crew member when dot is clicked
  };

  return (
    <section className="crew flex flex-col items-center justify-center ">
      <div className="md:mt-12">
        <p className="navlink font-barlow-condensed  tracking-[2.7px] uppercase md:text-[20px] md:tracking-[3.38px] ">
          <span className="opacity-20 font-bold mr-3"> 02 </span> meet your crew
        </p>
      </div>
      <div className="md:flex md:flex-col-reverse">
        <div className="crew-image">
          <img src={activeCrew.image} className="" alt={activeCrew.name} />
        </div>
        <hr className="md:hidden" />
        <div className="slider flex justify-center ">
          {crew.map((crew, index) =>
            index === activeCrew.index ? (
              <RxDotFilled
                key={index}
                onClick={() => handleDotClick(index)}
                className="active-dot"
              />
            ) : (
              <RxDot
                key={index}
                onClick={() => handleDotClick(index)}
                className="inactive-dot"
              />
            )
          )}
        </div>
        <div className="crew-description w-[327px] h-[212px] flex flex-col justify-center items-center">
          <p className="uppercase text-[16px] text-white font-bellefair opacity-30">
            {activeCrew.role}
          </p>
          <span className="uppercase text-[24px] text-white font-bellefair">
            {activeCrew.name}
          </span>
          <p className="text-[15px] font-barlow text-light-blue leading-6 p-2">
            {activeCrew.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Crew;
