import PlanetNavLinks from "../components/PlanetNavLinks";
import moonImage from "../assets/destination/image-moon.png"

const Destination = () => {
  return (
    <section className="planet-container flex flex-col items-center justify-center mt-8 space-y-4">
      <p className="navlink font-barlow-condensed  tracking-[2.7px] uppercase "> <span className="opacity-20 font-bold mr-3"> 01 </span> Pick your destination</p>
      <img src={moonImage} className="w-[170px] h-[170px] "/>

      <nav className="planet-sublinks">
        <PlanetNavLinks />
      </nav>
      <h2 className="planet-name text-[56px] font-bellefair uppercase">Moon</h2>

      <p className="description text-[15px] font-barlow text-light-blue leading-6">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="w-[327px] bg-[#383B4B]"/>
      <div className="text-light-blue uppercase flex flex-col py-4">
        <p className="distance text-[14px] font-barlow-condensed tracking-[2.36px]">
        Avg. distance </p><span className="text-[28px] font-bellefair ">384,400 km</span>

      <p className="travel text-[14px] font-barlow-condensed tracking-[2.36px] mt-8">
        Est. travel time</p><span className="text-[28px] font-bellefair">3 days</span>

      </div>

    </section>
  );
};

export default Destination;
