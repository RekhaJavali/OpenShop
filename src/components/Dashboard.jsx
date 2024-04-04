import React from "react";
import { Link } from "react-router-dom";

import { DashboardStatsGrid } from "./DashboardStatsGrid";
import { Transaction } from "./Transaction";

export  function Dashboard (){
 return(
    <div className="flex flex-col gap-4 p-4">
      <DashboardStatsGrid />
     <Transaction />
      <p>table</p>
    
    </div>
 )
}