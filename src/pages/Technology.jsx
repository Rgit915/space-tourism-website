import { useState } from "react";

const Technology = ({data}) => {
  const technology = data.technology;

  const [activeIndex, setActiveIndex] = useState(0); // State to track active index

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index when a pagination number is clicked
  };

  return (
    <section className="technology flex flex-col items-center justify-center min-h-screen overflow-hidden lg:flex-row lg:justify-center lg:items-center">
      <div className="lg:flex lg:flex-col">
        <p className="title">
          <span className="opacity-20 font-bold mr-3"> 03 </span> space launch
          101
        </p>
        <div className="content flex flex-col gap-8 justify-center items-center my-20 lg:flex-row ">
          <img
            src={technology[activeIndex].images["landscape"]}
            className="w-full h-[170px] md:h-[310px] lg:order-last lg:h-[527px] lg:w-[515px]"
            alt={technology[activeIndex].name}
          />
          <div className="pagination-number space-x-4 w-[152px] h-[40px] md:w-[210px] md:h-[60px] lg:space-x-0 lg:space-y-4 lg:mb-16  ">
            {technology.map((item, index) => (
              <span
                key={index}
                className={`place-content-center w-10 h-10 rounded-full inline-block text-[16px] font-bellefair cursor-pointer border-[1px] border-opacity-25 lg:flex lg:flex-col lg:w-20 lg:h-20  ${
                  index === activeIndex
                    ? "bg-white text-black "
                    : "bg-transparent text-white border-white"
                }`}
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="description w-[327px] h-[220px] md:w-[458px] md:h-[140px] mb:mb-8">
            <p className="uppercase text-[14px] tracking-[2.36px] text-light-blue font-barlow-condensed md:text-[16px] md:tracking-[2.7px]">
              The terminology...
            </p>
            <span className="uppercase text-[24px] text-white font-bellefair md:text-[40px]lg:text-[56px]">
              {technology[activeIndex].name}
            </span>
            <p className="block text-[15px] leading-6 text-light-blue font-barlow md:text-[16px] md:leading-7 lg:text-[18px] lg:leading-8">
              {technology[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
