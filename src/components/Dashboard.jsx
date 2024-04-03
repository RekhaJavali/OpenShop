import React from "react";
import { Link } from "react-router-dom";

export  function Dashboard (){
 return(
    <>
    Dashboard page
    <p><Link to="/products" >Go to Products</Link></p>
    </>
 )
}