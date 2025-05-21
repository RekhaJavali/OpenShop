import React from "react";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

import { Dashboard }from "./pages/Dashboard.jsx";
import { Home } from "./components/Home.jsx";
import Products from "./pages/Products.jsx";
import {Orders} from "./pages/Orders.jsx";
import Customers from "./pages/Customers.jsx";
import SettingsComponent from "./pages/Settings.jsx";
import HelpAndSupport from "./pages/HelpAndSupport.jsx";
import MessagesComponent from "./pages/MessagesComponent.jsx";
import { Transaction } from "./components/Transaction.jsx";
import { RecentOrders } from "./components/RecentOrders.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
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
          <Route path="customers" element = {<Customers/>} />
          <Route path="transactions" element = {<RecentOrders/>} />
          <Route path="messages" element = {<MessagesComponent/>} />
          <Route path="settings" element = {<SettingsComponent/>} />
          <Route path="support" element = {<HelpAndSupport/>} />
          <Route path="logout" element={<LogoutButton/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
