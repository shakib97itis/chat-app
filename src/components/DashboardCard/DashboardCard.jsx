import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import DashboardCardItem from "./DashboardCardItem";

const DashboardCard = ({ cardTitle }) => {
  const groupList = [
    {
      id: 1, // unique id of the card
      title: "Card Title 1",
      description: "Description 1",
      imageUrl: "/profile-img/person-1.png",
      text: "Button 1",
    },
    {
      id: 2, // unique id of the card
      title: "Card Title 2",
      description: "Description 2",
      imageUrl: "/profile-img/person-2.png",
      text: "Button 2",
    },
    {
      id: 3, // unique id of the card
      title: "Card Title 3",
      description: "Description 3",
      imageUrl: "/profile-img/person-3.png",
      text: "Button 3",
    },
    {
      id: 4, // unique id of the card
      title: "Card Title 4",
      description: "Description 4",
      imageUrl: "/profile-img/person-4.png",
      text: "Button 4",
    },
  ];

  return (
    <div className="rounded-3xl px-[20px] py-[20px] shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-secondary text-xl font-semibold">{cardTitle}</h2>
        <button className="cursor-pointer text-2xl text-primary">
          <IoEllipsisVertical />
        </button>
      </div>
      {/* Dashboard Card List */}
      <ul>
        {groupList.map((item, index, arr) => {
          const isLastItem = index === arr.length - 1;

          return <DashboardCardItem key={item.id} isLastItem={isLastItem} listTitle={item.title} listDescription={item.description} listImgUrl={item.imageUrl} />;
        })}
      </ul>
    </div>
  );
};

export default DashboardCard;
