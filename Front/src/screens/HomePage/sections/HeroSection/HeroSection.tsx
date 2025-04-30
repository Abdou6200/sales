import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Product card data for mapping
  const productCards = [
    { price: "$199", backgroundImage: "..//card.png" },
    {
      isPromo: true,
      title: "25% OFF",
      subtitle: "custom-made furniture",
    },
    { price: "$99", backgroundImage: "..//card-1.png" },
    { price: "$199", backgroundImage: "..//img-10.png" },
  ];

  return (
    <section className="flex items-center gap-16 py-36 px-16 md:px-24 lg:px-32 relative w-full [background:linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//hero.png)_50%_50%_/_cover]">
      <div className="flex flex-col w-full lg:w-[636px] items-start gap-20">
        <div className="flex flex-col items-start gap-10 w-full">
          <Badge className="bg-[#ffffff1a] hover:bg-[#ffffff30] text-white rounded-none px-4 py-3">
            <span className="font-bold text-base tracking-[0.80px] font-['DM_Sans',Helvetica]">
              Offers
            </span>
          </Badge>

          <h1 className="text-white text-[70px] font-bold leading-[80px] font-['DM_Sans',Helvetica]">
            Sales <br />
            The best out there
          </h1>

          <p className="text-[#ffffffcc] text-base leading-7 max-w-[550px] font-['DM_Sans',Helvetica]">
            Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et
            cursus pharetra tellus tincidunt.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="w-[180px] h-[60px] bg-[#947357] hover:bg-[#7d6249] rounded-none text-lg font-bold font-['DM_Sans',Helvetica]">
            Shop now
          </Button>

          <Button
            variant="outline"
            className="w-[180px] h-[60px] border-white text-white hover:bg-white/10 rounded-none text-lg font-medium font-['DM_Sans',Helvetica]"
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
                ? "bg-[#947458]"
                : `[background:url(${card.backgroundImage})_50%_50%_/_cover,linear-gradient(0deg,rgba(246,244,242,1)_0%,rgba(246,244,242,1)_100%)]`
            }`}
          >
            <CardContent
              className={`p-4 h-full ${card.isPromo ? "flex flex-col items-center justify-center" : ""}`}
            >
              {card.isPromo ? (
                <div className="flex flex-col items-center justify-center gap-5 w-full">
                  <h3 className="font-bold text-[33px] text-defaultwhite text-center font-['DM_Sans',Helvetica]">
                    {card.title}
                  </h3>
                  <p className="font-medium text-lg text-defaultwhite text-center font-['DM_Sans',Helvetica]">
                    {card.subtitle}
                  </p>
                </div>
              ) : (
                <span className="font-medium text-xl text-[#947458] font-['Ubuntu',Helvetica]">
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
