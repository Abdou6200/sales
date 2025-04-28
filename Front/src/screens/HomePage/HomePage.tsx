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
  // Partner logos data for mapping
  const partnerLogos = [
    {
      src: "/group-5.png",
      alt: "Partner Logo",
      type: "background",
      width: "80px",
      height: "80px",
    },
    { src: "/logo.png", alt: "Logo", width: "80px", height: "78.81px" },
    { src: "/logo-2.svg", alt: "Logo", width: "80px", height: "80px" },
    { src: "/group-6.png", alt: "Group", width: "101.56px", height: "61.91px" },
    { src: "/logo-1.png", alt: "Logo", width: "80px", height: "80px" },
  ];

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

      {/* Partners Section */}
      <section className="flex items-center justify-between px-4 py-[60px] w-full bg-white opacity-60 md:px-[392px]">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            {logo.type === "background" ? (
              <div
                className="relative w-[80px] h-20 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo.src})` }}
              />
            ) : (
              <img
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
};
