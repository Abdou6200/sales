import React, { useEffect, useState } from "react";
import { BonFormModal } from "../BonFormModal/BonFormModal";

interface BonReduction {
  _id: string;
  title: string;
  code: string;
  remise: string;
  duree: string; // assuming it's a date string
  picture: string;
  description: string;
  createdAt: string;
}

export const InfoSection = () => {
  const [bons, setBons] = useState<BonReduction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingBon, setEditingBon] = useState<BonReduction | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchBons = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/bonreduction?page=1&perPage=100", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBons(data.docs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bons:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBons();
  }, []);

  const handleDelete = async (bonId: string) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this bon de réduction?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/bonreduction/${bonId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setBons((prev) => prev.filter((bon) => bon._id !== bonId));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBons = bons.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bons.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bons de Réduction</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ADD NEW +
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading bons...</p>
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
              {currentBons.map((bon) => (
                <tr key={bon._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={bon.picture.startsWith("http")
                        ? bon.picture
                        : `http://localhost:3000/${bon.picture}`}
                      alt={bon.title}
                      className="w-12 h-12 rounded"
                    />
                  </td>
                  <td className="p-3">{bon.title}</td>
                  <td className="p-3">{bon.code}</td>
                  <td className="p-3">{bon.remise}</td>
                  <td className="p-3">{new Date(bon.duree).toLocaleDateString()}</td>
                  <td className="p-3">{bon.description}</td>
                  <td className="p-3 space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => setEditingBon(bon)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(bon._id)}
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
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, bons.length)} of {bons.length} entries
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

      {(showModal || editingBon) && (
        <BonFormModal
          existingBon={editingBon || undefined}
          onClose={() => {
            setShowModal(false);
            setEditingBon(null);
          }}
          onSuccess={() => {
            fetchBons();
            setShowModal(false);
            setEditingBon(null);
          }}
        />
      )}
    </div>
  );
};
