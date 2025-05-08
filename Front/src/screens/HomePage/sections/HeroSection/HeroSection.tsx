import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();

  const productCards = [
    { price: "$199", backgroundImage: "/card.png" },
    { price: "$99", backgroundImage: "/card-1.png" },
    { price: "$199", backgroundImage: "/img-10.png" },
    { price: "$49", backgroundImage: "/card-1.png" },
  ];

  return (
    <section
      className="w-full bg-cover bg-center py-24 min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/bgred.jpg)",
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

        {/* Right Section – Cards Only */}
        <div className="grid grid-cols-2 gap-4 w-[449px] flex-shrink-0">
          {productCards.map((card, index) => (
            <Card
              key={index}
              className="aspect-square w-full rounded-none"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent className="p-4 h-full flex items-start justify-start">
                <span className="font-medium text-lg sm:text-xl text-[#947458] bg-black/50 px-2 rounded">
                  {card.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
