
import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";

function LeaseForm() {
  const [leaseFilter, setleaseFilter] = useState({});
  const [leaseData, setleaseData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://13.126.238.255:8000/apis/lease_filter/', leaseFilter);
      setleaseData(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch data from server');
    }
  };

  const handleChange = (event) => {
    setleaseFilter({ ...leaseFilter, [event.target.name]: event.target.value });
  };




  return (
    <div className='bg-cover '>
      <video src={videobg} autoPlay muted loop id='video'/>
      <Navbar />
      <div className=' justify-center'>
        <form className="ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6" onSubmit={handleSubmit} style={{ backdropFilter: 'blur(10px)' }}>
          <div className="text-center my-5">
            <h1 className='text-4xl font-bold mb-5 text-white'>Filter Lease Search</h1>
          </div>

          <div className='mb-4'>
            <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text' placeholder='Lease ID' name='leaseid' onChange={handleChange} />
            <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text' placeholder='Client ID' name='cno' onChange={handleChange} />
            <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text' placeholder='Property ID' name='pno' onChange={handleChange} />
          </div>

          <div className='text-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
          </div>
        </form>

        <ul className="">
          {leaseData?.map((node) => {
            return (
              <li className='m-5 p-5 hover:cursor-pointer' key={node.leaseid} >
    <div
      className={`rounded-2xl bg-white bg-opacity-20 p-10 flex space-x-20`}
      style={{backdropFilter: 'blur(10px)'}}>
       <div className="text-white text-2xl">{node.leaseid}</div>
       <div className="text-white text-2xl">{node.pno}</div>
       <div className="text-white text-2xl">{node.cno}</div>
       <div className="text-white text-2xl">{node.mrent}</div>
       <div className="text-white text-2xl">{node.deposit}</div>
       <div className="text-white text-2xl">{node.duration}</div>
       <div className="text-white text-2xl">{node.paymentmethod}</div>
       <div className="text-white text-2xl">{node.rdate}</div>
       <div className="text-white text-2xl">{node.fdate}</div>
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

export default LeaseForm;
