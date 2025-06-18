import Navigation from "../../components/navigation/Navigation";
import MainLayout from "../../layouts/MainLayout";
import NotificationList from "../../features/notifications/components/NotificationList";
import Search from "../../components/search/Search";

const Notification = () => {
  return (
    <MainLayout>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="w-full shadow rounded-2xl">
          <Search />
          <NotificationList />
        </main>
      </div>
    </MainLayout>
  );
};

export default Notification;
