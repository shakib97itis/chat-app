import React from "react";
import { IoIosSend } from "react-icons/io";

const ChatInputForm = () => {
  return (
    <form action="#" className="flex justify-between gap-5">
      <div className="grow">
        <input type="text" name="chat" id="chat" className="w-full h-full" />
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
