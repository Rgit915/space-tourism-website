import techTalk from "../assets/technology/image-launch-vehicle-landscape.jpg";

const Technology = () => {
  return (
    <section className="technology flex flex-col items-center justify-center mt-8 space-y-4">
      <p className="navlink font-barlow-condensed  tracking-[2.7px] uppercase ">
        <span className="opacity-20 font-bold mr-3"> 03 </span> space launch 101
      </p>
      <img src={techTalk} className="" alt="launch" />
      <div className="pagination-number space-x-4">
        <span className="place-content-center w-10 h-10 rounded-full bg-white border-white border-[1px] inline-block text-black  text-[16px] font-bellefair cursor-pointer">
          1
        </span>
        <span className="place-content-center w-10 h-10 rounded-full border-white border-[1px] inline-block text-white  text-[16px] font-bellefair cursor-pointer">
          2
        </span>
        <span className="place-content-center w-10 h-10 rounded-full border-white border-[1px] inline-block text-white  text-[16px] font-bellefair cursor-pointer">
          3
        </span>
      </div>
      <div className="description">
        <p className="uppercase text-[14px] tracking-[2.36px] text-light-blue font-barlow-condensed">The terminology...</p>
        <span className="uppercase text-[24px] text-white font-bellefair">Launch vehicle</span>
        <p className="block text-[15px] leading-6 text-light-blue font-barlow">A launch vehicle or carrier rocket is a
        rocket-propelled vehicle used to carry a payload from Earth's surface to
        space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the
        most powerful in operation. Standing 150 metres tall, it's quite an
        awe-inspiring sight on the launch pad!</p>
      </div>
    </section>
  );
};

export default Technology;
