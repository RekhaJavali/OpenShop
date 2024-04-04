import { GoSearch } from "react-icons/go";

import { HiOutlineChatAlt } from "react-icons/hi";

import { HiOutlineBell } from "react-icons/hi";



const searchIcon = " text-red-700"

export function Header(){
    return(
        <>
        <div className="bg-white p-4 h flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <GoSearch  className="absolute top-1/2 -translate-y-1/2 left-2"/> 
                <input type="text" placeholder= " Search..." className="focus:outline-none active:outline-none pl-8 border border-gray-300 rounded-md h-8 pr-2"></input> 
            </div>

            <div className="flex items-center gap-2 mr-2">
            <HiOutlineChatAlt  fontSize={20} className="hover:text-gray-600 "/>
            <HiOutlineBell fontSize={20} className="hover:text-gray-600"/>
                <img src="../../src/assets/profile.jpg" alt="profilepic"  className="rounded-lg w-6 h-6 object-fill hover:opacity-50"/>

            </div>
        </div>
        
        </>
    )
}