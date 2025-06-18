import DashboardCard from '../../../components/DashboardCard/DashboardCard'
import { itemsList } from '../service'

const FriendRequestList = () => {
  return (
    <DashboardCard
      cardTitle={"Friend Requests"}
      items={itemsList}
    />
  )
}

export default FriendRequestList