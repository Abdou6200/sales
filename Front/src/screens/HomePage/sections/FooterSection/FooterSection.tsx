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
  // Footer navigation data
  const shopLinks = [
    "Chairs",
    "Beds",
    "Sofas",
    "Cabinets",
    "Armchairs",
    "Sale",
  ];

  const customerServiceLinks = [
    "Orders",
    "Addresses",
    "Returns",
    "Account details",
    "F.A.Q",
  ];

  const deliveryLinks = ["Orders", "Return", "Free Delivery"];

  return (
    <footer className="flex flex-col items-center gap-20 pt-[60px] pb-5 px-6 md:px-20 lg:px-[312px] relative w-full bg-[#f6f4f2]">
      {/* Newsletter subscription section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between relative w-full gap-6">
        <div className="flex flex-col items-start gap-6 relative">
          <h3 className="relative w-fit [font-family:'DM_Sans',Helvetica] font-bold text-defaultblack text-[28px] tracking-[0] leading-normal">
            Subscribe to our newsletter
          </h3>
          <h4 className="relative w-fit [font-family:'DM_Sans',Helvetica] font-bold text-defaultblack text-[28px] tracking-[0] leading-normal">
            Don&apos;t miss latest news &amp; promotions
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-end gap-2 relative w-full md:w-auto lg:w-[636px]">
          <Input
            className="h-[54px] pl-4 pr-[7px] py-1 bg-defaultwhite border border-solid border-[#dee2e6] [font-family:'DM_Sans',Helvetica] font-medium text-xl"
            placeholder="Enter your email"
          />
          <Button className="w-full md:w-[205px] h-[54px] bg-[#947458] hover:bg-[#7d6249] [font-family:'DM_Sans',Helvetica] font-medium text-defaultwhite text-xl rounded-none">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="flex flex-col md:flex-row items-start justify-between relative w-full gap-10 md:gap-4">
        {/* Company info */}
        <div className="flex flex-col items-start gap-5 relative">
          <div className="flex items-center gap-2 relative">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[21px] h-6 top-0 left-0.5"
                alt="Cabinet"
                src="/cabinet-1.png"
              />
            </div>
            <div className="[font-family:'Inter',Helvetica] font-bold text-defaultblack text-xl relative w-fit tracking-[0] leading-normal">
              f Store
            </div>
          </div>

          <div className="text-sm relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#00000099] tracking-[0] leading-normal">
            60 Fremont Ave. Hamden, CT 06514
          </div>

          <div className="flex items-start gap-1 relative">
            <span className="relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-defaultblack text-sm tracking-[0] leading-normal">
              Email:
            </span>
            <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#00000099] text-sm relative w-fit tracking-[0] leading-normal">
              fStore@email.com
            </span>
          </div>

          <div className="flex items-start gap-1 relative">
            <span className="relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-defaultblack text-sm tracking-[0] leading-normal">
              Phone:
            </span>
            <span className="relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#00000099] text-sm tracking-[0] leading-normal">
              (928) 630-9272
            </span>
          </div>

          {/* Social media icons */}
          <div className="flex items-start gap-3 relative">
            <div className="relative w-6 h-6 bg-black rounded-[100px] flex items-center justify-center">
              <FacebookIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="relative w-6 h-6 bg-black rounded-[100px] flex items-center justify-center">
              <TwitterIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="relative w-6 h-6 bg-black rounded-[100px] flex items-center justify-center">
              <InstagramIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="relative w-6 h-6 bg-black rounded-[100px] flex items-center justify-center">
              <YoutubeIcon className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>

        {/* Shop links */}
        <div className="flex flex-col w-full md:w-[136px] items-start gap-5 relative">
          <h4 className="relative w-fit [font-family:'DM_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-normal">
            Shop
          </h4>
          <div className="flex flex-col items-start gap-3 relative w-full opacity-60">
            {shopLinks.map((link, index) => (
              <a
                key={`shop-${index}`}
                href="#"
                className="font-normal text-base leading-[26px] relative w-fit [font-family:'DM_Sans',Helvetica] text-black tracking-[0] whitespace-nowrap hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Customer service links */}
        <div className="flex flex-col w-full md:w-auto items-start gap-6 relative">
          <h4 className="relative w-fit [font-family:'DM_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-normal">
            Customer service
          </h4>
          <div className="flex flex-col items-start gap-3 relative w-full opacity-60">
            {customerServiceLinks.map((link, index) => (
              <a
                key={`customer-${index}`}
                href="#"
                className="relative w-fit [font-family:'DM_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[26px] whitespace-nowrap hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Delivery links */}
        <div className="flex flex-col w-full md:w-[136px] items-start gap-5 relative">
          <h4 className="relative w-fit [font-family:'DM_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-normal">
            Delivery
          </h4>
          <div className="flex flex-col items-start gap-3 relative w-full opacity-60">
            {deliveryLinks.map((link, index) => (
              <a
                key={`delivery-${index}`}
                href="#"
                className="relative w-fit [font-family:'DM_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[26px] whitespace-nowrap hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between relative w-full gap-4">
        <div className="relative w-fit [font-family:'DM_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[26px] whitespace-nowrap">
          © Copyright f Store 2024. Design by Figma.guru
        </div>
        <img
          className="relative w-[263px] h-[25px]"
          alt="Payment icons"
          src="/payment-icons-1.svg"
        />
      </div>
    </footer>
  );
};
