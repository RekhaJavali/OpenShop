import classnames from "classnames";

const butn = "p-3 border border-1 border-solid bg-white-200 border-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"

export function Pagination({postsPerPage, totalPosts, paginate}){
    let pageNums = [];

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNums.push(i);
    }

    return(
        <>
            <nav className="flex p-4 bg-white justify-center">
                <ul className="flex gap-2">
                    {pageNums.map((num)=>(
                        <li key={num} className= {classnames(butn)} onClick={()=>paginate(num)}><a  href="#">{num}</a></li>
                    ))}
                </ul>
            </nav>
        </>
    )
}