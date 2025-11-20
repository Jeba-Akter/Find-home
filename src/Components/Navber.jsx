import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const Navber = () => {
  return (
    <div>
      <div className=" sm:px-10 navbar bg-black text-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>12345678091</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost capitalize font-bold text-2xl">
            Home
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-lg px-5">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="   flex gap-2 items-center text-xl">
            <h2>
              {" "}
              <FaPhone />
            </h2>
            <h1 className=" font-samibold">12345678091</h1>
            <h3>
              {" "}
              <IoMdContact />{" "}
            </h3>
          </div>
          <div className=" border-2 border-white rounded-full ml-3 p-2 ">
            Add Proparty
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
