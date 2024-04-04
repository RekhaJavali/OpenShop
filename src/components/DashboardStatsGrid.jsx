import { IoBagHandle } from "react-icons/io5";
import { IoPieChart } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";



export function DashboardStatsGrid(){
    return(
        <div className="flex items-center gap-4">
            {/* <div className="bg-white  flex-1 rounded-sm p-4 border border-gray-200">a</div>
            <div className="bg-white  flex-1 ">b</div>
            <div className="bg-white  flex-1">c</div>
            <div className="bg-white  flex-1">d</div> */}
            
            <DashboardBox > 
                <div className="bg-sky-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <IoBagHandle className="text-xl text-white"/>
                </div>
                <div className="pl-2">
                    <span className=" font-light text-gray-500 text-sm">Total Sales</span>
                    <div className="flex items-center">
                        <bold className="text-xl text-gray-700 font-semibold">$54232</bold> 
                        <span className="text-sm text-green-500 pl-1">+343</span>
                    </div>
                </div>
            </DashboardBox>
            <DashboardBox >
                <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                    < IoPieChart className="text-xl text-white"/>
                </div>
                <div className="pl-2">
                    <span className=" font-light text-gray-500 text-sm">Total Expenses</span>
                    <div className="flex items-center">
                        <bold className="text-xl text-gray-700 font-semibold">$3423</bold> 
                        <span className="text-sm text-green-500 pl-1">-343</span>
                    </div>
                </div>
            </DashboardBox>
            <DashboardBox >
            <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                    < IoPeople className="text-xl text-white"/>
                </div>
                <div className="pl-2">
                    <span className=" font-light text-gray-500 text-sm">Total Customers</span>
                    <div className="flex items-center">
                        <bold className="text-xl text-gray-700 font-semibold">$3423</bold> 
                        <span className="text-sm text-red-500 pl-1">-30</span>
                    </div>
                </div>
            </DashboardBox>
            <DashboardBox >
            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                    < IoCartSharp className="text-xl text-white"/>
                </div>
                <div className="pl-2">
                    <span className=" font-light text-gray-500 text-sm">Total Orders</span>
                    <div className="flex items-center">
                        <bold className="text-xl text-gray-700 font-semibold">$3423</bold> 
                        <span className="text-sm text-red-500 pl-1">-43</span>
                    </div>
                </div>
            </DashboardBox>
        
        </div>
    )
}

function DashboardBox({children}){
    return <div className="bg-white  flex-1 rounded-sm p-4 border border-gray-200 flex gap-2 items-center">{children}</div>

}