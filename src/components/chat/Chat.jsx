import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import ChatInputForm from "./ChatInputForm";
import TextLeft from "./TextLeft";
import TextRight from "./TextRight";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCamera, FiSend } from "react-icons/fi";

const Chat = () => {
  return (
    <div className="flex h-full flex-col rounded-[20px] p-12 shadow-primary">
      {/* Profile section */}
      <div className="flex items-center justify-between border-b pb-6">
        {/* Profile left */}
        <div className="flex items-center gap-7">
          <div className="relative h-16 w-16">
            <img
              src="/public/profile-img/person-2.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full bg-accent-01"></div>
          </div>
          <div className="font-secondary">
            <p className="text-2xl font-semibold">Swati</p>
            <p className="text-sm">Online</p>
          </div>
        </div>
        {/* Profile right */}
        <div className="cursor-pointer text-2xl text-primary">
          <IoEllipsisVertical />
        </div>
      </div>
      {/* Chat section */}
      {/* Messages */}
      <div className="flex grow flex-col-reverse space-y-2 mb-4">
        <div>
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextLeft message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextLeft message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
        </div>
      </div>

      <div className="">
        <ChatInputForm />
      </div>
    </div>
  );
};

export default Chat;
