import React from "react";

const FindsPopertis = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-10">
        <h1 className=" text-4xl font-bold py-2">finds your propertis</h1>
        <h2 className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, earum.
        </h2>
        <div className=" flex sm:flex-none gap-5"> 
          <div
            className="w-96 bg-cover h-[550px] relative position-absolute "
            style={{
              backgroundImage: "url(https://i.ibb.co.com/qYsVBrKc/h61-jpg.png)",
            }}
          >
            <div className=" bottom-5 right-16   absolute text-center ">
                <div className="py-3 backdrop-blur-lg text-gray-100 shadow-xl px-20 bg-transparent">
                  <h1 className=" font-normal text-sm">8 proparties</h1>
                  <h2 className=" capitalize font-bold text-xl">new york</h2>
                </div>
              </div>
          </div>
          <div className=" gap-5 grid  grid-cols-2 ">
            {/* 1st  */}
            <div
              className="w-96 bg-cover h-[265px] relative "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/5b0vfWr/h64-jpg.png)",
              }}
            >
              <div className=" bottom-5 right-16   absolute text-center ">
                <div className="py-3 backdrop-blur-lg text-gray-100 shadow-xl px-20 bg-transparent">
                  <h1 className=" font-normal text-sm">8 proparties</h1>
                  <h2 className=" capitalize font-bold text-xl">new york</h2>
                </div>
              </div>
            </div>
            {/* 2nd  */}
             <div
              className="w-96 bg-cover h-[265px]  relative "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/3ycd5C8C/h62-jpg.png)",
              }}
            >
              <div className=" bottom-5 right-16   absolute text-center ">
                <div className="py-3 backdrop-blur-lg text-gray-100 shadow-xl px-20 bg-transparent">
                  <h1 className=" font-normal text-sm">8 proparties</h1>
                  <h2 className=" capitalize font-bold text-xl">new york</h2>
                </div>
              </div>
            </div>
            {/* 3rd  */}
             <div
              className="w-96 bg-cover h-[265px] relative "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/RGLBgxgP/h63-jpg.png)",
              }}
            >
              <div className=" bottom-5 right-16   absolute text-center ">
                <div className="py-3 backdrop-blur-lg text-gray-100 shadow-xl px-20 bg-transparent">
                  <h1 className=" font-normal text-sm">8 proparties</h1>
                  <h2 className=" capitalize font-bold text-xl">new york</h2>
                </div>
              </div>
            </div>
            {/* 4th  */}
            <div
              className="w-96 bg-cover h-[265px] relative "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/TxYM5Rpz/h65-jpg.png)",
              }}
            >
              <div className=" bottom-5 right-16   absolute text-center ">
                <div className="py-3 backdrop-blur-lg text-gray-100 shadow-xl px-20 bg-transparent">
                  <h1 className=" font-normal text-sm">8 proparties</h1>
                  <h2 className=" capitalize font-bold text-xl">new york</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindsPopertis;
