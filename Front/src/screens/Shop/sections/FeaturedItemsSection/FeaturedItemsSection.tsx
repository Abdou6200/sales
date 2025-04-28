import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const featuredProducts = [
  {
    id: 1,
    name: "Modern Armchair",
    price: "$300",
    originalPrice: "$250",
    image: "..//img-12.png",
    colors: ["#bdbdbd", "#a89891", "#8f909b"],
    iconSrc: "/icon.svg",
  },
  {
    id: 2,
    name: "Folding Table",
    price: "$160",
    image: "..//img-13.png",
    colors: ["#bdbdbd", "#a89891", "#8f909b"],
    iconSrc: "/icon.svg",
  },
  {
    id: 3,
    name: "Classic Chair",
    price: "$99",
    image: "..//img-14.png",
    colors: ["#bdbdbd", "#a89891", "#8f909b"],
    iconSrc: "/icon-1.svg",
    rotateImage: true,
  },
];

export const FeaturedItemsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-10 py-[120px] px-6 md:px-12 lg:px-[312px] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold text-4xl md:text-[50px] text-defaultblack font-['DM_Sans',Helvetica]">
          Featured Products
        </h2>

        <Button
          variant="outline"
          className="h-[50px] w-40 border border-solid border-black rounded-none font-['DM_Sans',Helvetica] font-medium text-xl"
        >
          View all
        </Button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full">
        {featuredProducts.map((product) => (
          <Card
            key={product.id}
            className="w-full md:w-[416px] border-none rounded-none shadow-none"
          >
            <div
              className={`relative w-full h-[480px] ${product.rotateImage ? "rotate-180" : ""}`}
              style={{
                background: `url(${product.image}) 50% 50% / cover, linear-gradient(0deg, rgba(246,244,242,1) 0%, rgba(246,244,242,1) 100%)`,
              }}
            >
              <div
                className={`absolute ${product.rotateImage ? "top-6 left-6" : "bottom-6 right-6"} p-2 bg-white rounded-[20px] flex items-center justify-center`}
              >
                {product.iconSrc.includes("icon-1.svg") ? (
                  <img
                    className={`w-6 h-6 ${product.rotateImage ? "-rotate-180" : ""}`}
                    alt="Icon"
                    src={product.iconSrc}
                  />
                ) : (
                  <img className="w-6 h-6" alt="Icon" src={product.iconSrc} />
                )}
              </div>
            </div>

            <CardContent className="flex flex-col items-start gap-6 p-0 pt-5">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-bold text-2xl text-black font-['Ubuntu',Helvetica] leading-5">
                  {product.name}
                </h3>

                <div className="flex items-start gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-normal text-xl text-black font-['Ubuntu',Helvetica] leading-5">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="font-normal text-xl text-[#00000080] font-['Ubuntu',Helvetica] leading-5 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
