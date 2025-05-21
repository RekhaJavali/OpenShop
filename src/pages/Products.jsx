import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {productsdata} from "../lib/consts/products";
import { Pagination } from "../components/Pagination";
import  { ProductsTable } from "../components/ProductsTable";

export default function Products(){

        const [products, setProducts] = useState([]);
            const [currentPage, setCurrentPage] = useState(1);
            const [postPerPage, SetPostPerPage] =useState(10);
        
            // const [loading, setLoading] = useState(false);
        
            useEffect(()=>{
                setProducts(productsdata);
                // setLoading(false);
            }, []
            );
        
            //get current post
            const indexOfLastPost = currentPage * postPerPage;
            const indexOfFirstPost = indexOfLastPost - postPerPage;
            const curentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
        
            //change the page
            const handlePaginate=(pageNum)=>{
                setCurrentPage(pageNum);
            }
        
            return(
                <>
                <ProductsTable products = {curentProducts} />
                <Pagination  postsPerPage = {postPerPage} totalPosts = {products.length} paginate={handlePaginate}/>
                </>
        
            )

}