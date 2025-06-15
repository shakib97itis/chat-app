import Container from "../../components/common/container/Container";
import Navigation from "../../components/navigation/Navigation";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

const Home = () => {
  /**
   * We need to fetch the data from the server to display the dashboard cards.
   * For now, we will use static data.
   */

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

  return (
    <Container>
      <div className="flex h-full gap-[20px]">
        {/* NAVIGATION BAR */}
        <Navigation />
        {/* Dashboard content */}
        <main className="grid w-full gap-[20px] lg:grid-cols-2 xl:grid-cols-3">
          <DashboardCard
            cardTitle={"Explore Group"}
            searchVisible={true}
            items={itemsList}
          />
          <DashboardCard cardTitle={"Friends"} items={itemsList} />
          <DashboardCard cardTitle={"Users"} items={itemsList} />
          <DashboardCard cardTitle={"Users"} items={itemsList} />
          <DashboardCard cardTitle={"Users"} items={itemsList} />
          <DashboardCard cardTitle={"Users"} items={itemsList} />
        </main>
      </div>
    </Container>
  );
};

export default Home;
