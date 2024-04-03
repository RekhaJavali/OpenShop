import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_BOTTOM_LIST } from "../lib/consts/navigation";


import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames';

import { RiLogoutBoxRLine } from "react-icons/ri";


const linkclass = "flex gap-4 items-center font-light px-4 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"


export function Sidebar() {
    return (
        <>
        <div className=" flex flex-col p-3  bg-neutral-900 text-white ">
            
                <div className="flex items-center  gap-2 p-4 "> 
                    <FcBullish  size={24}/> 
                    <span className=" text-lg tracking-wide text-neutral-100">OpenShop</span>
                </div>
                <div className="flex-1 flex flex-col  gap-0.5 pt-4 ">
                    {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                        // <div key = {item.key}>
                        //     <Link to = {item.path}>{item.icon}<span>{item.name}</span></Link> </div>
                        <SideBarLink key={item.key} item={item}/>
                    ))}
                </div>
                
            
            <div className=" flex flex-col gap-0.5 pt-2 border-t border-neutral-700"> 
                {DASHBOARD_BOTTOM_LIST.map((item)=>(
                
                    // <Link to={botitem.path} >{botitem.icon}{botitem.name}</Link>
                    <SideBarLink key = {item.key} item={item}/>
            ))}
            </div>
            <div  className={classnames(linkclass, 'text-red-700 cursor-pointer text-lg')}>
                <RiLogoutBoxRLine />
               Logout
            </div>
        </div>
        </>
    )

}

function SideBarLink(props){
    const { item }= props;

    const { pathname }= useLocation();
    console.log(pathname);
    console.log(item.path);

    return(
        <Link to={item.path}  className= {classnames(   linkclass , pathname === item.path? 'text-white bg-neutral-700 ': "text-neutral-400")}>
           
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
        </Link>
    )
} 


