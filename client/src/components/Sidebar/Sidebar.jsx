import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { ImMenu2 } from 'react-icons/im';

const Sidebar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="m-2 rounded absolute top-15 left-2 z-40"
      >
        {isOpen ? (
          <IoIosCloseCircle size={50} className={`transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        ) : (
          <ImMenu2 size={50} className={`transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        )}
      </button>

      <div className={`transition-all duration-300 ${isOpen ? 'w-80 p-6' : 'w-0 overflow-hidden'} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} h-screen shadow-lg`}>
        {isOpen && (
          <div>
            <h2 className="font-bold text-xl mb-4 mt-12">Chat App</h2>

            <div className="mb-4">
              <label className="block mb-1">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                placeholder="Search by title or keyword"
              />
            </div>

            <nav className="flex flex-col">
              <Link to="/" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
                Home
              </Link>
              <Link to="/my-friends" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
                My Friends
              </Link>
              <Link to="/requests" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
                Requests
              </Link>
              <Link to="/requested" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
                Requested
              </Link>
              <Link to="/suggestions" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
                Suggestions
              </Link>
            </nav>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">More</h3>
              <Link to="/privacy" className="block mb-2 text-sm hover:underline transition duration-200">Privacy Policy</Link>
              <Link to="/terms" className="block text-sm hover:underline transition duration-200">Terms of Service</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
