import React from "react";
import { MdOutlineHome } from "react-icons/md";
// import Icons from "../../Icons";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      {/* NAVIGATION BAR */}
      <div className="w-[186px] bg-primary pl-[25px]">
        <div className="mb-[20px]">
          <img src="/public/profile-img/profile-6.png" alt="" />
        </div>
        <div className="">
          <div className="relative flex py-[20px] rounded-s-3xl items-center justify-center bg-neutral-01">
            {/* Icon */}
            <div>
              <MdOutlineHome className="text-6xl" />
            </div>
            {/* bar */}
            <div className="absolute h-full w-[8px] rounded-s-2xl bg-secondary right-0"></div>
          </div>
        </div>
      </div>
      {/* Dashboard content */}
      <main></main>
    </div>
  );
};

export default Home;
