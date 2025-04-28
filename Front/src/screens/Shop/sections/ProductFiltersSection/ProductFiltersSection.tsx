import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Slider } from "../../../../components/ui/slider";

export const ProductFiltersSection = (): JSX.Element => {
  // Data for categories
  const categories = [
    { name: "Chairs", count: 10 },
    { name: "Beds", count: 10 },
    { name: "Cabinets", count: 10 },
    { name: "Sofas", count: 10 },
    { name: "Decor", count: 10 },
    { name: "Sale", count: 10 },
  ];

  // Data for colors
  const colors = [
    { name: "White", color: "#f4f4f4", count: 10 },
    { name: "Black", color: "black", count: 10 },
    { name: "Grey", color: "#d9d9d9", count: 10 },
    { name: "Brown", color: "#6f400a", count: 10 },
    { name: "Blue", color: "#0a349f", count: 10 },
    { name: "Green", color: "#033d13", count: 10 },
  ];

  // Data for materials
  const materials = [
    { name: "Leather", count: 10 },
    { name: "Marble", count: 10 },
    { name: "Metal", count: 10 },
    { name: "Wood", count: 10 },
    { name: "Leatherette", count: 10 },
  ];

  // Data for best sellers
  const bestSellers = [
    { name: "Classic chair", price: "$99", image: "/img-17.svg" },
    { name: "Nightstand", price: "$110", image: "/img-15.svg" },
    { name: "Coffee table", price: "$1800", image: "/img-16.svg" },
    { name: "Papasan chair", price: "$1000", image: "/img-18.svg" },
  ];

  // Data for products
  const products = [
    { name: "Coffee Table", price: "$150", image: "..//img.png", colors: true },
    {
      name: "Papasan Chair",
      price: "$250",
      image: "..//img-1.png",
      tag: { text: "SALE", color: "#fb5353" },
    },
    {
      name: "Classic Chair",
      price: "$99",
      image: "..//img-14.png",
      colors: true,
    },
    {
      name: "Modern Armchair",
      price: "$250",
      image: "..//img-12.png",
      tag: { text: "NEW", color: "#242425" },
      colors: true,
    },
    { name: "Classic Armchair", price: "$180", image: "..//img-4.png" },
    { name: "Bar Stool", price: "$250", image: "..//img-5.png", colors: true },
    { name: "Nightstand", price: "$80", image: "..//img-6.png" },
    { name: "White Table", price: "$250", image: "..//img-7.png" },
    { name: "Egg chair", price: "$280", image: "..//img-8.png" },
    {
      name: "Chaise Lounge",
      price: "$450",
      image: "..//img-9.png",
      tag: { text: "NEW", color: "#242425" },
      colors: true,
    },
    { name: "Modern Bed", price: "$680", image: "..//img-10.png" },
    {
      name: "Folding Table",
      price: "$160",
      image: "..//img-13.png",
      tag: { text: "SALE", color: "#fb5353" },
    },
  ];

  return (
    <div className="flex gap-6 py-[60px] px-6 md:px-12 lg:px-24">
      {/* Left Column - Filters */}
      <div className="w-full max-w-[306px] flex flex-col gap-10">
        {/* Price Filter */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-black [font-family:'DM_Sans',Helvetica]">
            Filter by Price
          </h3>

          <div className="relative h-6 flex items-center">
            <Slider
              defaultValue={[99, 9999]}
              min={0}
              max={10000}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex items-end">
            <p className="[font-family:'DM_Sans',Helvetica] text-xl">
              <span className="font-bold text-[#00000099]">Price:</span>
              <span className="font-bold text-[#000000cc]"> $99 - $9999</span>
            </p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-defaultblack pl-3 [font-family:'DM_Sans',Helvetica]">
            Filter by Categories
          </h3>

          <div className="flex flex-col gap-2 pl-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${index}`}
                    className="w-4 h-4 rounded border-[#40404080]"
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="font-medium text-xl text-defaultblack [font-family:'DM_Sans',Helvetica]"
                  >
                    {category.name}
                  </label>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-xl h-5 px-2 py-1 border-[#00000099] [font-family:'Afacad',Helvetica] font-normal text-[#00000080] text-base"
                >
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-defaultblack p-3 [font-family:'DM_Sans',Helvetica]">
            Filter by Color
          </h3>

          <div className="flex flex-col gap-2 pl-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-[20px]"
                    style={{ backgroundColor: color.color }}
                  />
                  <span className="font-medium text-xl text-defaultblack [font-family:'DM_Sans',Helvetica]">
                    {color.name}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-xl h-5 px-2 py-1 border-[#00000099] [font-family:'Afacad',Helvetica] font-normal text-[#00000080] text-base"
                >
                  {color.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-defaultblack px-3 [font-family:'DM_Sans',Helvetica]">
            Filter by Material
          </h3>

          <div className="flex flex-col gap-2 pl-3">
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`material-${index}`}
                    className="w-4 h-4 rounded border-[#40404080]"
                  />
                  <label
                    htmlFor={`material-${index}`}
                    className="font-medium text-xl text-defaultblack [font-family:'DM_Sans',Helvetica]"
                  >
                    {material.name}
                  </label>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-xl h-5 px-2 py-1 border-[#00000099] [font-family:'Afacad',Helvetica] font-normal text-[#00000080] text-base"
                >
                  {material.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-defaultblack p-3 [font-family:'DM_Sans',Helvetica]">
            Filter by Brand
          </h3>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-[64.5px] h-[17.13px]">
                <img
                  className="absolute w-16 h-[13px] top-0 left-0"
                  alt="Brand logo"
                  src="/group-5.png"
                />
                <img
                  className="absolute w-11 h-0.5 top-[15px] left-[19px]"
                  alt="Brand logo part"
                  src="/group-6.png"
                />
              </div>
            </div>

            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-[70px] h-[16.06px]">
                <div className="relative w-[70px] h-4">
                  <img
                    className="absolute w-6 h-px top-[15px] left-[23px]"
                    alt="Brand logo part"
                    src="/group-7.png"
                  />
                  <img
                    className="absolute w-[5px] h-px top-0 left-8"
                    alt="Brand logo part"
                    src="/group-8.png"
                  />
                  <div className="absolute w-[70px] h-[15px] top-0 left-0">
                    <div className="absolute w-[70px] h-px top-[15px] left-0">
                      <img
                        className="absolute w-5 h-px top-0 left-[50px]"
                        alt="Brand logo part"
                        src="/group-10.png"
                      />
                      <img
                        className="absolute w-5 h-px top-0 left-0"
                        alt="Brand logo part"
                        src="/group-11.png"
                      />
                    </div>
                    <img
                      className="absolute w-[66px] h-1.5 top-1 left-0.5"
                      alt="Brand logo part"
                      src="/group-9.png"
                    />
                    <div className="absolute w-[70px] h-px top-0 left-0">
                      <img
                        className="absolute w-[29px] h-px top-0 left-[41px]"
                        alt="Brand logo part"
                        src="/group-12.png"
                      />
                      <img
                        className="absolute w-[29px] h-px top-0 left-0"
                        alt="Brand logo part"
                        src="/group-13.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-[74.67px] h-[11.67px]">
                <img
                  className="absolute w-[11px] h-px top-[11px] left-0.5"
                  alt="Brand logo part"
                  src="/group-14.png"
                />
                <img
                  className="absolute w-[11px] h-px top-[11px] left-[60px]"
                  alt="Brand logo part"
                  src="/group-15.png"
                />
                <img
                  className="absolute w-[75px] h-[5px] top-0 left-0"
                  alt="Brand logo part"
                  src="/group-16.png"
                />
                <img
                  className="absolute w-10 h-0.5 top-2.5 left-4"
                  alt="Brand logo part"
                  src="/group-17.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-[50.85px] h-[20.01px]">
                <img
                  className="absolute w-[51px] h-[13px] top-0 left-0"
                  alt="Brand logo"
                  src="/group-18.png"
                />
                <img
                  className="absolute w-[37px] h-0.5 top-[18px] left-1.5"
                  alt="Brand logo part"
                  src="/group-19.png"
                />
              </div>
            </div>

            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-7 h-[27.01px]">
                <div className="relative w-7 h-[27px]">
                  <div className="absolute w-6 h-[27px] top-0 left-0.5">
                    <img
                      className="absolute w-6 h-[18px] top-0 left-0"
                      alt="Brand logo part"
                      src="/group-21.png"
                    />
                    <img
                      className="absolute w-6 h-px top-[27px] left-0"
                      alt="Brand logo part"
                      src="/group-22.png"
                    />
                  </div>
                  <img
                    className="absolute w-7 h-0.5 top-[22px] left-0"
                    alt="Brand logo part"
                    src="/group-20.png"
                  />
                  <img
                    className="w-[9px] left-[7px] absolute h-[9px] top-[5px]"
                    alt="Vector"
                    src="/vector.svg"
                  />
                  <img
                    className="w-px left-[19px] absolute h-[9px] top-[5px]"
                    alt="Vector"
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 h-10 flex items-center justify-center border border-solid border-[#00000080]">
              <div className="relative w-[64.5px] h-[17.13px]">
                <img
                  className="absolute w-16 h-[13px] top-0 left-0"
                  alt="Brand logo"
                  src="/group-23.png"
                />
                <img
                  className="absolute w-11 h-0.5 top-[15px] left-[19px]"
                  alt="Brand logo part"
                  src="/group-24.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-defaultblack p-3 [font-family:'DM_Sans',Helvetica]">
            Best Sellers
          </h3>

          <div className="flex flex-col gap-3">
            {bestSellers.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-[310px]">
                <img
                  className="w-[86px] h-14"
                  alt={item.name}
                  src={item.image}
                />
                <div className="flex flex-col justify-between py-2.5 flex-1">
                  <div className="font-medium text-black text-base leading-5 [font-family:'DM_Sans',Helvetica]">
                    {item.name}
                  </div>
                  <div className="font-bold text-defaultblack text-base [font-family:'DM_Sans',Helvetica]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Products */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Header with results count and sort */}
        <div className="flex items-center justify-between w-full">
          <div className="font-medium text-[#00000099] text-2xl [font-family:'Ubuntu',Helvetica]">
            Showing 1-12 of 14 results
          </div>

          <Select defaultValue="latest">
            <SelectTrigger className="w-[180px] h-10 border-2 border-[#947458]">
              <SelectValue
                placeholder="Sort by latest"
                className="font-medium text-[#00000099] text-xl [font-family:'Ubuntu',Helvetica]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Sort by latest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap gap-6">
          {products.map((product, index) => (
            <Card key={index} className="w-[306px] border-none">
              <div
                className="relative w-full h-[350px]"
                style={{
                  background: `url(${product.image}) 50% 50% / cover, linear-gradient(0deg, rgba(246,244,242,1) 0%, rgba(246,244,242,1) 100%)`,
                }}
              >
                {product.tag && (
                  <div
                    className="inline-flex items-center justify-center px-5 py-[9px] absolute top-6 left-6"
                    style={{ backgroundColor: product.tag.color }}
                  >
                    <div className="font-medium text-white text-xl leading-5 [font-family:'DM_Sans',Helvetica]">
                      {product.tag.text}
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="flex flex-col items-center gap-5 pt-6">
                <h4 className="font-bold text-2xl text-defaultblack [font-family:'DM_Sans',Helvetica]">
                  {product.name}
                </h4>
                <div className="[font-family:'Ubuntu',Helvetica] font-medium text-[#00000099] text-xl">
                  {product.price}
                </div>
                {product.colors && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#bdbdbd] rounded-lg" />
                    <div className="w-4 h-4 bg-[#a89891] rounded-lg" />
                    <div className="w-4 h-4 bg-[#8f909b] rounded-lg" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between w-full">
          <div></div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink className="w-10 h-10 flex items-center justify-center bg-[#947458] text-white font-bold text-xl [font-family:'Ubuntu',Helvetica]">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="w-10 h-10 flex items-center justify-center border-2 border-[#947458] font-bold text-[#00000099] text-xl [font-family:'Ubuntu',Helvetica]">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className="h-10 px-4 py-[15px] border-2 border-[#947458] font-medium text-[#00000099] text-xl [font-family:'Ubuntu',Helvetica]" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div></div>
        </div>
      </div>
    </div>
  );
};
