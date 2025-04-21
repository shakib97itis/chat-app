import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { BiPlusMedical } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Icons = () => {
  return (
    <div className="flex gap-3 bg-accent-01 py-[20px] text-center text-3xl">
      <div>
        <MdOutlineHome />
      </div>
      <div>
        <LuMessageCircleMore />
      </div>
      <div>
        <MdNotifications />
      </div>
      <div>
        <IoMdSettings />
      </div>
      <div>
        <ImExit />
      </div>
      <div>
        <IoEllipsisVertical />
      </div>
      <div>
        <RiSearchLine />
      </div>
      <div>
        <BiPlusMedical />
      </div>
      <div>
        <FiEdit3 />
      </div>
      <div>
        <AiOutlineMessage />
      </div>
      <div>
        <MdOutlineAddPhotoAlternate />
      </div>
      <div>
        <IoMdHelpCircleOutline />
      </div>
      <div>
        <FaKey />
      </div>
      <div>
        <MdDelete />
      </div>
    </div>
  );
};

export default Icons;
