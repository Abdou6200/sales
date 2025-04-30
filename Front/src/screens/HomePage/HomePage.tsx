import React from "react";
import { BestsellersSection } from "./sections/BestsellersSection";
import { CategoriesSection } from "./sections/CategoriesSection";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { InfoSection } from "./sections/InfoSection";
import { NewProductsSection } from "./sections/NewProductsSection";

export const HomePage = (): JSX.Element => {

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <CategoriesSection />
      <NewProductsSection />
      <GallerySection />
      <InfoSection />
      <BestsellersSection />
      <CustomerReviewsSection />
      <FooterSection />

      
    </main>
  );
};
