import React from "react";

const ParfactHome = () => {
  return (
    <div className=" capitalize">
      <div className=" text-center capitalize font-bold my-10">
        <h1 className="text-4xl">how it works ? find a parfact home</h1>
        <h2 className="">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          corporis.
        </h2>
      </div>
      <div className=" w-11/12 mx-auto justify-between grid font-bold  lg:grid-cols-3 ">
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" bg-yellow-400 text-center px-5 rounded mx-auto py-5">
            <img src="/src/assets/img/Icon (1).png" alt="" />
          </div>
          <h1 className="text-2xl">find a real estate</h1>
          <a className="text-sm font-normal">
            {" "}
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Maiores, inventore.
          </a>
        </div>
        {/* 2nd card  */}
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" bg-yellow-400 text-center px-5 rounded mx-auto py-5">
            <img src="/src/assets/img/Icon (3).png" alt="" />
          </div>
          <h1 className=" text-2xl">find a real estate</h1>
          <a className="text-sm font-normal">
            {" "}
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Maiores, inventore.
          </a>
        </div>
        {/* 3rd card  */}
        <div className="captilize grid grid-cols-1 text-center ">
          <div className=" bg-yellow-400 text-center px-5 rounded mx-auto py-5">
            <img src="/src/assets/img/Icon.png" alt="" />
          </div>
          <h1 className="text-2xl">find a real estate</h1>
          <a className="text-sm font-normal">
            {" "}
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Maiores, inventore.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParfactHome;
