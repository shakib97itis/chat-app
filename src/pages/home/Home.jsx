import React from "react";
import Container from "../../components/common/container/container";
import Navigation from "../../components/navigation/Navigation";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { RiSearchLine } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";

const Home = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="grid w-full grid-cols-3 grid-rows-2 gap-[10px]">
          <div className="">
            <div>
              <div className="relative shadow-lg rounded-[20px] mb-[22px]">
                <input
                  className="w-full font-secondary font-medium text-base rounded-3xl px-[20px] ps-[50px] py-[16px]"
                  type="text"
                  placeholder="Search"
                  name="search"
                  id="search"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-[20px] text-2xl">
                  <RiSearchLine />
                </span>
                <span className="absolute top-1/2 -translate-y-1/2 right-[20px] text-2xl text-primary">
                  <IoEllipsisVertical />
                </span>
              </div>
              <DashboardCard listTitle={"Explore Group"} />
            </div>
          </div>
          <DashboardCard listTitle={"Friends"} />
          <DashboardCard listTitle={"Users"} />
          <DashboardCard listTitle={"Users"} />
          <DashboardCard listTitle={"Users"} />
          <DashboardCard listTitle={"Users"} />
        </main>
      </div>
    </Container>
  );
};

export default Home;
