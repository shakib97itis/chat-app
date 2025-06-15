import NavigationItem from "./NavigationItem";
import { MdOutlineHome } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";

const Navigation = () => {
  /**
   * TODO: write navigation logic here.
   * TODO: add logout logic later.
   */
  return (
    <div className="flex flex-col items-center rounded-2xl bg-primary py-[20px]">
      {/* PROFILE IMAGE */}
      <div className="mx-[10px] mb-[10px] h-[50px] w-[50px] overflow-hidden rounded-full sm:mx-[25px] sm:h-[100px] sm:w-[100px]">
        <img
          className="h-full w-full object-cover"
          src="/public/profile-img/profile-6.png"
          alt="Some alt text"
        />
      </div>

      {/* USER NAME */}
      <div className="mx-[5px] mb-[10px] text-center font-tertiary text-lg font-bold text-neutral-01 sm:text-2xl">
        John Doe
      </div>

      {/* NAVIGATION ITEMS */}
      <div className="w-full sm:ps-[20px]">
        <NavigationItem NavIcon={MdOutlineHome} url="/" />
        <NavigationItem NavIcon={LuMessageCircleMore} url="/message" />
        <NavigationItem NavIcon={MdNotifications} url="/notification" />
        <NavigationItem NavIcon={IoMdSettings} url="/settings" />
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
