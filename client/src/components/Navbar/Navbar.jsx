import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-xl font-bold">ChatApp</div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm w-1/2 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full px-2 text-gray-700"
        />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <span className="material-icons">notifications</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
            3
          </span>
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
