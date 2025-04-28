import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const DashboardCard = ({ listTitle }) => {
  const [show, setShow] = React.useState(false);

  const groupList = [
    {
      id: 1, // unique id of the card
      title: "Card Title 1",
      description: "Description 1",
      imageUrl: "image1.png",
      text: "Button 1",
    },
    {
      id: 2, // unique id of the card
      title: "Card Title 2",
      description: "Description 2",
      imageUrl: "image2.png",
      text: "Button 2",
    },
    {
      id: 3, // unique id of the card
      title: "Card Title 3",
      description: "Description 3",
      imageUrl: "image3.png",
      text: "Button 3",
    },
    {
      id: 4, // unique id of the card
      title: "Card Title 4",
      description: "Description 4",
      imageUrl: "image4.png",
      text: "Button 4",
    },
  ];

  // Sanitize the data

  return (
    <div className="rounded-3xl px-[20px] py-[20px] shadow-lg bg-accent-01">
      <div className="flex items-center justify-between">
        <h2 className="font-secondary text-xl font-semibold">{listTitle}</h2>
        <button className="cursor-pointer text-primary">
          <IoEllipsisVertical />
        </button>
      </div>
      {/* Dashboard Card List */}
      <ul>
        {groupList.map((item, index, arr) => {
          const isLastItem = index === arr.length - 1;

          return (
            <li className="">
              <div
                className={`flex items-center gap-[10px] pt-[16px] ${isLastItem ? "" : "pb-[16px]"}`}
              >
                <div className="h-[70px] w-[70px] rounded-full bg-primary">
                  <img
                    src="/public/group-img/group-1.png"
                    className="h-full w-full object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="font-secondary">
                  <h3 className="text-lg font-semibold">Friends Reunion</h3>
                  <p className="text-sm font-medium">Hi Guys, Wassup!</p>
                </div>
                <div className="ms-auto">
                  <button className="rounded bg-primary px-[18px] py-[8px] font-secondary text-xl text-neutral-01">
                    Join
                  </button>
                </div>
              </div>
              {isLastItem ? null : (
                <div className="h-0.5 bg-neutral-06/20"></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardCard;
