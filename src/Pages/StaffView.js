import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";
import { Link } from "react-router-dom";

function BranchForm() {
  const [branchData, setBranchData] = useState({});
  const [branchId, setBranchId] = useState(null);

  useEffect(() => {
    const storedBranchId = localStorage.getItem("selectedBranchId");
    if (storedBranchId) {
      setBranchId(storedBranchId);
    }
  }, []);

  useEffect(() => {
    console.log("Branch ID:", branchId);

    if (branchId) {
      const apiUrl = `http://13.126.238.255:8000/apis/branch/${branchId}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setBranchData(response.data);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to fetch branch data");
        });
    }
  }, [branchId]);
console.log(branchData);
  return (
    <div className='bg-cover '>
      <video src={videobg} autoPlay muted loop id='video'/>
      <Navbar />
      <div className='flex justify-center'>
        <div className='ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6' style={{
          backdropFilter: 'blur(10px)',
        }}>
          <div className="text-center my-5">
            <h1 className="text-4xl font-bold mb-5 text-white">Selected Branch Details</h1>
            <div>
                  <div 
                  className={`m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}> 
                  <div className="text-white text-2xl">Branch Number: {branchData.branch_no}</div>
                  </div>

                  <div 
                  className={` m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-2xl">Branch Address: {branchData.branch_address}</div>
                  </div>
                  <div 
                  className={` m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-2xl">Mobile Number: {branchData.mobile1} , {branchData.mobile2} ,  {branchData.mobile3}</div>
                  </div>
                </div>
       

          </div>
          <div className="text-center my-5">
            <h2 className="text-4xl font-bold mb-5 text-white">Staff Details</h2>
            </div>
          <ul className="">
            {branchData.staff && branchData.staff.map((staff) => (
              <li className='m-5 px-5' key={staff.staff_no} >
                <div
                  className={`rounded-2xl bg-white bg-opacity-20 p-2 flex space-x-20`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-lg mx-10">{staff.staff_no}</div>
                  <div className="text-white text-lg mx-10">{staff.staff_name}</div>
                  <div className="text-white text-lg mx-10">{staff.position}</div>
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
