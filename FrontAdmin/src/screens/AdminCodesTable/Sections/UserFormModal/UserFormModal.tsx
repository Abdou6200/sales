// ✅ UserFormModal.tsx
import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

interface UserFormModalProps {
  onClose: () => void;
  onSuccess: () => void;
  existingUser?: {
    _id: string;
    userName: string;
    email: string;
    phoneNumber: string;
    age: number;
    avatar?: string;
  };
}

export const UserFormModal = ({ onClose, onSuccess, existingUser }: UserFormModalProps) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    avatar: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (existingUser) {
      setFormData({
        userName: existingUser.userName,
        email: existingUser.email,
        phoneNumber: existingUser.phoneNumber,
        age: existingUser.age.toString(),
        password: "",
        avatar: existingUser.avatar || "",
      });
    }
  }, [existingUser]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.userName.trim()) newErrors.userName = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.age || parseInt(formData.age) < 13) newErrors.age = "Age must be 13+";
    if (!/^(2|9|4|5|7)[0-9]{7}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid Tunisian phone number";
    if (!existingUser && formData.password.length < 6) newErrors.password = "Password too short";
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
    const url = existingUser
      ? `http://localhost:3000/api/users/${existingUser._id}`
      : "http://localhost:3000/api/users";
    const method = existingUser ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
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
          {existingUser ? "Edit User" : "Add New User"}
        </h2>

        {[
          { label: "Name", field: "userName" },
          { label: "Email", field: "email" },
          { label: "Phone Number", field: "phoneNumber" },
          { label: "Age", field: "age" },
          { label: "Avatar URL", field: "avatar" },
        ].map(({ label, field }) => (
          <div className="mb-3" key={field}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <Input
              type={field === "age" ? "number" : "text"}
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
          </div>
        ))}

        {/* Conditionally render the password field only if it's a new user */}
        {!existingUser && (
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
            {existingUser ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};
