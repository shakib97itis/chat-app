import React from "react";

const TextRight = ({ message, time }) => {
  return (
    <div className="text-right">
      <div className="relative inline-block rounded-xl bg-primary p-2 text-sm text-neutral-01">
        <span>{message}</span>
        <div
          className="absolute -right-[6px] bottom-0 -z-10 h-[30px] w-[30px] bg-primary"
          style={{ clipPath: "polygon(50% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </div>
      <p className="mt-1 text-xs text-neutral-04">{time}</p>
    </div>
  );
};

export default TextRight;
