import React from "react";

const PlanetNavLinks = ({ planets, onPlanetClick, activeIndex }) => {
  const handlePlanetClick = (index) => {
    onPlanetClick(index); // Call the onPlanetClick function provided by the parent component
  };

  return (
    <div className="planet-nav-links text-[16px] tracking-[2.36px] font-barlow-condensed text-light-blue md:tracking-[2.7px]">
      <ul className="flex gap-4 p-4 justify-center items-center">
        {/* Map through the planets array to render each planet link */}
        {planets.map((planet, index) => (
          <li key={index}>
            <button
              type="button"
              className={`border-white py-10 duration-200 hover:border-b-[3px] hover:border-opacity-50 ${index === activeIndex ? 'border-opacity-100 border-b-[3px]' : 'border-opacity-0 hover:border-white/50'}`}
              onClick={() => handlePlanetClick(index)}
            >
              {planet.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetNavLinks;
