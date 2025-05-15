import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

interface Partner {
  _id: string;
  companyName: string;
}

interface CodesFormModalProps {
  onClose: () => void;
  onSuccess: () => void;
  existingCode?: {
    _id: string;
    title: string;
    code: string;
    remise: string;
    duree: string;
    description: string;
    partner: string;
  };
}

export const CodesFormModal = ({ onClose, onSuccess, existingCode }: CodesFormModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    remise: "",
    duree: "",
    description: "",
    partner: "",
  });

  const [partners, setPartners] = useState<Partner[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchPartners();
    if (existingCode) {
      setFormData({
        title: existingCode.title,
        code: existingCode.code,
        remise: existingCode.remise,
        duree: existingCode.duree,
        description: existingCode.description,
        partner: existingCode.partner,
      });
    }
  }, [existingCode]);

  const fetchPartners = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/partners?page=1&perPage=100", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setPartners(data.docs || []);
    } catch (err) {
      console.error("Failed to load partners", err);
    }
  };


  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.code.trim()) newErrors.code = "Code is required";
    if (!formData.remise.trim()) newErrors.remise = "Remise is required";
    if (!formData.duree) newErrors.duree = "Duree is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.partner) newErrors.partner = "Partner is required";
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
    const url = existingCode
      ? `http://localhost:3000/api/codepromo/${existingCode._id}`
      : "http://localhost:3000/api/codepromo";
    const method = existingCode ? "PUT" : "POST";

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
          {existingCode ? "Edit Code Promo" : "Add New Code Promo"}
        </h2>

        {[
          { label: "Title", field: "title" },
          { label: "Code", field: "code" },
          { label: "Remise", field: "remise" },
          { label: "Valid Until", field: "duree", type: "date" },
          { label: "Description", field: "description" },
        ].map(({ label, field, type }) => (
          <div className="mb-3" key={field}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <Input
              type={type || "text"}
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
          </div>
        ))}

        {/* Partner select */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Select Partner</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.partner}
            onChange={(e) => handleChange("partner", e.target.value)}
          >
            <option value="">-- Select Partner --</option>
            {partners.map((partner) => (
              <option key={partner._id} value={partner._id}>
                {partner.companyName}
              </option>
            ))}
          </select>
          {errors.partner && <p className="text-xs text-red-500">{errors.partner}</p>}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {existingCode ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};
