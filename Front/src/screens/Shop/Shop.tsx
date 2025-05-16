import React from "react";
import { MainHeaderSection } from "./sections/MainHeaderSection/MainHeaderSection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { ProductFiltersSection } from "./sections/ProductFiltersSection/ProductFiltersSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Shop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <MainHeaderSection />

      <ProductCategoriesSection />

      <ProductFiltersSection />

      <FooterSection />
    </div>
  );
};
