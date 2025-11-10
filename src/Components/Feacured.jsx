import React from "react";

const Feacured = () => {
  return (
    <div>
        <div className=" mt-10" >
            <h1 className=" py-2 text-center text-4xl  font-bold" >
             featured categorics
            </h1>
            <h2 className="  text-center text-sm" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nam.
            </h2>
        </div>
      <div className=" font-bold grid sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-10 justify-between m-20 " >
        {/* this is 1st card */}
        <div className=" w-44 h-56 shadow-2xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>
      {/* this is 2nd card */}
      <div className=" w-44 h-56 shadow-2xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>
      {/* 3rd  */}
      <div className=" w-44 h-56 shadow-xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-2xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>
      {/* 4th */}
      <div className=" w-44 h-56 shadow-xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-2xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>
      {/* 5th */}
      <div className=" w-44 h-56 shadow-xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-2xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>
      {/* 6th */}
      <div className=" w-44 h-56 shadow-xl">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" py-10 text-center  rounded mx-auto">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-2xl">town house</h1>
          <a className="text-sm font-normal"> 2 poparties</a>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Feacured;
