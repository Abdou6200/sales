import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for better maintainability and mapping
const products = [
  {
    id: 1,
    name: "Modern Chair",
    price: "$250",
    image: "..//img-7.png",
    hasColorOptions: true,
    badge: null,
  },
  {
    id: 2,
    name: "Folding Table",
    price: "$250",
    image: "..//img-8.png",
    hasColorOptions: false,
    badge: { text: "SALE", color: "bg-[#fb5353]" },
  },
  {
    id: 3,
    name: "Classic Armchair",
    price: "$250",
    image: "..//img-9.png",
    hasColorOptions: false,
    badge: null,
  },
  {
    id: 4,
    name: "Papasan Chair",
    price: "$250",
    image: "..//img-10.png",
    hasColorOptions: true,
    badge: null,
  },
  {
    id: 5,
    name: "Modern Chair",
    price: "$250",
    image: "..//img-11.png",
    hasColorOptions: true,
    badge: null,
  },
  {
    id: 6,
    name: "Coffee Table",
    price: "$250",
    image: "..//img-12.png",
    hasColorOptions: false,
    badge: null,
  },
  {
    id: 7,
    name: "Modern Chair",
    price: "$250",
    image: "..//img-13.png",
    hasColorOptions: false,
    badge: null,
  },
  {
    id: 8,
    name: "Coffee Table",
    price: { original: "$250", discounted: "$200" },
    image: "..//img-14.png",
    hasColorOptions: true,
    badge: { text: "NEW", color: "bg-[#242425]" },
  },
];

// Color options for products
const colorOptions = [
  { color: "bg-[#bdbdbd]" },
  { color: "bg-[#a89891]" },
  { color: "bg-[#8f909b]" },
];

export const BestsellersSection = (): JSX.Element => {
  // Split products into two rows for layout
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4, 8);

  return (
    <section className="flex flex-col items-start gap-10 py-[120px] px-6 md:px-12 lg:px-24 xl:px-[312px] w-full">
      <header className="flex items-center justify-between w-full">
        <h2 className="font-bold text-4xl md:text-[50px] text-defaultblack font-['DM_Sans',Helvetica]">
          Bestsellers
        </h2>

        <Button
          variant="outline"
          className="h-[50px] w-40 border border-solid border-black rounded-none font-['DM_Sans',Helvetica] font-medium text-xl"
        >
          View all
        </Button>
      </header>

      {/* First row of products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {firstRowProducts.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <div className="relative">
              <div
                className="w-full h-[350px] bg-cover bg-center bg-[#f6f4f2]"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {product.badge && (
                  <Badge
                    className={`absolute top-6 left-6 px-5 py-[9px] rounded-none ${product.badge.color} font-['DM_Sans',Helvetica] font-medium text-white text-xl`}
                  >
                    {product.badge.text}
                  </Badge>
                )}
              </div>
            </div>
            <CardContent className="flex flex-col items-center gap-5 pt-6 px-0">
              <h3 className="font-['DM_Sans',Helvetica] font-bold text-defaultblack text-2xl">
                {product.name}
              </h3>

              {typeof product.price === "string" ? (
                <p className="font-['Ubuntu',Helvetica] font-medium text-[#00000099] text-xl">
                  {product.price}
                </p>
              ) : (
                <div className="flex items-start gap-2">
                  <span className="font-['Ubuntu',Helvetica] font-medium text-[#00000099] text-xl line-through">
                    {product.price.original}
                  </span>
                  <span className="font-['DM_Sans',Helvetica] font-medium text-defaultblack text-xl">
                    {product.price.discounted}
                  </span>
                </div>
              )}

              {product.hasColorOptions && (
                <div className="flex items-start gap-2">
                  {colorOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`${option.color} w-4 h-4 rounded-lg`}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Second row of products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {secondRowProducts.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <div className="relative">
              <div
                className="w-full h-[350px] bg-cover bg-center bg-[#f6f4f2]"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {product.badge && (
                  <Badge
                    className={`absolute top-6 left-6 px-5 py-[9px] rounded-none ${product.badge.color} font-['DM_Sans',Helvetica] font-medium text-white text-xl`}
                  >
                    {product.badge.text}
                  </Badge>
                )}
              </div>
            </div>
            <CardContent className="flex flex-col items-center gap-5 pt-6 px-0">
              <h3 className="font-['DM_Sans',Helvetica] font-bold text-defaultblack text-2xl">
                {product.name}
              </h3>

              {typeof product.price === "string" ? (
                <p className="font-['Ubuntu',Helvetica] font-medium text-[#00000099] text-xl">
                  {product.price}
                </p>
              ) : (
                <div className="flex items-start gap-2">
                  <span className="font-['Ubuntu',Helvetica] font-medium text-[#00000099] text-xl line-through">
                    {product.price.original}
                  </span>
                  <span className="font-['DM_Sans',Helvetica] font-medium text-defaultblack text-xl">
                    {product.price.discounted}
                  </span>
                </div>
              )}

              {product.hasColorOptions && (
                <div className="flex items-start gap-2">
                  {colorOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`${option.color} w-4 h-4 rounded-lg`}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
