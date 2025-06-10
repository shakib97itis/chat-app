import React from "react";
import Container from "../../components/common/container/container";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/common/search/Search";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Chat from "../../components/chat/Chat";
import Icons from "../../Icons";

const Message = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* will be deleted soon */}
        {/* <Icons /> */}
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="grid w-full  grid-cols-3 gap-[20px]">
          {/* Left Side */}
          <div className="col-span-1">
            <Search />
            <DashboardCard cardTitle={"Messages"} />
          </div>
          {/* Right Side */}
          <div className="col-span-2">
            <Chat />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Message;
