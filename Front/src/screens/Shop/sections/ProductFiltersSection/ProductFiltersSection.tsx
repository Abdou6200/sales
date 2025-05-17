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
import { Dialog, DialogContent, DialogTrigger } from "../../../../components/ui/Dialog";
import { Button } from "../../../../components/ui/button";

interface Offer {
  _id: string;
  title: string;
  remise: string | number;
  code?: string;
  source?: "bonreduction" | "codepromo";
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
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    filterOffers();
  }, [selectedCategories, selectedPartners, sortOrder, offers]);

  const normalizeOffers = (offers: any[], source: "bonreduction" | "codepromo"): Offer[] =>
    offers.map((offer) => ({
      ...offer,
      source,
      partner: {
        ...offer.partner,
        avatar: offer.picture || "",
      },
      category:
        typeof offer.category === "string"
          ? { name: offer.category }
          : offer.category || { name: "Unknown" },
      remise:
        typeof offer.remise === "string" && offer.remise.includes("%")
          ? offer.remise.replace("%", "")
          : offer.remise,
    }));

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
      const allOffers = [
        ...normalizeOffers(codePromo.docs || [], "codepromo"),
        ...normalizeOffers(bonReduction.docs || [], "bonreduction"),
      ];

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
      filtered.sort((a, b) => Number(a.remise) - Number(b.remise));
    } else if (sortOrder === "price-high") {
      filtered.sort((a, b) => Number(b.remise) - Number(a.remise));
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
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <Card
                  className="w-[306px] border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedOffer(offer)}
                >
                  <div className="flex justify-center items-center py-4">
                    <img
                      src={offer.partner?.avatar || "/default-avatar.png"}
                      alt={offer.partner?.companyName || "Unknown"}
                      className="w-16 h-16 object-contain rounded-full border"
                    />
                  </div>
                  <CardContent className="flex flex-col items-center gap-2 pb-4">
                    <h4 className="text-xl font-bold text-center">{offer.title}</h4>
                    <div className="text-lg text-gray-600">{offer.remise}% Off</div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-md text-center p-6 bg-white rounded-xl shadow-xl">
                <div className="flex flex-col items-center gap-4">
                  <img src="/Logo1BG.png" alt="Logo" className="w-28 h-28 object-contain" />
                  <img
                    src={selectedOffer?.partner.avatar || "/default-avatar.png"}
                    alt={selectedOffer?.partner.companyName || "Unknown"}
                    className="w-24 h-24 rounded-full border"
                  />
                  <h3 className="text-2xl font-bold">{selectedOffer?.title}</h3>
                  <p className="text-xl text-green-600 font-semibold">
                    {selectedOffer?.remise}% Off
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Type: {selectedOffer?.source === "bonreduction" ? "Bon de Réduction" : "Code Promo"}
                  </p>
                 {selectedOffer?.code && (
                    <div className="mt-2 flex flex-col items-center">
                      <p
                        className={`text-lg font-mono py-2 px-4 rounded mt-1 transition-all w-fit ${
                          localStorage.getItem("token")
                            ? "bg-gray-100 text-black"
                            : "bg-gray-200 text-gray-400 blur-sm select-none pointer-events-none"
                        }`}
                      >
                        {selectedOffer.code}
                      </p>

                      {!localStorage.getItem("token") ? (
                        <p className="text-sm text-gray-500 mt-2 italic">Login to get the code</p>
                      ) : (
                        <Button
                          className="mt-2"
                          onClick={() => navigator.clipboard.writeText(selectedOffer.code || "")}
                        >
                          Copy Code
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};