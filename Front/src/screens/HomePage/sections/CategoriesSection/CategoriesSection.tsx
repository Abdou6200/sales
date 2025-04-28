import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define category data for mapping
const categories = [
  {
    id: 1,
    name: "Tables",
    products: "24 products",
    image: "..//img.png",
  },
  {
    id: 2,
    name: "Chairs",
    products: "28 products",
    image: "..//img-1.png",
  },
  {
    id: 3,
    name: "Armchairs",
    products: "16 products",
    image: "..//img-2.png",
  },
  {
    id: 4,
    name: "Sofas",
    products: "42 products",
    image: "/img-3.png",
  },
];

export const CategoriesSection = (): JSX.Element => {
  return (
    <section className="py-24 w-full">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-bold text-5xl text-defaultblack font-['DM_Sans',Helvetica]">
            Shop by Categories
          </h2>

          <Button
            variant="outline"
            className="w-40 h-[50px] border-black text-black font-medium text-xl font-['DM_Sans',Helvetica]"
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col gap-5">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[306px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl text-defaultblack font-['DM_Sans',Helvetica]">
                  {category.name}
                </h3>
                <p className="font-medium text-base text-[#00000099] font-['DM_Sans',Helvetica]">
                  {category.products}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
