import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NewProductsSection } from "./sections/NewProductsSection";

export const HomePage = (): JSX.Element => {

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <NewProductsSection />
      <GallerySection />
      <FooterSection />

      
    </main>
  );
};
