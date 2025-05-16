import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface Partner {
  _id: string;
  companyName: string;
  avatar: string;
}

export const ProductCategoriesSection = (): JSX.Element => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await fetch("http://localhost:3000/api/partners");
      const data = await res.json();
      const allPartners: Partner[] = data?.docs || [];

      // Shuffle and take a selection (loop will duplicate it)
      const selected = allPartners.sort(() => 0.5 - Math.random()).slice(0, 10);
      setPartners(selected);
    };

    fetchPartners();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#f9f9f9] py-6">
      <div className="whitespace-nowrap animate-slide flex gap-8">
        {[...partners, ...partners].map((partner, idx) => (
          <Card
            key={`${partner._id}-${idx}`}
            className="w-[100px] h-[130px] flex-shrink-0 p-2 flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white shadow hover:shadow-lg transition-all"
          >
            <CardContent className="flex flex-col items-center justify-center p-0">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                <img
                  src={
                    partner.avatar?.startsWith("http")
                      ? partner.avatar
                      : `http://localhost:3000/${partner.avatar}`
                  }
                  alt={partner.companyName}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-black">
                {partner.companyName}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
