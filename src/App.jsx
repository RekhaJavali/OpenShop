import React from "react";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

import { Dashboard }from "./components/Dashboard.jsx";
import { Home } from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import {Orders} from "./components/Orders.jsx";
// import {Customers} from "./components/Customers.jsx";


function App() {
 

  return (
    <>
      
    {/* <div>hello</div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element = {<Dashboard/>} />
          <Route path="products" element = {<Dashboard/>}/>
          {/* just to avoid error */}
          <Route path="orders" element = {<Orders/>} />
          <Route path="customers" element = {<Dashboard/>} />
          <Route path="transactions" element = {<Dashboard/>} />
          <Route path="messages" element = {<Dashboard/>} />
          <Route path="settings" element = {<Dashboard/>} />
          <Route path="support" element = {<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
