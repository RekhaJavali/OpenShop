import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
// import Products from "./Products.jsx";
// import { Dashboard } from "./Dashboard.jsx";

import { Header } from "./Header";

export function Home(){
return(
    <>
    <div className="flex flex-row h-full w-screen md:w-full ">
        {/* changed from h-screen to h-full and w-screen to w-full */}
        <Sidebar className="fixed top-0 left-0 h-full overflow-hidden" />
        <div className="flex-1 bg-neutral-100">
            <Header className= "sticky top-0 left-0 "/>
            <div>{<Outlet/>}</div>
        </div>
    </div>
    </>
)

}