import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import sampleData from "../../Data/users";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const friend = sampleData.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <div>Friend not found!</div>;
  }

  const handleAction = (action) => {
    alert(`${action} action performed for ${friend.name}`);
    navigate("/friends");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{friend.name}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://via.placeholder.com/300"
          alt="profile"
          className="w-40 h-40 rounded-full"
        />
        <div>
          <p className="mb-2">
            <strong>Username:</strong> @{friend.username}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {friend.email}
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> {friend.phone}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {friend.address.street}, {friend.address.city}, {friend.address.zipcode}
          </p>
          <p className="mb-2">
            <strong>Company:</strong> {friend.company.name}
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => handleAction("Unfriend")}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Unfriend
        </button>
        <button
          onClick={() => handleAction("Block")}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Block
        </button>
        <button
          onClick={() => handleAction("Restrict")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Restrict
        </button>
      </div>
    </div>
  );
};

export default FriendDetails;
