import DashboardCard from "../../../components/DashboardCard/DashboardCard";
import { itemsList } from "../service";

const UsersList = () => {
  // logic goes here
  return (
    <DashboardCard
      searchVisible={true}
      cardTitle={"People You May Know"}
      items={itemsList}
    />
  );
};

export default UsersList;
