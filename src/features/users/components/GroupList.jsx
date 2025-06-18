import React from "react";
import { itemsList } from "../service";
import DashboardCard from "../../../components/DashboardCard/DashboardCard";
const GroupList = () => {
  return (
    <DashboardCard
      cardTitle={"Groups List"}
      items={itemsList}
      emptyMessage={"You are not a member of any groups."}
      emptyImage={"/images/empty-groups.svg"}
    />
  );
};

export default GroupList;
