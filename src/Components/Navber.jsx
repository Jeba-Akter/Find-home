import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const Navber = () => {
  return (
    <div>
      <div className=" px-10 navbar bg-black text-white shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>home</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
          <a className="btn btn-ghost capitalize font-bold text-2xl">just home</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-lg px-5">
         
            <li>
              <details>
                <summary>home</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>lestings</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
             <li>
              <details>
                <summary>members</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
             <li>
              <details>
                <summary>blogs</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
             <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
             <li>
              
                <a>contacts</a>
                
              
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
            <div className=" flex gap-2 items-center text-xl" >
                <h2> <FaPhone /></h2>
            <h1 className=" font-samibold">12345678091</h1>
            <h3> <IoMdContact /> </h3>
            </div>
            <div className=" border-2 border-white rounded-full ml-3 p-2 " >
                Add Proparty
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;

