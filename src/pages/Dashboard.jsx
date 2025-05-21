import React from "react";
import { Link } from "react-router-dom";

import { DashboardStatsGrid } from "../components/DashboardStatsGrid";
import { Transaction } from "../components/Transaction";
import { BuyerProfile } from "../components/BuyerProfile";
import { RecentOrders } from "../components/RecentOrders";
import PopularProducts from "../components/PopularProducts";

export  function Dashboard (){
 return(
    <div className="flex flex-col gap-4 p-4  ">
      <DashboardStatsGrid />
       <div className="flex flex-row gap-4 w-full h-[200]" >
         <Transaction />
         <BuyerProfile />
      </div> 
     
      <div className="flex flex-row gap-4 w-full overflow-y-auto">
         <RecentOrders />
         <PopularProducts />
      </div>
    
    </div>
 )
}