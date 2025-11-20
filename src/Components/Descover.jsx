import React from "react";

const Descover = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" py-5">
        <h1 className=" text-4xl py-2 font-bold">discover our best deals</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, modi?
        </h2>
      </div>
      <div className="  mx-auto gap-10 grid  md:grid-cols-2  lg:grid-cols-3">
        <div className="card bg-base-100 w- shadow-sm">
          <figure>
            <img src="/src/assets/img/discover1.png" alt="Shoes" />
          </figure>
          <div className="card-bod">
            <h2 className="card-title capitalize">kyepar pool apartment</h2>
            <div className=" border-b-2 pb-5 pt-2 flex items-center gap-2">
              <div className=" text-4xl">
                <img src="/src/assets/img/location.png" alt="" className=" " />
              </div>
              <p>120 bloomingdeal ave</p>
            </div>
            <div className="py-5 items-center flex justify-between">
              <div className=" flex gap-5">
                <div className="flex gap-5">
                  <div className=" text-2xl">
                    <img src="/src/assets/img/bade.png" alt="" />
                  </div>
                  <a>2</a>
                </div>
                <div className="flex gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/bath.png" alt="" />
                  </div>
                  <a>1</a>
                </div>
                <div className="flex  gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/Vector (3).png" alt="" />
                  </div>
                  <a>7</a>
                </div>
              </div>
              <h1 className=" text-red-500 font-samibold text-2xl">$280,000</h1>
            </div>
          </div>
        </div>
        {/* 2nd  */}
        <div className="card bg-base-100 w- shadow-sm">
          <figure>
            <img src="/src/assets/img/discover2.png" alt="Shoes" />
          </figure>
          <div className="card-bod">
            <h2 className="card-title capitalize">kyepar pool apartment</h2>
            <div className=" border-b-2 pb-5 pt-2 flex items-center gap-2">
              <div className=" text-4xl">
                <img src="/src/assets/img/location.png" alt="" className=" " />
              </div>
              <p>120 bloomingdeal ave</p>
            </div>
            <div className="py-5 items-center flex justify-between">
              <div className=" flex gap-5">
                <div className="flex gap-5">
                  <div className=" text-2xl">
                    <img src="/src/assets/img/bade.png" alt="" />
                  </div>
                  <a>3</a>
                </div>
                <div className="flex gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/bath.png" alt="" />
                  </div>
                  <a>1</a>
                </div>
                <div className="flex  gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/Vector (3).png" alt="" />
                  </div>
                  <a>5</a>
                </div>
              </div>
              <h1 className=" text-red-500 font-samibold text-2xl">$280,000</h1>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="card bg-base-100 w- shadow-sm">
          <figure>
            <img src="/src/assets/img/discover3.png" alt="" />
          </figure>
          <div className="card-bod">
            <h2 className="card-title capitalize">kyepar pool apartment</h2>
            <div className=" border-b-2 pb-5 pt-2 flex items-center gap-2">
              <div className=" text-4xl">
                <img src="/src/assets/img/location.png" alt="" className=" " />
              </div>
              <p>120 bloomingdeal ave</p>
            </div>
            <div className="py-5 items-center flex justify-between">
              <div className=" flex gap-5">
                <div className="flex gap-5">
                  <div className=" text-2xl">
                    <img src="/src/assets/img/bade.png" alt="" />
                  </div>
                  <a>4</a>
                </div>
                <div className="flex gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/bath.png" alt="" />
                  </div>
                  <a>5</a>
                </div>
                <div className="flex  gap-5">
                  <div className=" text-xl">
                    <img src="/src/assets/img/Vector (3).png" alt="" />
                  </div>
                  <a>3</a>
                </div>
              </div>
              <h1 className=" text-red-500 font-samibold text-2xl">$280,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descover;
