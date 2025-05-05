import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();

  const productCards = [
    { price: "$199", backgroundImage: "/card.png" },
    {
      isPromo: true,
      title: "25% OFF",
      subtitle: "custom-made furniture",
      backgroundImage: "/card-1.png",
    },
    { price: "$99", backgroundImage: "/card-1.png" },
    { price: "$199", backgroundImage: "/img-10.png" },
  ];

  return (
    <section
      className="flex items-center gap-16 py-36 px-16 md:px-24 lg:px-32 relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/bgred.jpg)",
      }}
    >
      <div className="flex flex-col w-full lg:w-[636px] items-start gap-20">
        <div className="flex flex-col items-start gap-10 w-full">
          <Badge className="bg-[#ffffff1a] hover:bg-[#ffffff30] text-white rounded-none px-4 py-3">
            <span className="font-bold text-base tracking-[0.80px]">
              Offers
            </span>
          </Badge>

          <h1 className="text-white text-[70px] font-bold leading-[80px]">
            <span className="text-red-500">Sales.tn</span>
            <br />
            The best out there
          </h1>

          <p className="text-[#ffffffcc] text-base leading-7 max-w-[550px]">
            Here where you can find the best offers out there in all of Tunisia.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => navigate("/shop")}
            className="w-[180px] h-[60px] bg-red-600 hover:bg-red-500 rounded-none text-lg font-bold"
          >
            Shop now
          </Button>

          <Button
            onClick={() => navigate("/about")}
            variant="outline"
            className="w-[180px] h-[60px] border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 rounded-none text-lg font-medium"
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="hidden lg:flex flex-wrap w-[449px] gap-6">
        {productCards.map((card, index) => (
          <Card
            key={index}
            className={`w-[212px] h-[212px] rounded-none ${
              card.isPromo
                ? "bg-red-600"
                : ""
            }`}
            style={
              card.backgroundImage && !card.isPromo
                ? {
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <CardContent
              className={`p-4 h-full ${
                card.isPromo ? "flex flex-col items-center justify-center" : ""
              }`}
            >
              {card.isPromo ? (
                <div className="flex flex-col items-center justify-center gap-5 w-full">
                  <h3 className="font-bold text-[33px] text-white text-center">
                    {card.title}
                  </h3>
                  <p className="font-medium text-lg text-white text-center">
                    {card.subtitle}
                  </p>
                </div>
              ) : (
                <span className="font-medium text-xl text-[#947458]">
                  {card.price}
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
