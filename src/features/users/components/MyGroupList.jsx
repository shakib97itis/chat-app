import React from 'react'
import { itemsList } from '../service'
import DashboardCard from '../../../components/DashboardCard/DashboardCard'
const MyGroupList = () => {
  return (
    <DashboardCard
      cardTitle={"My Groups"}
      items={itemsList}
      emptyMessage={"You are not a member of any groups."}
      emptyImage={"/images/empty-groups.svg"}
    />
  )
}

export default MyGroupList