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
          <Route path="products" element = {<Products/>}/>
          {/* just to avoid error */}
          <Route path="orders" element = {<Orders/>} />
          <Route path="customers" element = {<h1>customer</h1>} />
          <Route path="transactions" element = {<h1>Transactions</h1>} />
          <Route path="messages" element = {<h1>Messages</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
