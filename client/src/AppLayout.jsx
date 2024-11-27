import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
const AppLayout = ({ children }) => {
    return (
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />
  
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <Sidebar />
          
  
          {/* Main Content */}
          <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">{children}</main>
        </div>
      </div>
    );
  };
  
  export default AppLayout;
