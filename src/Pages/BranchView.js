import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";
import { Link } from "react-router-dom";

function BranchForm() {
  const [branchData, setBranchData] = useState([]);

// Get all branch ids and addresses from get api here 
const apiUrl = "http://13.126.238.255:8000/apis/branch_list";
  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
   
        const receivedData = data;
        setBranchData(receivedData);
      })
      .catch((error) => console.error(error));
  }, []);




// storing and redirecting to the branch selected
const handleClick = (bid) => {
      window.localStorage.setItem("selectedBranchId", bid);
      window.dispatchEvent(new Event("storage")); 
      window.location.href = "/staff-view";
};



  return (
    <div className='bg-cover '>
    <video src={videobg} autoPlay muted loop id='video'/>
<Navbar />
<div className='flex justify-center'>
<div className='ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6' style={{
            backdropFilter: 'blur(10px)',
          }}>
<div className="text-center my-5">
    <h1 className="text-4xl font-bold mb-5 text-white">Branch List</h1>
</div>
<ul className="">
  {branchData.map((branch) => (
    <li className='m-5 p-5 hover:cursor-pointer' key={branch.id} onClick={() => handleClick(branch.bnumber)}>
    <div
      className={`rounded-2xl bg-white bg-opacity-20 p-10 flex space-x-20`}
      style={{backdropFilter: 'blur(10px)'}}>
      <div className="text-white text-2xl">{branch.bnumber}</div>
      <div className="text-white text-2xl">{branch.baddress}</div>
      <div className="text-white text-2xl">{branch.city}</div>
    </div>
    </li>
    
  ))}
</ul>

</div>
</div>
    <Footer />
    </div>
  );
}

export default BranchForm;
