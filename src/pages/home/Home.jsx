import React from "react";
import Container from "../../components/common/container/container";
import Navigation from "../../components/navigation/Navigation";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { RiSearchLine } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";
import Search from "../../components/common/search/Search";

const Home = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="grid w-full gap-[20px] lg:grid-cols-2 xl:grid-cols-3">
          <DashboardCard cardTitle={"Explore Group"} searchVisible={true} />
          <DashboardCard cardTitle={"Friends"} />
          <DashboardCard cardTitle={"Users"} />
          <DashboardCard cardTitle={"Users"} />
          <DashboardCard cardTitle={"Users"} />
          <DashboardCard cardTitle={"Users"} />
        </main>
      </div>
    </Container>
  );
};

export default Home;
