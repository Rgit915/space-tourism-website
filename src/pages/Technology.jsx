import { useState } from "react";
import techTalk from "../assets/technology/image-launch-vehicle-landscape.jpg";
import data from "../data.json";

const Technology = () => {
  const technology = data.technology;

  const [activeIndex, setActiveIndex] = useState(0); // State to track active index

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index when a pagination number is clicked
  };

  return (
    <section className="technology flex flex-col items-center justify-center mt-8 space-y-4">
      <p className="navlink font-barlow-condensed tracking-[2.7px] uppercase">
        <span className="opacity-20 font-bold mr-3"> 03 </span> space launch 101
      </p>
      <img src={techTalk} className="" alt="launch" />
      <div className="pagination-number space-x-4">
        {technology.map((item, index) => (
          <span
            key={index}
            className={`place-content-center w-10 h-10 rounded-full inline-block text-[16px] font-bellefair cursor-pointer border-[1px] border-opacity-25 ${
              index === activeIndex ? "bg-white text-black " : "bg-transparent text-white border-white"
            }`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <div className="description">
        <p className="uppercase text-[14px] tracking-[2.36px] text-light-blue font-barlow-condensed">The terminology...</p>
        <span className="uppercase text-[24px] text-white font-bellefair">{technology[activeIndex].name}</span>
        <p className="block text-[15px] leading-6 text-light-blue font-barlow">{technology[activeIndex].description}</p>
      </div>
    </section>
  );
};

export default Technology;
