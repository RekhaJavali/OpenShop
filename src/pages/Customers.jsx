import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {customersData} from "../lib/consts/customersdata";
import {OrdersPagination} from "../components/OrdersPagination";
import {Pagination} from "../components/Pagination"
import { CustomerTable } from "../components/CustomerTable";

export default function Customers(){
  
      const [posts, setPosts] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [postPerPage, SetPostPerPage] =useState(10);
  
      // const [loading, setLoading] = useState(false);
  
      useEffect(()=>{
          setPosts(customersData);
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
          <CustomerTable posts = {curentPosts} />
          <Pagination  postsPerPage = {postPerPage} totalPosts = {posts.length} paginate={handlePaginate}/>
          </>
  
      )
}