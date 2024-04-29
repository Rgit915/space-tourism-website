import React from 'react'

const Home = () => {
  return (
    <section className="home flex flex-col justify-center items-center space-y-8 text-center min-h-screen md:mt-14 md:px-12 lg:flex lg:flex-row py-10 px-6 overflow-hidden">
    <div className='my-12 text-light-blue flex flex-col items-center md:gap-8 md:mx-12 lg:text-justify lg:mx-0 xl:flex xl:flex-col xl:justify-center xl:place-items-start' >
      <p className='text-[16px] tracking-[2.7px] font-barlow-condensed uppercase md:text-[20px] md:tracking-[3.38px]'>So, you want to travel to</p>
       <h1 className='text-[80px] uppercase text-white font-bellefair md:text-[150px] leading-[150px]'>Space</h1>
      <p className='text-[15px] leading-[25px] font-barlow md:text-[16px] md:leading-7 md:px-8 md:mx-4 md:mb-8 xl:p-0'>
        Let’s face it; if you want to go
      to space, you might as well genuinely go to outer space and not
      hover kind of on the edge of it. Well sit back, and relax because
      we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div className='flex justify-center items-center'><button type='button' className='text-dark-blueish text-[20px] tracking-[1.25px] font-bellefair uppercase rounded-full w-[150px] h-[150px] bg-white lg:w-[274px] lg:h-[274px]'>Explore</button></div>
  </section>

  )
}

export default Home