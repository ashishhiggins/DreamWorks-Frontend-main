import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="analytics-body" id="analytics-body">
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[400px] mx-auto my-4 rounded-lg shadow-lg"
            src={house1}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            {/* <p className="text-[#00df9a] font-bold ">Add Data</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Register Staff, Clients, Owners, Property, Lease and Branch
            </h1>
            <div className="flex ">
            
         
              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/staff" className="">
                Staff Registration
                </Link>
              </button>
             

              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/client" className="">
                Client Registration
                </Link>
              </button>
            </div>
            <div className="flex ">
  
              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/owner" className="">
                Owner Registration
                </Link>
              </button>

              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/branch" className="">
                Branch Registration
                </Link>
              </button>
            </div>
            <div className="flex ">


              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/property" className="">
                Property Registration
                </Link>
              </button>


              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/lease" className="">
                Lease Creation
                </Link>
              </button>

              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/comments" className="">
                Add Comments
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col ">
            {/* <p className="text-[#00df9a] font-bold ">Add Data</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              View Staff and Property
            </h1>
            <div className="flex ">
              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/branch-view" className="">
                View Branch/Staff
                </Link>
              </button>
              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/property-view" className="">
                View Property
                </Link>
              </button>
              <button className="bg-black text-[#00df9a] w-1/3 rounded-md font-medium my-2 mx-2 py-3 hover:bg-[#00df9a] hover:text-black">
              <Link to="/lease-view" className="">
                View Lease
                </Link>
              </button>
            </div>
          </div>
          <img
            className="w-[400px] mx-auto my-4 rounded-lg shadow-lg"
            src={house2}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
