import React, { useState } from 'react';
import sampleData from "../../Data/users";

const Suggestions = () => {
  const [friends, setFriends] = useState(sampleData);
  const [selectedUser, setSelectedUser] = useState(null); // For modal

  // Handle sending friend request
  const handleSendRequest = (id) => {
    setFriends(friends.map((user) =>
      user.id === id ? { ...user, isFriend: true } : user
    ));
  };

  // Handle cancelling/removing friend request
  const handleRemoveRequest = (id) => {
    setFriends(friends.map((user) =>
      user.id === id ? { ...user, isFriend: false } : user
    ));
  };

  // Handle removing a user from the list
  const handleRemoveUser = (id) => {
    setFriends(friends.filter((user) => user.id !== id));
    setSelectedUser(null); // Close the modal when user is removed
  };

  // Handle showing user details
  const handleShowDetails = (user) => {
    setSelectedUser(user); // Set the selected user for details
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Suggestions for You</h2>

      {/* Suggestions Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
            onClick={() => handleShowDetails(friend)} // Show details when card clicked
          >
            <img
              src={friend.profilePic}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{friend.name}</h3>

            {/* Conditional Button */}
            <div className="w-full flex justify-center gap-2">
              {friend.isFriend ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    handleRemoveRequest(friend.id);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel Request
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    handleSendRequest(friend.id);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Send Friend Request
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering card click
                  handleRemoveUser(friend.id); // Remove user from list
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing details */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">User Details</h3>
            <div className="flex flex-col items-center mb-4">
              <img
                src={selectedUser.profilePic}
                alt={selectedUser.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{selectedUser.name}</h4>
              <p className="text-sm text-gray-600">Email: {selectedUser.email}</p>
              <p className="text-sm text-gray-600">Location: {selectedUser.location}</p>
              {/* Additional details as needed */}
            </div>

            {/* Modal Buttons (Send Friend Request, Cancel, Remove) */}
            <div className="w-full flex justify-center gap-2 mt-4">
              {selectedUser.isFriend ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing modal
                    handleRemoveRequest(selectedUser.id);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel Request
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing modal
                    handleSendRequest(selectedUser.id);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Send Friend Request
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing modal
                  handleRemoveUser(selectedUser.id); // Remove user from list
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Remove
              </button>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={handleCloseModal}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggestions;
