import React from "react";

const DestinationListItem = ({ planetData }) => {
  return (
    <div>
      <h2 className="planet-name text-[56px] font-bellefair uppercase md:text-[80px]">
        {planetData.name}
      </h2>

      <p className="description text-[15px] font-barlow text-light-blue leading-6 p-8 md:text-[16px] md:leading-7 md:p-12 md:mx-5">
        {planetData.description}
      </p>
      <div className="flex justify-center items-center">
        <hr className="w-[327px] h-[1px] opacity-25 bg-[#383B4B] md:w-[573px]" />
      </div>
      <div className="text-light-blue uppercase flex flex-col py-4 space-y-8 md:space-y-0 md:flex-row md:justify-around md:items-center ">
        <div>
          <p className="distance text-[14px] font-barlow-condensed tracking-[2.36px] ">
           Avg. Distance
          </p>
          <span className="text-[28px] font-bellefair">{planetData.distance}</span>
        </div>
        <div><p className="travel text-[14px] font-barlow-condensed tracking-[2.36px]">
           Est. travel time
        </p>
        <span className="text-[28px] font-bellefair">{planetData.travel}</span>
        </div>

      </div>
    </div>
  );
};

export default DestinationListItem;
