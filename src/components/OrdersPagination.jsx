export function OrdersPagination({posts}){
    
    return(
        <>
         <div className="bg-white p-4 flex flex-col w-full " >
            <strong className="font-large text-gray-700 p-2">Orders | This Month</strong>
            <div className="mt-2">
        <table className="w-full text-gray-700 ">
            <thead >
                <tr>
                    <th>OrderId</th>
                    <th>Item Name</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Place</th>
                    <th>Placed On</th>
                </tr>

            </thead>
            <tbody>
            {posts.map((post)=>(
                <tr key = {post.Id}>
                    <td >{post.Id}</td>
                    <td >{post.Itemname}</td>
                    <td >{post.Customer}</td>
                    <td >{post.Email}</td>
                    <td >{post.Place}</td>
                    <td >{post.OrderDate}</td>
            </tr>
            ))}
                

            </tbody>
        </table>
        </div>
        </div>
        </>

        // <ul>
        //  {posts&& posts.map((post)=>(
        //     <li key={post.Id} className="p-4">{post.Id}</li>

        // )
            
        // )}
        // </ul>
    )
}