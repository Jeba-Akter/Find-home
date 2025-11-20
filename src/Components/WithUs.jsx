import React from "react";

const WithUs = () => {
  return (
    <div className="w-11/12 grid  lg:grid-cols-2 gap-5 bg-pink-50 py-10 px-5 my-10 mx-auto">
      <div className=" rounded-xl flex" >
        <img
          src="https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?s=612x612&w=0&k=20&c=Jaun3vYekdy6aBcqq5uDQp_neNp5jmdLZXZAqqhcjk8="
          alt="" className=" rounded-xl"
        />
      </div>
      <div className=" pt-5  ">
        <h1 className=" text-4xl text-end font-semibold ">
          why you should work with us
        </h1>
        <p className=" text-end py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Maiores voluptates dolore sunt soluta unde assumenda <br />
          iusto sapiente, aliquid veritatis!
        </p>
        <div className=" flex gap-5 justify-end">
          <div className="">
            <h1 className=" font-semibold text-2xl my-3">buy ore rent homes</h1>
            <h2 className=" font-normal text-sm">
              we sell your home at the best market <br />
              price and very quickly as well
            </h2>
          </div>
          {/* 2nd  */}
          <div className="">
            <h1 className=" font-semibold text-2xl my-3">
              trusted by thousands
            </h1>
            <h2 className=" font-normal text-sm">
              we offer you free consultancy <br />
              to get a loan for yournew home
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithUs;
