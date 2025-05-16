import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

interface Category {
  _id: string;
  name: string;
}

interface Partner {
  _id: string;
  companyName: string;
  avatar: string;
  category: string;
}

export const NewProductsSection = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetchCategories();
    fetchPartners();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      setCategories(data.docs || []);
      if (data.docs && data.docs.length > 0) {
        setSelectedCategory(data.docs[0]._id);
      }
    } catch (err) {
      console.error("Error loading categories", err);
    }
  };

  const fetchPartners = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/partners?page=1&perPage=100", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setPartners(data.docs || []);
    } catch (err) {
      console.error("Error loading partners", err);
    }
  };

  const filteredPartners = partners.filter((partner) => partner.category === selectedCategory);

  return (
    <section className="flex flex-col items-center gap-[60px] px-6 py-[120px] w-full bg-[#f8f9fa]">
      <div className="flex flex-col items-center gap-10">
        <h2 className="font-bold text-[50px] text-defaultblack [font-family:'DM_Sans',Helvetica]">
          Categories
        </h2>

        <Tabs defaultValue={selectedCategory} className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="flex gap-[68px] bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category._id}
                value={category._id}
                className="px-2 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#947458] data-[state=active]:shadow-none data-[state=active]:bg-transparent [font-family:'DM_Sans',Helvetica] font-medium text-2xl text-defaultblack"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredPartners.map((partner) => (
          <Card
            key={partner._id}
            className="w-[300px] bg-white rounded-xl border border-gray-200 hover:border-red-600 transition duration-300 shadow-md overflow-hidden"
          >
            <CardContent className="flex flex-col items-center gap-4 p-4">
              <div className="w-full h-[200px] flex items-center justify-center bg-white">
                <img
                  src={
                    partner.avatar?.startsWith("http")
                      ? partner.avatar
                      : `http://localhost:3000/${partner.avatar}`
                  }
                  alt={partner.companyName}
                  className="object-contain max-h-full"
                />
              </div>

              <h3 className="text-xl font-bold text-black">{partner.companyName}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
