import { ORDERS } from "../lib/consts/orderTransaction"


export function RecentOrders() {
    return(
        <div className="bg-white p-4 flex flex-col w-full  flex-1" >
            <strong className="font-medium text-gray-700">Transactions | This Month</strong>
            <div className="mt-4  overflow-y-auto">
                {/* {orders.map((order)=>(
                    <div>{order.orderId}</div>
                ))} */}
                <table className="w-full text-gray-700 overflow-y-auto">
                    <thead>
                        <tr>
                            <th>OrderID</th>
                            <th>Status</th>
                            <th>TransactionID</th>
                            <th>RefundDate</th>
                            <th>OrderAmount</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-scroll overflow-y-auto">
                    {ORDERS.map((order)=>(
                    <tr key={order.orderId}>
                        <td>{order.orderId}</td>
                        <td className=" flex items-center gap-2 ">   
                            <span className={`${ order.status === "Successful" ? "bg-green-500" : "bg-[#999999]"
                            }   w-[10px] h-[10px] rounded-full`}
                            ></span>
                            {order.status}</td>
                        <td>{order.transactionId}</td>
                        <td>{order.refundDate}</td>
                        <td>{order.orderAmount}</td>
                    </tr>
                ))}
                    </tbody>

                </table>
            </div>

        </div>
        
    )
}