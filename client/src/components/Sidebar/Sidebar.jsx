import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  const sections = ["Friends", "Requests", "Sent Requests", "Suggestions"];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="bg-blue-600 text-white p-2 fixed top-4 left-4 z-50 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 w-64 p-4 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:w-1/4 z-50`}
      >
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              className="p-2 mb-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Background Overlay for All Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
