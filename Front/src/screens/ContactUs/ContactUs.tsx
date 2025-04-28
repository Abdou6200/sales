import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";

export const ContactUs = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-center bg-white">
      <HeaderSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};
