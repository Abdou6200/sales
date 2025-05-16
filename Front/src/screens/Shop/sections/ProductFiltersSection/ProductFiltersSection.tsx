import React, { useEffect, useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

interface Offer {
  _id: string;
  title: string;
  remise: number;
  partner: {
    companyName: string;
    avatar: string;
  };
  category: {
    name: string;
  };
}

export const ProductFiltersSection = (): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([]);
  const [partners, setPartners] = useState<string[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("latest");

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    filterOffers();
  }, [selectedCategories, selectedPartners, sortOrder, offers]);

  const fetchAllData = async () => {
    try {
      const [catRes, partRes, codePromoRes, bonReductionRes] = await Promise.all([
        fetch("http://localhost:3000/api/categories"),
        fetch("http://localhost:3000/api/partners"),
        fetch("http://localhost:3000/api/codepromo"),
        fetch("http://localhost:3000/api/bonreduction"),
      ]);

      const catData = await catRes.json();
      const partData = await partRes.json();
      const codePromo = await codePromoRes.json();
      const bonReduction = await bonReductionRes.json();

      const categories = (catData.docs || []).map((c: any) => c.name);
      const partners = (partData.docs || []).map((p: any) => p.companyName);
      const allOffers = [...(codePromo.docs || []), ...(bonReduction.docs || [])];

      setCategories(categories);
      setPartners(partners);
      setOffers(allOffers);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const filterOffers = () => {
    let filtered = [...offers];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((offer) =>
        selectedCategories.includes(offer.category?.name)
      );
    }
    if (selectedPartners.length > 0) {
      filtered = filtered.filter((offer) =>
        selectedPartners.includes(offer.partner?.companyName)
      );
    }

    if (sortOrder === "price-low") {
      filtered.sort((a, b) => a.remise - b.remise);
    } else if (sortOrder === "price-high") {
      filtered.sort((a, b) => b.remise - a.remise);
    }

    setFilteredOffers(filtered);
  };

  const toggleSelection = (value: string, setFunc: Function, currentState: string[]) => {
    if (currentState.includes(value)) {
      setFunc(currentState.filter((v) => v !== value));
    } else {
      setFunc([...currentState, value]);
    }
  };

  return (
    <div className="flex gap-6 py-[60px] px-6 md:px-12 lg:px-24">
      {/* Filters */}
      <div className="w-full max-w-[306px] flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl pl-3 text-defaultblack">Filter by Categories</h3>
          <div className="flex flex-col gap-2 pl-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${idx}`}
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={() => toggleSelection(cat, setSelectedCategories, selectedCategories)}
                />
                <label htmlFor={`category-${idx}`} className="text-xl font-medium">{cat}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl pl-3 text-defaultblack">Filter by Brand</h3>
          <div className="flex flex-col gap-2 pl-3">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Checkbox
                  id={`partner-${idx}`}
                  checked={selectedPartners.includes(partner)}
                  onCheckedChange={() => toggleSelection(partner, setSelectedPartners, selectedPartners)}
                />
                <label htmlFor={`partner-${idx}`} className="text-xl font-medium">{partner}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-[#00000099]">
            Showing {filteredOffers.length} results
          </div>
          <Select defaultValue="latest" onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] h-10 border-2 border-[#947458]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Sort by latest</SelectItem>
              <SelectItem value="price-low">Remise: Low to High</SelectItem>
              <SelectItem value="price-high">Remise: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredOffers.map((offer, idx) => (
            <Card key={idx} className="w-[306px] border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="flex justify-center items-center py-4">
                <img
                  src={
                    offer.partner?.avatar?.startsWith("http")
                      ? offer.partner.avatar
                      : `http://localhost:3000/${offer.partner?.picture?.replace(/^\/+/, "")}`
                  }
                  alt={offer.partner?.companyName || "Unknown"}
                  className="w-16 h-16 object-contain rounded-full border"
                />
              </div>
              <CardContent className="flex flex-col items-center gap-2 pb-4">
                <h4 className="text-xl font-bold text-center">{offer.title}</h4>
                <div className="text-lg text-gray-600">
                  {offer.remise} Off
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
