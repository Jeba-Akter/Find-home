import React from "react";

const Banner = () => {
  return (
    <div className=" ">
      <div
        className="  h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032)",
        }}
      >
        <div className="  grid-cols-1 font-bold text-gray-800 pt-24 p-5  ">
          <h1 className=" w-64 text-center  text-lg border-2 border-gray-600 capitalize g p-2">
            lets us guided your home
          </h1>
          <h2 className=" text-5xl capitalize mt-2">find your <a className="text-orange-500">dream</a> home</h2>
          <h3 className=" text-gray-500 py-2 " >
            from as low as $10 per 1 day with limited time offer discounts
          </h3>
          <div className="flex py-6 gap-5">
            <h1 className="  border-b border-gray-600 ">Sale</h1>
            <h1>Rent</h1>
          </div>
          <div className=" w-9/12 rounded-xl p-2 bg-white justify-between flex">
          
            <div className=" bg-white font-semibold text-black">
              <h1 className="text-gray-600">keyyword</h1>
              <h1 className="text-black">Enter keyyword</h1>
            </div>
            <div className=" bg-white font-semibold text-black">
              <h1 className="text-gray-600">type</h1>
              <h1 className="text-black">all type</h1>
            </div>
            <div>
                <input type="text" placeholder="Type here" className="input" />
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Banner;
