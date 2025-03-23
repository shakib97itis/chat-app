import React from "react";

function LoginTemplate({ children, img }) {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-16 p-3 lg:p-0">
      {/* RIGHT SIDE */}
      <div className="hidden min-h-dvh w-[50%] lg:block">
        <img
          src={img}
          className="h-dvh w-full object-contain object-center"
          alt="Person talking"
        />
      </div>
      {/* LEFT SIDE */}
      <div className="flex w-full items-center justify-center lg:w-[50%] lg:justify-start">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LoginTemplate;
