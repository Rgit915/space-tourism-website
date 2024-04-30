import React from "react";

const DestinationListItem = ({planetData}) => {
  return (
    <div>
      <h2 className="planet-name text-[56px] font-bellefair uppercase">
        {planetData.name}
      </h2>

      <p className="description text-[15px] font-barlow text-light-blue leading-6">
        {planetData.description}
      </p>
      <hr className="w-[327px] h-[1px] opacity-25 bg-[#383B4B]" />
      <div className="text-light-blue uppercase flex flex-col py-4">
        <p className="distance text-[14px] font-barlow-condensed tracking-[2.36px]">
          {planetData.distance}
        </p>
        <span className="text-[28px] font-bellefair ">384,400 km</span>

        <p className="travel text-[14px] font-barlow-condensed tracking-[2.36px] mt-8">
          {planetData.travel}
        </p>
        <span className="text-[28px] font-bellefair">3 days</span>
      </div>
    </div>
  );
};

export default DestinationListItem;
