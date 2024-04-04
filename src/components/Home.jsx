import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
// import Products from "./Products.jsx";
// import { Dashboard } from "./Dashboard.jsx";

import { Header } from "./Header";

export function Home(){
return(
    <>
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-neutral-100">
        <Sidebar/>
        <div className="flex-1 ">
            <Header/>
            <div>{<Outlet/>}</div>
        </div>
    </div>
    </>
)

}