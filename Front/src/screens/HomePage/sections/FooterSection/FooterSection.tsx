import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";


export const FooterSection = (): JSX.Element => {
  // Shop links with proper hrefs
  const shopLinks = [
    { name: "Home", href: "/home" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  // All customer service links redirect to /shop
  const customerServiceLinks = [
    "Cashback",
    "Promo Code",
    "Bon De Reduction"
  ];

  return (
    <footer className="flex flex-col items-center gap-20 pt-[60px] pb-5 px-6 md:px-20 lg:px-32 relative w-full bg-[#f6f4f2]">
      {/* Footer Navigation and Info */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-4">
        {/* Company Info */}
        <div className="flex flex-col items-start gap-5">
        <div className="w-[180px]">
  <img
    src="/Logo1BG.png"
    alt="Sales.tn Logo"
    className="w-full h-auto object-contain"
  />
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
            {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, index) => (
              <div key={index} className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col w-[136px] items-start gap-5">
          <h4 className="font-sans font-bold text-black text-xl">Browse</h4>
          <div className="flex flex-col items-start gap-3 w-full opacity-60">
            {shopLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-sans font-normal text-black text-base leading-[26px]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Customer Service Links */}
        <div className="flex flex-col items-start gap-6">
          <h4 className="font-sans font-bold text-black text-xl">Customer service</h4>
          <div className="flex flex-col items-start gap-3 w-full opacity-60">
            {customerServiceLinks.map((link, index) => (
              <a
                key={index}
                href="/shop"
                className="font-sans font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <div className="font-sans font-normal text-[#00000099] text-sm leading-[26px]">
          © Copyright Sales 2025.
        </div>
      </div>
    </footer>
  );
};
