import React from 'react'

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 text-center md:min-h-screen md:mx-12">
    <div className='my-12 text-light-blue flex flex-col md:gap-8' >
      <p className='text-[16px] tracking-[2.7px] font-barlow-condensed uppercase md:text-[20px] md:tracking-[3.38px]'>So, you want to travel to</p>
       <h1 className='text-[80px] uppercase text-white font-bellefair md:text-[150px] leading-[150px]'>Space</h1>
      <p className='text-[15px] leading-[25px] font-barlow md:text-[16px] md:leading-[28px] '>
        Let’s face it; if you want to go
      to space, you might as well genuinely go to outer space and not
      hover kind of on the edge of it. Well sit back, and relax because
      we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div className='flex justify-center items-center'><button type='button' className='text-dark-blueish text-[20px] tracking-[1.25px] font-bellefair uppercase rounded-full w-[150px] h-[150px] bg-white'>Explore</button></div>
  </section>

  )
}

export default Home