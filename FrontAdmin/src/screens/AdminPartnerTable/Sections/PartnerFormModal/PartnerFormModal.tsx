import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

interface PartnerFormModalProps {
  onClose: () => void;
  onSuccess: () => void;
  existingPartner?: {
    _id: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    city: string;
    category: string;  // Category is an ObjectId (string or ObjectId reference)
    avatar: string;
  };
}

export const PartnerFormModal = ({ onClose, onSuccess, existingPartner }: PartnerFormModalProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    city: "",
    category: "",  // This will hold the ObjectId of the selected category
    avatar: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [categories, setCategories] = useState<any[]>([]);  // Store categories as an array
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);  // Loading state for categories

  useEffect(() => {
    // Fetch categories from the backend when the modal is loaded
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        const data = await res.json();

        // Check if the response contains a 'docs' array (if using pagination, or simply use the array directly)
        console.log("Fetched categories:", data);

        // If 'docs' exists in the response, use it as the categories
        if (data && Array.isArray(data.docs)) {
          setCategories(data.docs);
        } else if (Array.isArray(data)) {
          // If data is already an array
          setCategories(data);
        } else {
          console.error("Categories data is not in the expected format:", data);
        }

        setLoadingCategories(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      }
    };

    fetchCategories();

    if (existingPartner) {
      setFormData({
        companyName: existingPartner.companyName,
        email: existingPartner.email,
        phoneNumber: existingPartner.phoneNumber,
        city: existingPartner.city,
        category: existingPartner.category,  // This should be the ObjectId of the category
        avatar: existingPartner.avatar || "",
        password: "",  // Do not pre-fill password for security reasons
      });
    }
  }, [existingPartner]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phoneNumber || !/^(2|9|4|5|7)[0-9]{7}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.category) newErrors.category = "Category is required";
    // If updating an existing partner, password should be optional unless it's being changed
    if (!existingPartner && formData.password.length < 6) newErrors.password = "Password too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const token = localStorage.getItem("token");
    const url = existingPartner
      ? `http://localhost:3000/api/partners/${existingPartner._id}`
      : "http://localhost:3000/api/partners";
    const method = existingPartner ? "PUT" : "POST";

    // Prepare the data without `verified`, `registerConfirmationCode`, and `forgetConfirmationCode`
    const dataToSend = { ...formData };

    // If the password is empty (i.e. it's not updated), remove it from the request body
    if (!formData.password) delete dataToSend.password;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        onSuccess();
      } else {
        const data = await res.json();
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md z-50"
      >
        <img src="/logo1bg-1.png" alt="Logo" className="w-32 mx-auto mb-4" />

        <h2 className="text-lg font-semibold mb-4 text-center">
          {existingPartner ? "Edit Partner" : "Add New Partner"}
        </h2>

        {[ // Fields based on Joi schema
          { label: "Company Name", field: "companyName" },
          { label: "Email", field: "email" },
          { label: "Phone Number", field: "phoneNumber" },
          { label: "City", field: "city" },
        ].map(({ label, field }) => (
          <div className="mb-3" key={field}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <Input
              type={field === "phoneNumber" ? "tel" : "text"}  // Handle phone number type
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
          </div>
        ))}

        {/* Category dropdown */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Category</label>
          {loadingCategories ? (
            <p>Loading categories...</p>
          ) : (
            <select
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name} {/* Show category name here */}
                </option>
              ))}
            </select>
          )}
          {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
        </div>

        {/* Avatar URL */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Avatar URL</label>
          <Input
            type="text"
            value={formData.avatar}
            onChange={(e) => handleChange("avatar", e.target.value)}
            placeholder="Enter Avatar URL"
          />
        </div>

        {/* Password field only for new partners */}
        {!existingPartner && (
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter password"
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">
            {existingPartner ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};
