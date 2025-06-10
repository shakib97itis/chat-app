import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Container from "../../components/common/container/container";
import NotificationList from "../../components/notificationList/NotificationList";
import Search from "../../components/common/search/Search";

const Notification = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="w-full shadow rounded-2xl">
          <Search />
          <NotificationList />
        </main>
      </div>
    </Container>
  );
};

export default Notification;
