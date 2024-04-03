import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
// import Products from "./Products.jsx";
// import { Dashboard } from "./Dashboard.jsx";

export function Home(){
return(
    <>
    <div className="grid grid-cols-4 h-screen w-screen overflow-hidden">
        <Sidebar/>
        <div className="col-span-3 p-3">
            <div className="bg-cyan-100 card">Header</div>
            <div>{<Outlet/>}</div>
        </div>
    </div>
    </>
)

}