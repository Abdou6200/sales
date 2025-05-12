import React, { useEffect, useState } from "react";
import { PartnerFormModal } from "../PartnerFormModal/PartnerFormModal"; // Ensure the modal is for Partner

interface Partner {
  _id: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  city: string;
  category: string; 
  verified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export const InfoSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<any[]>([]);  // Store categories as an array
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);  // Loading state for categories
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch partners from API
  const fetchPartners = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/partners?page=1&perPage=100", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPartners(data.docs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching partners:", error);
        setLoading(false);
      });
  };

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      setCategories(data.docs || []);
      setLoadingCategories(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    fetchPartners();
    fetchCategories();
  }, []);

  // Find the category name based on the category ID
  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.name : "Unknown";
  };

  const handleDelete = async (partnerId: string) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this partner?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/partners/${partnerId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setPartners((prev) => prev.filter((partner) => partner._id !== partnerId));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete partner");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Server error");
    }
  };

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPartners = partners.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Partners List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ADD NEW +
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Loading partners...</p>
      ) : (
        <>
          <table className="min-w-full text-left text-sm">
            <thead className="border-b font-medium text-gray-700">
              <tr>
                <th className="p-3">Avatar</th>
                <th className="p-3">Company Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">City</th>
                <th className="p-3">Category</th>
                <th className="p-3">Created At</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPartners.map((partner) => (
                <tr key={partner._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={partner.avatar.startsWith("http")
                        ? partner.avatar
                        : `http://localhost:3000/${partner.avatar}`}
                      alt={partner.companyName}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-3">{partner.companyName}</td>
                  <td className="p-3">{partner.email}</td>
                  <td className="p-3">{partner.phoneNumber}</td>
                  <td className="p-3">{partner.city}</td>
                  <td className="p-3">{getCategoryName(partner.category)}</td>
                  <td className="p-3">{new Date(partner.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => setEditingPartner(partner)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(partner._id)}
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
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, partners.length)} of {partners.length} entries
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

      {(showModal || editingPartner) && (
        <PartnerFormModal
          existingPartner={editingPartner || undefined}
          onClose={() => {
            setShowModal(false);
            setEditingPartner(null);
          }}
          onSuccess={() => {
            fetchPartners();
            setShowModal(false);
            setEditingPartner(null);
          }}
        />
      )}
    </div>
  );
};
