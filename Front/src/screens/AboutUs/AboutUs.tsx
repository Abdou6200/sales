import { PlayIcon } from "lucide-react";
import React from "react";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Card, CardContent } from "../../components/ui/card";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoSection } from "./sections/InfoSection";
import { InfoWrapperSection } from "./sections/InfoWrapperSection/InfoWrapperSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { StatsSection } from "./sections/StatsSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { Link } from "react-router-dom";

export const AboutUs = (): JSX.Element => {
  // Instagram images data for mapping
  const instagramImages = [
    { id: 1, url: "..//img-6.png" },
    { id: 2, url: "..//img-7.png" },
    { id: 3, url: "..//img-8.png" },
    { id: 4, url: "..//img-9.png" },
    { id: 5, url: "..//img-10.png" },
  ];

  return (
    <div className="flex flex-col w-full items-center bg-white">
      <NavigationSection />
      <InfoSection />
      <InfoWrapperSection />
      <StatsSection />
      <FeaturesSection />
      <TeamSection />

      <section className="flex flex-col w-full items-center gap-2.5 pt-[60px] pb-[120px] px-4 md:px-8 lg:px-[312px]">
        <Card className="w-full border-0">
          <CardContent className="p-0">
            <AspectRatio
              ratio={1296 / 622}
              className="relative bg-cover bg-center"
              style={{ backgroundImage: "url(..//img--button.png)" }}
            >
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black rounded-[40px] flex items-center justify-center">
                <PlayIcon className="w-[21px] h-6 text-white" />
              </button>
            </AspectRatio>
          </CardContent>
        </Card>
      </section>

      <HeroSection />

      <section className="w-full flex flex-col items-start gap-10 px-4 md:px-8 lg:px-[312px] py-[120px]">
        <h2 className="font-bold text-defaultblack text-[50px] font-['DM_Sans',Helvetica]">
          Follow Us on Instagram
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {instagramImages.map((image) => (
            <AspectRatio
              key={image.id}
              ratio={1}
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
