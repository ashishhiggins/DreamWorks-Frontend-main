import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";

function CommentForm() {
  const [commentData, setCommentData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(commentData);
    axios
      .put("http://13.126.238.255:8000/apis/property_detail/comments/create/", commentData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setCommentData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleChange = (event) => {
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
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
    <h1 className='text-4xl font-bold mb-5 text-white'>Comments Creation</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text3' placeholder='Property Number' name='pno' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text' placeholder='Client Number' name='cno' onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2 ' type='text' placeholder='Comments' name='comments' onChange={handleChange} />
  </div>

 
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
</form>
</div>
    <Footer />
    </div>
  );
}

export default CommentForm;
