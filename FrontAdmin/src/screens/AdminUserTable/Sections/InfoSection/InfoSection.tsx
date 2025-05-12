// ✅ InfoSection.tsx
import React, { useEffect, useState } from "react";
import { UserFormModal } from "../UserFormModal/UserFormModal";

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
  age: number;
}

export const InfoSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchUsers = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/users?page=1&perPage=100", {
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
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId: string) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userId));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete user");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
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
                <th className="p-3">Avatar</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Age</th>
                <th className="p-3">Created At</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                  <img
                    src={
                      user.avatar.startsWith("http")
                        ? user.avatar
                        : `http://localhost:3000/${user.avatar}`
                    }
                    alt={user.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  </td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phoneNumber}</td>
                  <td className="p-3">{user.age}</td>
                  <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => setEditingUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between items-center text-sm">
            <p>
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, users.length)} of {users.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {(showModal || editingUser) && (
        <UserFormModal
          existingUser={editingUser || undefined}
          onClose={() => {
            setShowModal(false);
            setEditingUser(null);
          }}
          onSuccess={() => {
            fetchUsers();
            setShowModal(false);
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
};
