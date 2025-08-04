import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Crown, Menu } from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row pt-14 sm:pt-20">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden px-4 pt-2 mb-2 flex justify-between items-center">
        <button
          className="text-white bg-slate-800 p-2 rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Crown />
        </button>
        <h2 className="text-lg font-bold text-orange-600">Admin Dashboard</h2>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-[20%] bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#000000]
   shadow-2xl md:h-full z-10`}
      >
        <h1 className="bg-sky-700/30 font-bold p-5">Welcome Admin 🫡</h1>
        <ul className="bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#0d0d0d] font-semibold p-4 space-y-4 md:h-full text-white">
          <NavLink
            to="/admindashboard/message"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold"
                : "text-white hover:text-cyan-300"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <li className="text-center p-3 rounded-md transition duration-300 hover:scale-105 hover:bg-orange-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:text-black">
              Contact Messages
            </li>
          </NavLink>

          <NavLink
            to="/admindashboard/usercard"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold"
                : "text-white hover:text-cyan-300"
            }
            onClick={() => setSidebarOpen(false)}
          >
            <li className="text-center p-3 rounded-md transition duration-300 hover:scale-105 hover:bg-orange-400 hover:text-black hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              User Cards
            </li>
          </NavLink>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[80%] h-full overflow-y-auto bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0c4a6e] p-4 md:p-6 text-white customScrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
