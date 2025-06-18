import MainLayout from "../../layouts/MainLayout";
import Navigation from "../../components/navigation/Navigation";
import ChatList from "../../features/chat/components/ChatList";
import Chat from "../../features/chat/components/Chat";

const Message = () => {
  return (
    <MainLayout>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />

        {/* Dashboard content */}
        <main className="grid w-full grid-cols-3 gap-[20px]">
          {/* Left Side */}
          <div className="col-span-1">
            <ChatList />
          </div>
          {/* Right Side */}
          <div className="col-span-2">
            <Chat />
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Message;
