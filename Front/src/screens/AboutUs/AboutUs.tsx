import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { InfoSection } from "./sections/InfoSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";


export const AboutUs = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center bg-white">
      <NavigationSection />
      <InfoSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};
