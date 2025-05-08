import React, { useEffect, useState } from "react";

interface User {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  verified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export const InfoSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.docs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">User List</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          ADD NEW +
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading users...</p>
      ) : (
        <>
          <table className="min-w-full text-left text-sm">
            <thead className="border-b font-medium text-gray-700">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={`http://localhost:3000/${user.avatar}`}
                      alt={user.userName}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">{user.phoneNumber}</td>
                  <td className="p-3">—</td> {/* Placeholder for amount */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        user.verified ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {user.verified ? "Safe" : "Danger"}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-gray-400 hover:text-gray-600">•••</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center text-sm">
            <p>Showing 1 to {users.length} of {users.length} entries</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-100 rounded">1</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
