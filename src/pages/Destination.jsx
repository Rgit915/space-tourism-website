import PlanetNavLinks from "../components/PlanetNavLinks";
import destinationData from "../data.json";
import { useState } from "react";
import DestinationListItem from "../components/DestinationListItem";

const Destination = () => {
  const planets = destinationData.destinations;

  const [planetData, setPlanetData] = useState({
    name: planets[0].name,
    image: planets[0].images.png,
    description: planets[0].description,
    distance: planets[0].distance,
    travel: planets[0].travel,
  });

  const handlePlanetClick = (index) => {
    // Update planetData state when a planet link is clicked
    const selectedPlanet = planets[index];
    setPlanetData({
      name: selectedPlanet.name,
      image: selectedPlanet.images.png,
      description: selectedPlanet.description,
      distance: selectedPlanet.distance,
      travel: selectedPlanet.travel,
    });
  };

  return (
    <section className="planet-container flex flex-col items-center justify-center mt-8 space-y-4 ">
      {/* Render the planet data based on the selected planet */}
      <p className="font-barlow-condensed  tracking-[2.7px] uppercase mt-6">
        <span className="opacity-20 font-bold mr-3 md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
          01
        </span>
        Pick your destination
      </p>
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="planet-img bg-white lg:mr-12">
          <img
            src={planetData.image}
            className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] "
            alt={planetData.name}
          />
        </div>

        <div className="destination-description lg:w-[445px] lg:h-[472px] lg:mt-8">
          {/* Render PlanetNavLinks passing planets array and handlePlanetClick function */}
          <nav className="planet-sublinks">
            <PlanetNavLinks
              planets={planets}
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
