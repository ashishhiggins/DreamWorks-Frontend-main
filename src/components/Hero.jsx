import React from 'react';
import Typed from 'react-typed';
import videobg from "../assets/herobg.mp4";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div className='text-white' >
    <video src={videobg} autoPlay muted loop id='video'/>

    {/* <video autoPlay mute loop id='video'>
      <source src={videobg} type='video/mp4'/>
    </video> */}
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Find your Dream Home.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Sell, Rent, Buy your dream
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Home', 'Flat', 'House']}
            typeSpeed={150}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>By taking an intermediate role between owners who wish to rent out their furnished property and clients of DreamHome who require to rent furnished property for a fixed period.</p> 
      </div>
    </div>
  );
};

export default Hero;
