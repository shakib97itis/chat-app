import Container from "../../components/common/container/Container";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/common/search/Search";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Chat from "../../components/chat/Chat";

const itemsList = [
  {
    id: 1, // unique id of the card
    title: "Card Title 1",
    description: "Description 1",
    imageUrl: "/profile-img/person-1.png",
    text: "Button 1",
  },
  {
    id: 2, // unique id of the card
    title: "Card Title 2",
    description: "Description 2",
    imageUrl: "/profile-img/person-2.png",
    text: "Button 2",
  },
  {
    id: 3, // unique id of the card
    title: "Card Title 3",
    description: "Description 3",
    imageUrl: "/profile-img/person-3.png",
    text: "Button 3",
  },
  // {
  //   id: 4, // unique id of the card
  //   title: "Card Title 4",
  //   description: "Description 4",
  //   imageUrl: "/profile-img/person-4.png",
  //   text: "Button 4",
  // },
];

const Message = () => {
  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />

        {/* Dashboard content */}
        <main className="grid w-full grid-cols-3 gap-[20px]">
          {/* Left Side */}
          <div className="col-span-1">
            <DashboardCard searchVisible={true} cardTitle={"Messages"} items={itemsList} />
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
