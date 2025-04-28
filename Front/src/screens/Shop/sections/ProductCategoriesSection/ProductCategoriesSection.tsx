import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define category data for mapping
const categories = [
  {
    name: "Armchairs",
    products: 124,
    icon: "/group.png",
  },
  {
    name: "Cabinets",
    products: 20,
    icon: "/group-1.png",
  },
  {
    name: "Sofas",
    products: 42,
    icon: "/group-2.png",
    isImage: true,
  },
  {
    name: "Chairs",
    products: 120,
    icon: "/group-3.png",
    isImage: true,
  },
  {
    name: "Decor",
    products: 299,
    icon: "/group-4.png",
  },
];

export const ProductCategoriesSection = (): JSX.Element => {
  return (
    <section className="flex justify-between py-[60px] px-6 md:px-12 lg:px-24 xl:px-[312px] bg-[#f9f9f9] w-full">
      {categories.map((category, index) => (
        <div key={index} className="flex items-start gap-5">
          <Card className="w-16 h-16 p-0 bg-white border-none shadow-none">
            <CardContent className="flex items-center justify-center p-0 h-full">
              {category.isImage ? (
                <img
                  className="w-10 h-10"
                  alt={category.name}
                  src={category.icon}
                />
              ) : (
                <div
                  className="w-10 h-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.icon})` }}
                />
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col items-start gap-2">
            <h3 className="mt-[-1.00px] font-bold text-xl text-center leading-normal [font-family:'DM_Sans',Helvetica] text-black tracking-[0]">
              {category.name}
            </h3>
            <p className="font-bold text-[#00000099] text-base text-center [font-family:'DM_Sans',Helvetica] tracking-[0] leading-normal">
              {category.products} products
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
