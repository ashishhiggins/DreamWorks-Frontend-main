import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg2.mp4";
import { Link } from "react-router-dom";

function PropertyForm() {
  const [propertyData, setPropertyData] = useState({});
  const [propertyId, setPropertyId] = useState(null);

  useEffect(() => {
    const storedPropertyId = localStorage.getItem("selectedPropertyId");
    if (storedPropertyId) {
        setPropertyId(storedPropertyId);
    }
  }, []);

  useEffect(() => {
    console.log("Property ID:", propertyId);

    if (propertyId) {
      const apiUrl = `http://13.126.238.255:8000/apis/property_detail/${propertyId}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setPropertyData(response.data);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to fetch branch data");
        });
    }
  }, [propertyId]);
console.log(propertyData);

return (
    <div className='bg-cover '>
      <video src={videobg} autoPlay muted loop id='video'/>
      <Navbar />
      <div className='flex justify-center'>
        <div className='ml-10 px-10 my-10 py-10 bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6' style={{
          backdropFilter: 'blur(10px)',
        }}>
          <div className="text-center my-5">
            <h1 className="text-4xl font-bold mb-5 text-white">Selected Property Details</h1>
            <div>
                  <div 
                  className={`m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}> 
                  <div className="text-white text-2xl">Property Number: {propertyData.pnumber}</div>
                  </div>

                  <div 
                  className={` m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-2xl">Property Type: {propertyData.ptype}</div>
                  </div>

                  <div 
                  className={` m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-2xl">Property Address: {propertyData.paddress}</div>
                  </div>

                  <div 
                  className={` m-5 rounded-2xl bg-white bg-opacity-20 p-5 flex space-x-10`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-2xl">Property Rent: {propertyData.rent}</div>
                  </div>
                </div>
       

          </div>
          <div className="text-center my-5">
            <h2 className="text-4xl font-bold mb-5 text-white">Client Details</h2>
            </div>
          <ul className="">
            {propertyData.clients && propertyData.clients.map((client) => (
              <li className='m-5 px-5' key={client.cnumber} >
                <div
                  className={`rounded-2xl bg-white bg-opacity-20 p-2 flex space-x-20`}
                  style={{backdropFilter: 'blur(10px)'}}>
                  <div className="text-white text-lg mx-10">{client.cnumber}</div>
                  <div className="text-white text-lg mx-10">{client.cname}</div>
                  <div className="text-white text-lg mx-10">{client.comment}</div>
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

export default PropertyForm;
