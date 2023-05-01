import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";

function LeaseForm() {
  const [formData, setFormData] = useState({
    leaseid: '',
    cno: '',
    pno: '',
    mrent: '',
    paymentmethod: '',
    rdate: '',
    fdate: '',
    duration: '',
    deposit: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://13.126.238.255:8000/apis/lease/create/", formData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setFormData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='bg-cover '>
    <video src={videobg} autoPlay muted loop id='video'/>
<Navbar />
<div className='flex justify-center'>
<form className="ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6" onSubmit={handleSubmit} style={{
            backdropFilter: 'blur(10px)',
          }}>
  <div className="text-center my-5">
    <h1 className='text-4xl font-bold mb-5 text-white'>Lease Form</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Enter Lease Id' name='leaseid' value={formData.leaseid} onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Client Number' name='cno' value={formData.cno} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Property Number' name='pno' value={formData.pno} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Monthly Rent' name='mrent' value={formData.mrent} onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Payment Method' name='paymentmethod' value={formData.paymentmethod} onChange={handleChange} />
  </div>
  <div className='mb-4 flex justify-between'>
    <div className='flex '>
    <div className='flex flex-col'>
      <label className='text-white text-2xl'>Rent Start</label>
      <input className='border-2 border-gray-300 p-2 rounded-md mr-2' type='date' placeholder='Rent Start' name='rdate' value={formData.rdate} onChange={handleChange} />
</div>
 <div className='flex flex-col'>
    <label className='text-white text-2xl'>Rent Finish</label>
      <input className='border-2 border-gray-300 p-2 rounded-md mr-2' type='date' placeholder='Rent Finish' name='fdate' value={formData.fdate} onChange={handleChange} />
    </div>
</div>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Duration' name='duration' value={formData.duration} onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Deposit' name='deposit' value={formData.deposit} onChange={handleChange} />
  </div>
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
</form>
</div>
    <Footer/>
</div>
  );
}

export default LeaseForm;
