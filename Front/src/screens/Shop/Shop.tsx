import React from "react";
import { FeaturedItemsSection } from "./sections/FeaturedItemsSection";
import { HeroSection } from "./sections/HeroSection";
import { MainHeaderSection } from "./sections/MainHeaderSection/MainHeaderSection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { ProductFiltersSection } from "./sections/ProductFiltersSection/ProductFiltersSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Shop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Header section */}
      <MainHeaderSection />

      {/* Product categories */}
      <ProductCategoriesSection />

      {/* Product filters */}
      <ProductFiltersSection />

      {/* Hero section */}
      <HeroSection />

      {/* Featured items */}
      <FeaturedItemsSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
