export function CustomerTable({posts}){
    
    return(
        <>
         <div className="bg-white p-4 flex flex-col w-full " >
            <strong className="font-large text-gray-700 p-2">Orders | This Month</strong>
            <div className="mt-2">
        <table className="w-full text-gray-700 ">
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Place</th>
                    <th>ZipCode</th>
                </tr>

            </thead>
            <tbody>
            {posts.map((post)=>(
                <tr key = {post.id}>
                    <td >{post.name}</td>
                    <td >{post.email}</td>
                    <td >{post.username}</td>
                    <td >{post.phone}</td>
                    <td >{`${post.address.city}, ${post.address.street}, `}</td>
                    <td >{post.address.zipcode}</td>
                    {/* <td >{post.OrderDate}</td> */}
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </>
    )
}