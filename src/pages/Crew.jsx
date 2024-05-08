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
    <section className="crew flex flex-col items-center justify-center min-h-screen">
      <div className="md:mt-12">
        <p className="title">
          <span className="opacity-20 font-bold mr-3"> 02 </span> meet your crew
        </p>
      </div>
      <div className="md:flex md:flex-col-reverse  lg:flex-row-reverse lg:items-center">
        <div className="crew-image">
          <img
            src={activeCrew.image}
            className="w-[327px] h-[223px] md:w-[456.36px] md:h-[572px] xl:w-[568.07px] xl:h-[712px]"
            alt={activeCrew.name}
          />
        </div>
        <hr className="md:hidden" />
        <div className="flex flex-col md:flex-col-reverse justify-center items-center lg:my-20 ">
          <div className="slider flex mb-2 lg:mt-24">
            {crew.map((crew, index) =>
              index === activeCrew.index ? (
                <RxDotFilled
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="active-dot lg:w-[24px] lg:h-[24px]"
                />
              ) : (
                <RxDot
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="inactive-dot lg:w-[24px] lg:h-[24px]"
                />
              )
            )}
          </div>
          <div className="crew-description w-[327px] h-[212px] flex flex-col justify-center items-center md:w-[458px] md:h-[232px]  lg:text-left lg:mb-28">
            <p className="uppercase text-[16px] text-white font-bellefair opacity-30 md:text-[24px] lg:text-[32px] lg:text-left">
              {activeCrew.role}
            </p>
            <span className="uppercase text-[24px] text-white font-bellefair md:text-[40px] lg:text-[56px] ">
              {activeCrew.name}
            </span>
            <p className="text-[15px] font-barlow text-light-blue leading-6 md:text-[16px] lg:text-[18px] lg:leading-8">
              {activeCrew.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
