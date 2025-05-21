export function ProductsTable({products}){
    
    return(
        <>
         <div className="bg-white p-4 flex flex-col w-full " >
            <strong className="font-large text-gray-700 p-2">Products </strong>
            <div className="mt-2">
        <table className="w-full text-gray-700 ">
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>CreatedAt</th>
                </tr>

            </thead>
            <tbody>
            {products.map((product)=>(
                <tr key = {product.id}>
                    <td >{product.name}</td>
                    <td >{product.category}</td>
                    <td >{product.price}</td>
                    <td >{product.stock}</td>
                    <td >{product.createdAt}</td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </>
    )
}