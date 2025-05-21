// import { GoSearch } from "react-icons/go";

// import { HiOutlineChatAlt } from "react-icons/hi";

// import { HiOutlineBell } from "react-icons/hi";



// const searchIcon = " text-red-700"

// export function Header(){
//     return(
//         <>
//         <div className="bg-white p-4 h flex justify-between items-center border-b border-gray-200">
//             <div className="relative">
//                 <GoSearch  className="absolute top-1/2 -translate-y-1/2 left-2"/> 
//                 <input type="text" placeholder= " Search..." className="focus:outline-none active:outline-none pl-8 border border-gray-300 rounded-md h-8 pr-2"></input> 
//             </div>

//             <div className="flex items-center gap-2 mr-2">
//             <HiOutlineChatAlt  fontSize={20} className="hover:text-gray-600 "/>
//             <HiOutlineBell fontSize={20} className="hover:text-gray-600"/>
//                 {/* <img src="../../src/assets/profile.jpg" alt="profilepic"  className="rounded-lg w-6 h-6 object-fill hover:opacity-50"/> */}
//                 <img src= "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="profpic" className="rounded-xl w-6 h-6 object-fill hover:opacity-50"/>

//             </div>
//         </div>
        
//         </>
//     )
// }

import { useState, useRef, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi';

export function Header() {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const messageRef = useRef(null);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        messageRef.current &&
        !messageRef.current.contains(e.target )
      ) {
        setShowMessages(false);
      }

      if (
        notifRef.current &&
        !notifRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
      if (profileRef.current && 
        !profileRef.current.contains(e.target )) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    window.location.href = '/login'; 
  };

  return (
    <div className="bg-white p-4 flex justify-between items-center border-b border-gray-200 relative z-20">
      {/* Search Bar */}
      <div className="relative">
        <GoSearch className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none pl-8 border border-gray-300 rounded-md h-8 pr-2"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 mr-2 relative">
        {/* Message Icon */}
        <div className="relative" ref={messageRef}>
          <HiOutlineChatAlt
            fontSize={20}
            className="cursor-pointer hover:text-gray-600"
            onClick={() => {
              setShowMessages((prev) => !prev);
              setShowNotifications(false);
              setShowProfileDropdown(false);
            }}
          />
          {showMessages && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border p-3 z-30">
              <p className="text-sm font-medium mb-2">Messages</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Support: Your ticket has been received</li>
                <li>Admin: Maintenance scheduled</li>
                <li>Help Center: Profile update guide</li>
              </ul>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="relative" ref={notifRef}>
          <HiOutlineBell
            fontSize={20}
            className="cursor-pointer hover:text-gray-600"
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowMessages(false);
              setShowProfileDropdown(false);
            }}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border p-3 z-30">
              <p className="text-sm font-medium mb-2">Notifications</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>New user registered</li>
                <li>Server restarted</li>
                <li>Security update available</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Image */}
        {/* <img
          src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
          alt="profpic"
          className="rounded-xl w-6 h-6 object-fill hover:opacity-50"
        /> */}
         <div className="relative" ref={profileRef}>
          <img
            src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
            alt="profpic"
            className="rounded-xl w-6 h-6 object-cover cursor-pointer"
            onClick={() => {
              setShowProfileDropdown((prev) => !prev);
              setShowMessages(false);
              setShowNotifications(false);
            }}
          />
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border p-3 z-30 text-sm text-gray-700">
              <p className="font-medium mb-2">Hello, Rekha</p>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
