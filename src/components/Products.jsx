import React from "react";
import { Link } from "react-router-dom";

export default function Products(){
    return(
        <>
        Products page
        <p className="underline"><Link to = "/dashboard">Go to Dashboard</Link></p>
        </>

    )
}