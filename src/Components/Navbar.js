import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#1F2937] text-white">
      <div className="navbar mx-auto sm:px-6 lg:px-0 max-w-[1440px]">
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-2xl focus:outline-none">
          <IoMdMenu />
        </button>

        <div className="flex flex-1">
          <ul className={`menu menu-horizontal px-1 lg:flex hidden`}>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/master-price">Master Price</NavLink>
            </li>
            <li>
              <NavLink to="/custom-price">Custom Price</NavLink>
            </li>
            <li>
              <NavLink to="/calender">Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/report">Reports</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <IoNotificationsOutline className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ml-2 sm:ml-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1F2937] text-white rounded-md w-52">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="flex flex-col">
          <ul className={`px-1`}>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Master Price</a>
            </li>
            <li>
              <a>Custom Price</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
