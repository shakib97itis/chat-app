import React from "react";
function RagistrationTemplate({ children, img }) {
  return (
    // CONTAINER FOR REGISTRATION AND LOGIN
    <div className="mx-auto flex max-w-[1440px] gap-16 p-3 lg:p-0">
      {/* LEFT SIDE */}
      <div className="flex w-full items-center justify-center lg:w-[50%] lg:justify-end">
        <div>{children}</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden min-h-dvh w-[50%] lg:block">
        <img
          src={img}
          className="h-dvh w-full object-contain object-center"
          alt="Person talking"
        />
      </div>
    </div>
  );
}

export default RagistrationTemplate;
