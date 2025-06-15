import React from "react";
import Container from "../../components/common/container/Container";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/common/search/Search";
import {
  FaEdit,
  FaRegCommentDots,
  FaImage,
  FaQuestionCircle,
} from "react-icons/fa";

const Settings = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="flex w-full flex-col rounded-2xl">
          <Search />
          <div className="grid grow grid-cols-2 gap-4 p-4">
            {/* LEFT SIDE CARD */}
            <div className="flex flex-col rounded-2xl p-6 shadow-md">
              <h2 className="mb-4 text-sm font-semibold text-neutral-04">
                Profile Settings
              </h2>

              <div className="mb-4 flex items-center gap-5">
                <img
                  src="https://i.pravatar.cc/100?img=3" // You can replace this with your image URL
                  alt="Profile"
                  className="mb-2 h-20 w-20 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">A B M Shawon Islam</h3>
                  <p className="text-gray-500 text-sm">Stay home stay safe</p>
                </div>
              </div>

              <hr className="my-4" />

              <ul className="text-gray-700 grow space-y-4 text-sm">
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaEdit />
                  Edit Profile Name.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaRegCommentDots />
                  Edit Profile Status Info.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaImage />
                  Edit Profile Photo.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaQuestionCircle />
                  Help.
                </li>
              </ul>

              <div className="text-gray-400 text-center text-sm">Chat App</div>
            </div>
            {/* RIGHT SIDE CARD */}
            <div className="flex flex-col rounded-2xl p-6 shadow-md">
              <h2 className="mb-4 text-sm font-semibold text-neutral-04">
                Account Settings
              </h2>

              <ul className="text-gray-700 grow space-y-4 text-sm">
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaEdit />
                  Edit Profile Name.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaRegCommentDots />
                  Edit Profile Status Info.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaImage />
                  Edit Profile Photo.
                </li>
                <li className="hover:text-blue-600 flex cursor-pointer items-center gap-3">
                  <FaQuestionCircle />
                  Help.
                </li>
              </ul>

              <div className="text-gray-400 text-center text-sm">Chat App</div>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Settings;
