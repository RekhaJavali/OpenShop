import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

import { HiOutlineCog } from "react-icons/hi";




export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        name: "Dashboard",
        path: "/",
        icon : <HiOutlineViewGrid/>
    },
    {
        key: "products",
        name: "Products",
        path: "/products",
        icon : <HiOutlineCube/>
    },
    {
        key: "orders",
        name: "Orders",
        path: "/orders",
        icon : <HiOutlineShoppingCart />
    },
    {
        key: "customers",
        name: "Customers",
        path: "/customers",
        icon : <HiOutlineUserGroup />
    },
    {
        key: "transactions",
        name: "Transactions",
        path: "/transactions",
        icon : <HiOutlineDocumentText />
    },
    {
        key: "messages",
        name: "Messages",
        path: "/messages",
        icon : <HiOutlineAnnotation />
    },

];

export const DASHBOARD_BOTTOM_LIST = [

    {
        key: "settings",
        name: 'Settings',
        path: "/settings",
        icon : <HiOutlineCog />
    },

    {
        key: "support",
        name: "Help & Support",
        path: "/support",
        icon : <HiOutlineQuestionMarkCircle />
    },

];









