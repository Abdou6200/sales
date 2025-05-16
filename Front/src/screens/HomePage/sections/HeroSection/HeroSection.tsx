import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

type PromoItem = {
  _id: string;
  picture: string;
  remise?: string;
  code?: string;
};

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<PromoItem[]>([]);

  const fetchRandomPromos = async () => {
    const token = localStorage.getItem("token");

    const fetchFrom = async (url: string) => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data.docs || [];
    };

    try {
      const [bonReductions, codePromos] = await Promise.all([
        fetchFrom("http://localhost:3000/api/bonreduction?page=1&perPage=100"),
        fetchFrom("http://localhost:3000/api/codepromo?page=1&perPage=100"),
      ]);

      const combinedMap = new Map<string, PromoItem>();
      const combined = [...bonReductions, ...codePromos];

      for (const item of combined) {
        if (!combinedMap.has(item._id)) {
          combinedMap.set(item._id, item);
        }
      }

      const uniqueItems = Array.from(combinedMap.values());
      const selected: PromoItem[] = [];

      while (selected.length < 4 && uniqueItems.length > 0) {
        const index = Math.floor(Math.random() * uniqueItems.length);
        selected.push(uniqueItems.splice(index, 1)[0]);
      }

      setCards(selected);
    } catch (err) {
      console.error("Failed to load promo data", err);
    }
  };

  useEffect(() => {
    fetchRandomPromos();
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center py-24 min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/bgred.jpg)",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-row items-center justify-between gap-8 flex-wrap lg:flex-nowrap">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[636px] items-start gap-10">
          <Badge className="bg-[#ffffff1a] hover:bg-[#ffffff30] text-white rounded-none px-4 py-2 text-sm">
            <span className="font-bold tracking-wide">Offers</span>
          </Badge>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-[70px] font-bold leading-tight lg:leading-[80px]">
            <span className="text-red-500">Sales.tn</span>
            <br />
            The best out there
          </h1>

          <p className="text-[#ffffffcc] text-base leading-relaxed max-w-[550px]">
            Here where you can find the best offers out there in all of Tunisia.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => navigate("/shop")}
              className="w-[160px] h-[52px] bg-red-600 hover:bg-red-500 rounded-none text-base font-semibold"
            >
              Shop now
            </Button>

            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              className="w-[160px] h-[52px] border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 rounded-none text-base font-medium"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Right Section – Promo Cards */}
        <div className="grid grid-cols-2 gap-4 w-[460px] flex-shrink-0">
          {cards.map((item, index) => (
            <Card
              key={item._id || index}
              className="aspect-square w-full rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-red-500/30 transition-all duration-300"
            >
              <CardContent className="relative h-full p-0 group">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded shadow">
                  {item.remise || item.code}
                </div>
                <img
                  src={
                    item.picture?.startsWith("http")
                      ? item.picture
                      : `http://localhost:3000/${item.picture}`
                  }
                  alt="Promo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
