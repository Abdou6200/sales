import React, { useEffect, useState } from "react";
import { CodesFormModal } from "../CodesFormModal/CodesFormModal";

interface CodePromo {
  _id: string;
  title: string;
  code: string;
  remise: string;
  duree: string;
  description: string;
  picture: string;
  createdAt: string;
}

export const InfoSection = () => {
  const [codes, setCodes] = useState<CodePromo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingCode, setEditingCode] = useState<CodePromo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchCodes = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/codepromo?page=1&perPage=100", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCodes(data.docs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching code promos:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const handleDelete = async (codeId: string) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this promo code?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/codepromo/${codeId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setCodes((prev) => prev.filter((code) => code._id !== codeId));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete promo code");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCodes = codes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(codes.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Codes Promo List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ADD NEW +
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading promo codes...</p>
      ) : (
        <>
          <table className="min-w-full text-left text-sm">
            <thead className="border-b font-medium text-gray-700">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Code</th>
                <th className="p-3">Remise</th>
                <th className="p-3">Valid Until</th>
                <th className="p-3">Description</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCodes.map((code) => (
                <tr key={code._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={
                        code.picture?.startsWith("http")
                          ? code.picture
                          : `http://localhost:3000/${code.picture}`
                      }
                      alt={code.title}
                      className="w-10 h-10 rounded"
                    />
                  </td>
                  <td className="p-3">{code.title}</td>
                  <td className="p-3">{code.code}</td>
                  <td className="p-3">{code.remise}</td>
                  <td className="p-3">{new Date(code.duree).toLocaleDateString()}</td>
                  <td className="p-3">{code.description}</td>
                  <td className="p-3 space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => setEditingCode(code)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(code._id)}
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
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, codes.length)} of {codes.length} entries
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

      {(showModal || editingCode) && (
        <CodesFormModal
          existingCode={editingCode || undefined}
          onClose={() => {
            setShowModal(false);
            setEditingCode(null);
          }}
          onSuccess={() => {
            fetchCodes();
            setShowModal(false);
            setEditingCode(null);
          }}
        />
      )}
    </div>
  );
};
