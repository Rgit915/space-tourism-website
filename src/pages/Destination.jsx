import PlanetNavLinks from "../components/PlanetNavLinks";
import { useState } from "react";
import DestinationListItem from "../components/DestinationListItem";

const Destination = ({ data }) => {
  const planets = data.destinations;

  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex with 0

  const handlePlanetClick = (index) => {
    // Update activeIndex when a planet link is clicked
    setActiveIndex(index);
  };

  const planetData = planets[activeIndex]; // Get planet data based on activeIndex

  return (
    <section className="planet-container flex flex-col items-center justify-center min-h-screen space-y-4 ">
      {/* Render the planet data based on the selected planet */}
      <p className="title mt-6">
        <span className="opacity-20 font-bold mr-3 md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
          01
        </span>
        Pick your destination
      </p>
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="planet-img bg-white lg:mr-12">
          <img
            src={planetData.images.png}
            className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] "
            alt={planetData.name}
          />
        </div>

        <div className="destination-description lg:w-[445px] lg:h-[472px] lg:mt-8">
          {/* Render PlanetNavLinks passing planets array, activeIndex, and handlePlanetClick function */}
          <nav className="planet-sublinks">
            <PlanetNavLinks
              planets={planets}
              activeIndex={activeIndex}
              onPlanetClick={handlePlanetClick}
            />
          </nav>

          {/* Render DestinationListItem passing planetData */}
          <DestinationListItem planetData={planetData} />
        </div>
      </div>
    </section>
  );
};

export default Destination;
