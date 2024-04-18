import React from "react";
import { Link } from "react-router-dom";

export  function Orders(){
    return(
        <>
        Orders page
        <p className="underline"><Link to = "/">Go to Dashboard</Link></p>
        </>

    )
}