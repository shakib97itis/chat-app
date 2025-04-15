import React from "react";
import profileImage from "../../assets/person.jpg";
import { MdHome } from "react-icons/md";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-16 p-3 lg:p-0">
      <aside className="min-h-dvh bg-red-400 px-11 py-9">
        <div className="h-28 w-28 overflow-hidden rounded-full">
          <img
            className="h-full w-full object-cover object-center"
            src={profileImage}
            alt="Profile"
          />
        </div>
        <ul className="mt-5 space-y-5">
          <li>
            <button className="relative bg-white w-full px-6 py-5 after:absolute after:bottom-0 after:right-0 after:h-full after:w-1.5 after:bg-amber-300 after:content-['']">
              <MdHome className="text-5xl text-deep-sea" />
            </button>
          </li>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
        </ul>
        <div>Logout</div>
      </aside>
      <h1>Welcome to Chat App</h1>
    </div>
  );
};

export default Home;
