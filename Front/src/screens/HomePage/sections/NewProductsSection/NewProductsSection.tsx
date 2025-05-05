import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Product data for mapping
const categories = ["Trending", "Food", "Decor", "Make Up", "Jewelery"];

const products = [
  {
    id: 1,
    name: "Modern Armchair",
    price: "$250",
    image: "..//img-4.png",
    icon: "/icon.svg",
  },
  {
    id: 2,
    name: "Egg chair",
    price: "$280",
    image: "..//img-5.png",
    icon: "/icon.svg",
  },
  {
    id: 3,
    name: "Chaise Lounge",
    price: "$450",
    image: "..//img-6.png",
    icon: "/icon-1.svg",
    rotate: true,
  },
];

export const NewProductsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] px-6 py-[120px] w-full bg-[#f8f9fa]">
      <div className="flex flex-col items-center gap-10">
        <h2 className="font-bold text-[50px] text-defaultblack [font-family:'DM_Sans',Helvetica]">
          Categories
        </h2>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex gap-[68px] bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`px-2 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#947458] data-[state=active]:shadow-none data-[state=active]:bg-transparent [font-family:'DM_Sans',Helvetica] font-medium text-2xl text-defaultblack`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-end gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-[416px] border-none bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-5 p-0">
              <div
                className={`flex w-full h-[480px] items-end justify-end gap-2.5 p-6 relative ${product.rotate ? "rotate-180" : ""}`}
                style={{
                  background: `url(${product.image}) 50% 50% / cover, linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
                }}
              >
                <div className="inline-flex items-center justify-center p-2 bg-white rounded-[20px]">
                  {product.rotate ? (
                    <img
                      className="-rotate-180 w-6 h-6"
                      alt="Icon"
                      src={product.icon}
                    />
                  ) : (
                    <img className="w-6 h-6" alt="Icon" src={product.icon} />
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-bold text-2xl text-black leading-5 [font-family:'Ubuntu',Helvetica]">
                    {product.name}
                  </h3>

                  <div className="flex items-start gap-2">
                    <div className="bg-[#bdbdbd] w-4 h-4 rounded-lg" />
                    <div className="bg-[#a89891] w-4 h-4 rounded-lg" />
                    <div className="bg-[#8f909b] w-4 h-4 rounded-lg" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-normal text-xl text-black leading-5 [font-family:'Ubuntu',Helvetica]">
                    {product.price}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
