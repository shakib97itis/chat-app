import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import ChatInputForm from "./ChatInputForm";

const Chat = () => {
  return (
    <div className="p-12 shadow-primary h-full rounded-[20px]">
      {/* Profile section */}
      <div className="border-b pb-6 flex items-center justify-between">
        {/* Profile left */}
        <div className="flex items-center gap-7">
          <div className="h-16 w-16 relative">
            <img
              src="/public/profile-img/person-2.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute h-4 w-4 right-0 bottom-0 rounded-full bg-accent-01"></div>
          </div>
          <div className="font-secondary">
            <p className="text-2xl font-semibold">Swati</p>
            <p className="text-sm">Online</p>
          </div>
        </div>
        {/* Profile right */}
        <div className="text-2xl cursor-pointer text-primary">
            <IoEllipsisVertical />
        </div>
      </div>
      {/* Chat section */}
      <div>
        <div>Message</div>
      </div>
      <div className="">
        <ChatInputForm />
      </div>
    </div>
  );
};

export default Chat;
