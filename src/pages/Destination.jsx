import PlanetNavLinks from "../components/PlanetNavLinks";
import moonImage from "../assets/destination/image-moon.png"

const Destination = () => {
  return (
    <div className="planet-container">
      <p className="navlink"> 01 Pick your destination</p>
      <img src={moonImage} />

      <nav className="planet-sublinks">
        <PlanetNavLinks />
      </nav>
      <h2 className="planet-name">Moon</h2>

      <p className="description">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <p className="distance">
        Avg. distance <span>384,400 km</span>
      </p>
      <p className="travel">
        Est. travel time<span>3 days</span>
      </p>
    </div>
  );
};

export default Destination;
