import React from "react";

const TextLeft = ({ message, time }) => {
  return (
    <div className="">
      <div className="relative ms-[6px] w-fit rounded-xl bg-accent-01 p-2 text-sm">
        <span>{message}</span>
        <div
          className="absolute bottom-0 -left-[6px] -z-10 h-[30px] w-[30px] bg-accent-01"
          style={{ clipPath: "polygon(50% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </div>
      <p className="mt-1 text-xs text-neutral-04">{time}</p>
    </div>
  );
};

export default TextLeft;
