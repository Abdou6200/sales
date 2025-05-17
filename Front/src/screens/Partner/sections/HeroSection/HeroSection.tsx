import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

interface PromoItem {
  _id: string;
  title: string;
  remise?: string;
  code?: string;
  duree?: string;
  description?: string;
  picture: string;
  type: "codepromo" | "bonreduction";
}

export const HeroSection = (): JSX.Element => {
  const [promos, setPromos] = useState<PromoItem[]>([]);
  const [type, setType] = useState<"codepromo" | "bonreduction">("codepromo");
  const [formData, setFormData] = useState<Partial<PromoItem>>({});

  const token = localStorage.getItem("token");

  const fetchPromos = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/${type}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPromos(data.docs || []);
    } catch (err) {
      console.error("Error loading promos:", err);
    }
  };

  useEffect(() => {
    fetchPromos();
  }, [type]);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPromos();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const handleCreate = async () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      await fetch(`http://localhost:3000/api/${type}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      setFormData({});
      fetchPromos();
    } catch (err) {
      console.error("Creation failed", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Your Promotions</h1>
      <Tabs defaultValue={type} onValueChange={(v: any) => setType(v)}>
        <TabsList>
          <TabsTrigger value="codepromo">Code Promos</TabsTrigger>
          <TabsTrigger value="bonreduction">Bon Reductions</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {promos.map((item) => (
          <Card key={item._id} className="relative">
            <CardContent className="p-4">
              <img
                src={`http://localhost:3000/${item.picture}`}
                alt="promo"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.remise || item.code}</p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              <Button
                onClick={() => handleDelete(item._id)}
                className="mt-3 bg-red-500 hover:bg-red-600"
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Add New {type === "codepromo" ? "Code Promo" : "Bon de Reduction"}</h2>
        <div className="grid grid-cols-1 gap-4 max-w-md">
          <Input
            placeholder="Title"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Input
            placeholder={type === "codepromo" ? "Code" : "Remise %"}
            value={formData.code || formData.remise || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                ...(type === "codepromo"
                  ? { code: e.target.value }
                  : { remise: e.target.value }),
              })
            }
          />
          <Input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, picture: e.target.files?.[0] })
            }
          />
          <Textarea
            placeholder="Description"
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <Input
            type="date"
            onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
          />
          <Button onClick={handleCreate} className="bg-green-600 hover:bg-green-700">
            Create {type === "codepromo" ? "Code Promo" : "Bon Reduction"}
          </Button>
        </div>
      </div>
    </div>
  );
};