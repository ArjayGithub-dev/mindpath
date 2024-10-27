import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Cog6ToothIcon, UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid"; 
import { Sidebar, AdminList } from '../components';

const Administrators = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false); // Initialize state for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (

    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white">
          {/* Title */}
          <h1 className="font-poppins text-[24px] text-[#757575] font-light"></h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none" onClick={toggleDropdown}>
              <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link to="/Profile">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    My Profile
                  </a>
                </Link>
                <Link to="/Settings">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </a>
                </Link>
                <Link to="/LoginPage">
                  <a className="flex items-center px-4 py-2 hover:bg-gray-100 font-poppins">
                    <PowerIcon className="h-5 w-5 mr-2" />
                    Logout
                  </a>
                </Link>
              </div>
            )}
          </div>
        </header>
        <AdminList />
      </div>
    </div>
  );
};

export default Administrators;

