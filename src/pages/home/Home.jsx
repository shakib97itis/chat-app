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
        <main className="grid w-full gap-[20px] lg:grid-cols-2 xl:grid-cols-3">
          <div className="">
            <div>
              <div className="relative mb-[22px] rounded-[20px] shadow-lg">
                <input
                  className="w-full rounded-3xl px-[20px] py-[16px] ps-[50px] font-secondary text-base font-medium"
                  type="text"
                  placeholder="Search"
                  name="search"
                  id="search"
                />
                <span className="absolute top-1/2 left-[20px] -translate-y-1/2 text-2xl">
                  <RiSearchLine />
                </span>
                <span className="absolute top-1/2 right-[20px] -translate-y-1/2 text-2xl text-primary">
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
