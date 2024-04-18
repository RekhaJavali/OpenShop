import React from "react";
import { Link } from "react-router-dom";

import { DashboardStatsGrid } from "./DashboardStatsGrid";
import { Transaction } from "./Transaction";
import { BuyerProfile } from "./BuyerProfile";
import { RecentOrders } from "./RecentOrders";

export  function Dashboard (){
 return(
    <div className="flex flex-col gap-4 p-4 ">
      <DashboardStatsGrid />
      {/* <div className="flex flex-row gap-4 w-full" >
         <Transaction />
         <BuyerProfile />
      </div> */}
     
      <div className="flex flex-row gap-4 w-full">
         <RecentOrders />
      </div>
    
    </div>
 )
}