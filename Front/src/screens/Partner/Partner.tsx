import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";


export const Partner = (): JSX.Element => {

  return (
    <main className="flex flex-col items-center w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <FooterSection />
    </main>
  );
};
