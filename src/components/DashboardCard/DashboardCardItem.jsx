import React from "react";

const DashboardCardItem = ({
  isLastItem,
  listTitle,
  listDescription,
  listImgUrl,
}) => {
  return (
    <li className="">
      <div
        className={`flex items-center gap-[10px] pt-[16px] ${isLastItem ? "" : "pb-[16px]"}`}
      >
        <div className="h-[70px] w-[70px] rounded-full">
          <img
            src={listImgUrl}
            className="h-full w-full object-cover"
            alt=""
            srcset=""
          />
        </div>
        <div className="font-secondary">
          <h3 className="text-lg font-semibold">{listTitle}</h3>
          <p className="text-sm font-medium">{listDescription}</p>
        </div>
        <div className="ms-auto">
          <button className="cursor-pointer rounded bg-primary px-[18px] py-[8px] font-secondary text-xl text-neutral-01">
            Join
          </button>
        </div>
      </div>
      {isLastItem ? null : <div className="h-0.5 bg-neutral-06/20"></div>}
    </li>
  );
};

export default DashboardCardItem;
