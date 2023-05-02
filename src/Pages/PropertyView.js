
import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";

function BranchForm() {
  const [propertyFilter, setpropertyFilter] = useState({});
  const [propertyData, setpropertyData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://13.126.238.255:8000/apis/property_search/', propertyFilter);
      setpropertyData(response.data);
      // console.log(propertyData);
      
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch data from server');
    }
  };

  const handleChange = (event) => {
    setpropertyFilter({ ...propertyFilter, [event.target.name]: event.target.value });
  };


  const handleClick = (pid) => {
    window.localStorage.setItem("selectedPropertyId", pid);
    window.dispatchEvent(new Event("storage")); 
    window.location.href = "/property-detail";
};


  return (
    <div className='bg-cover '>
      <video src={videobg} autoPlay muted loop id='video'/>
      <Navbar />
      <div className=' justify-center'>
        <form className="ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6" onSubmit={handleSubmit} style={{ backdropFilter: 'blur(10px)' }}>
          <div className="text-center my-5">
            <h1 className='text-4xl font-bold mb-5 text-white'>Filter Property Search</h1>
          </div>

          <div className='mb-4'>
            <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text' placeholder='Rooms' name='rooms' onChange={handleChange} />
            <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text' placeholder='Type' name='ptype' onChange={handleChange} />
          </div>

          <div className='text-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
          </div>
        </form>

        <ul className="">
          {propertyData?.map((node) => {
            return (
              <li className='m-5 p-5 hover:cursor-pointer' key={node.pnumber} onClick={() => handleClick(node.pnumber)}>
    <div
      className={`rounded-2xl bg-white bg-opacity-20 p-10 flex space-x-20`}
      style={{backdropFilter: 'blur(10px)'}}>
       <div className="text-white text-2xl">{node.pnumber}</div>
       <div className="text-white text-2xl">{node.ptype}</div>
       <div className="text-white text-2xl">{node.rent}</div>
       <div className="text-white text-2xl">{node.address}</div>
       <div className="text-white text-2xl">Rooms: {node.rooms}</div>
       {/* <div className="text-white text-2xl">Is Available: {node.isavailable}</div> */}
                </div>
              </li>
            );
          })}
        </ul>





      </div>
      <Footer />
    </div>
  );
}

export default BranchForm;
