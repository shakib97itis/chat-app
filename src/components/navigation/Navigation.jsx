import React from "react";
import { MdOutlineHome } from "react-icons/md";
import NavigationItem from "./NavigationItem";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";

const Navigation = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-primary py-[20px]">
      {/* PROFILE IMAGE */}
      <div className="mx-[10px] sm:mx-[25px] mb-[10px] h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] overflow-hidden rounded-full">
        <img
          className="h-full w-full object-cover"
          src="/public/profile-img/profile-6.png"
          alt="Some alt text"
        />
      </div>

      {/* USER NAME */}
      <div className="text-center font-tertiary text-lg sm:text-2xl font-bold text-neutral-01 mx-[5px] mb-[10px]">
        John Doe
      </div>

      {/* NAVIGATION ITEMS */}
      <div className="w-full sm:ps-[20px]">
        <NavigationItem NavIcon={MdOutlineHome} />
        <NavigationItem NavIcon={LuMessageCircleMore} />
        <NavigationItem NavIcon={MdNotifications} />
        <NavigationItem NavIcon={IoMdSettings} />
      </div>

      {/* LOGOUT */}
      <div className="mt-auto">
        <div className="group cursor-pointer text-neutral-01">
          <ImExit className="text-[32px] sm:text-[46px]" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
