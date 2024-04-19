import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { Pagination } from "./Pagination";
import { OrdersPagination } from "./OrdersPagination";
// import { ORDERS } from "../lib/consts/orderTransaction" ;
import {ORDER_ITEMS} from "../lib/consts/mockData";



export  function Orders(){

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, SetPostPerPage] =useState(10);

    // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setPosts(ORDER_ITEMS);
        // setLoading(false);
    }, []
    );

    //get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const curentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change the page
    const handlePaginate=(pageNum)=>{
        setCurrentPage(pageNum);
    }

    

    return(
        <>
       
        <OrdersPagination posts = {curentPosts} />

        <Pagination  postsPerPage = {postPerPage} totalPosts = {posts.length} paginate={handlePaginate}/>
        </>

    )
}