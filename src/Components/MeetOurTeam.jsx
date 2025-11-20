import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="  py-10 w-11/12 mx-auto">
      <div className=" text-center  capitalize py-5">
        <h1 className="font-semibold text-4xl">meet our team to expartes</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          hic?
        </h2>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <div className="rounded-xl">
            <div>
              <img
                src="/src/assets/img/514.png"
                alt=""
                className=" rounded-xl"
              />
            </div>
            <h1 className=" text-2xl font-semibold ">johan powell</h1>
            <h2>service support</h2>
          </div>
        </div>
        {/* 2 nd  */}
        <div>
          <div className="rounded-xl">
            <div>
              <img
                src="/src/assets/img/div.member-thumbnail-wrapper (1).png"
                alt=""
                className=" rounded-xl"
              />
            </div>
            <h1 className=" font-semibold  text-2xl">tom wilson</h1>
            <h2>service support</h2>
          </div>
        </div>
        {/* 3 rd  */}
        <div>
          <div className="rounded-xl">
            <div>
              <img
                src="/src/assets/img/div.member-thumbnail-wrapper (2).png"
                alt=""
                className=" rounded-xl"
              />
            </div>
            <h1 className=" font-semibold  text-2xl">samul palmar</h1>
            <h2>service support</h2>
          </div>
        </div>
        {/* 4 th  */}
        <div>
          <div className="rounded-xl">
            <div>
              <img
                src="/src/assets/img/div.member-thumbnail-wrapper.png"
                alt=""
                className=" rounded-xl"
              />
            </div>
            <h1 className="font-semibold  text-2xl">thams powell</h1>
            <h2>service support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
