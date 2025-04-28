import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Shop links data
  const shopLinks = [
    "Home",
    "Promo Code",
    "Bon De Reduction",
    "About Us",
    "Contact Us"
  ];

  // Customer service links data
  const customerServiceLinks = [
    "Orders",
    "Addresses",
    "Returns",
    "Account details",
    "F.A.Q",
  ];

  // Delivery links data
  const deliveryLinks = ["Orders", "Return", "Free Delivery"];

  return (
    <footer className="flex flex-col items-center gap-20 pt-[60px] pb-5 px-6 md:px-20 lg:px-32 relative w-full bg-[#f6f4f2]">
    

      {/* Footer Navigation and Info */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-4">
        {/* Company Info */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img
                className="absolute w-[100px] h-9 top-0 left-0.5"
                alt="Cabinet"
                src="/Logo1BG.png"
              />
            </div>
          </div>

          <div className="font-sans font-medium text-[#00000099] text-sm">
          Av. de Yasser Arafat, Sousse 4051
          </div>

          <div className="flex items-start gap-1">
            <div className="font-sans font-medium text-black text-sm">
              Email:
            </div>
            <div className="font-sans font-medium text-[#00000099] text-sm">
            Sales.tn@email.com


            </div>
          </div>

          <div className="flex items-start gap-1">
            <div className="font-sans font-medium text-black text-sm">
              Phone:
            </div>
            <div className="font-sans font-medium text-[#00000099] text-sm">
            (+216) 58 084 275
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
              <FacebookIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
              <TwitterIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
              <YoutubeIcon className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col w-[136px] items-start gap-5">
          <h4 className="font-sans font-bold text-black text-xl">Browse</h4>
          <div className="flex flex-col items-start gap-3 w-full opacity-60">
            {shopLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-sans font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Customer Service Links */}
        <div className="flex flex-col items-start gap-6">
          <h4 className="font-sans font-bold text-black text-xl">
            Customer service
          </h4>
          <div className="flex flex-col items-start gap-3 w-full opacity-60">
            {customerServiceLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-sans font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Delivery Links */}
        <div className="flex flex-col w-[136px] items-start gap-5">
          <h4 className="font-sans font-bold text-black text-xl">Delivery</h4>
          <div className="flex flex-col items-start gap-3 w-full opacity-60">
            {deliveryLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-sans font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Payment Methods */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <div className="font-sans font-normal text-[#00000099] text-sm leading-[26px]">
          © Copyright Sales 2025.
        </div>
      </div>
    </footer>
  );
};
