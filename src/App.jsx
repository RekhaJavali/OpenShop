import React from "react";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

import { Dashboard }from "./components/Dashboard.jsx";
import { Home } from "./components/Home.jsx";
import Products from "./components/Products.jsx";


function App() {
 

  return (
    <>
      
    {/* <div>hello</div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element = {<Dashboard/>} />
          <Route path="products" element = {<Products/>}/>
          {/* <Route path="dashboard" element = {<Dashboard/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
