import DashboardCard from "../../../components/DashboardCard/DashboardCard"
import { itemsList } from "../service"

const FriendsList = () => {
  return (
    <DashboardCard
      cardTitle={"Friends"}
      items={itemsList}
    />
  )
}

export default FriendsList