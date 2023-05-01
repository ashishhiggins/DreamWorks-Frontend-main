import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='membership'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Simple Membership</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 employee per 5 users</p>
                  <p className='py-2 border-b mx-8'>Monthly Sessions</p>
                  <p className='py-2 border-b mx-8'>No Preferances</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Silver Membership</h2>
              <p className='text-center text-4xl font-bold'>$249</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 employee per user</p>
                  <p className='py-2 border-b mx-8'>Weekly Meetings</p>
                  <p className='py-2 border-b mx-8'>Preference over community users</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Gold Membership</h2>
              <p className='text-center text-4xl font-bold'>$449</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>3 employees per user</p>
                  <p className='py-2 border-b mx-8'>Meetings whenever you want</p>
                  <p className='py-2 border-b mx-8'>Preference over all other users</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
