import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import UsersList from "../../features/users/components/UsersList";
import FriendsList from "../../features/users/components/FriendsList";
import FriendRequestList from "../../features/users/components/FriendRequestList";
import BlockList from "../../features/users/components/BlockList";
import GroupList from "../../features/users/components/GroupList";
import MyGroupList from "../../features/users/components/MyGroupList";
const Home = () => {
  /**
   * We need to fetch the data from the server to display the dashboard cards.
   * For now, we will use static data.
   */

  return (
    <MainLayout>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="grid w-full gap-[20px] lg:grid-cols-2 xl:grid-cols-3">
          <UsersList />
          <FriendsList />
          <FriendRequestList />
          <BlockList />
          <GroupList />
          <MyGroupList />
        </main>
      </div>
    </MainLayout>
  );
};

export default Home;
