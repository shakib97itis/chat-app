import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";

const ChatInputForm = () => {
  return (
    <form action="#" className="flex justify-between gap-5">
      <div className="flex flex-1 rounded border px-3">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-transparent px-3 py-3 text-sm outline-none"
        />
        <div className="flex items-center space-x-3 text-neutral-04">
          <BsEmojiSmile className="h-5 w-5 cursor-pointer" />
          <FiCamera className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <button
        type="submit"
        className="flex h-11 w-11 items-center justify-center rounded bg-primary text-2xl"
      >
        <IoIosSend />
      </button>
    </form>
  );
};

export default ChatInputForm;
