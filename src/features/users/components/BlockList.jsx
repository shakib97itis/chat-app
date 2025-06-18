import React from "react";
import DashboardCard from "../../../components/DashboardCard/DashboardCard";
import { itemsList } from "../service";

const BlockList = () => {
  return (
    <DashboardCard
      cardTitle={"Blocked Users"}
      items={itemsList}
      emptyMessage={"You have no blocked users."}
      emptyImage={"/images/empty-blocked-users.svg"}
    />
  );
};

export default BlockList;
