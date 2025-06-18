import React from 'react'
import DashboardCard from '../../../components/DashboardCard/DashboardCard'
import { itemsList } from '../../../services/itemsList'

const ChatList = () => {
  return (
    <DashboardCard 
      cardTitle={"Chat List"}
      searchVisible={true}
      items={itemsList}
      emptyMessage={"You have no chats."}
      emptyImage={"/images/empty-chats.svg"}
    />
  )
}

export default ChatList