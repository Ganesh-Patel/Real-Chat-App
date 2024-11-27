import React from "react";
import { Link } from "react-router-dom";
import sampleData from "../../Data/users";

const FriendsList = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl ml-6 font-bold mb-4">Friends List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleData.map((friend) => (
          <div
            key={friend.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold">{friend.name}</h3>
            <p className="text-gray-500">@{friend.username}</p>
            <Link
              to={`/friend/${friend.id}`}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
