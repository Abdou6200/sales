import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
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
    <footer className="bg-[#f6f4f2] py-[60px] pb-5 px-6 md:px-12 lg:px-24 xl:px-[312px] w-full">
      {/* Newsletter Subscription */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full mb-20">
        <div className="flex flex-col items-start gap-6">
          <h3 className="font-bold font-['DM_Sans',Helvetica] text-defaultblack text-[28px]">
            Subscribe to our newsletter
          </h3>
          <h4 className="font-bold font-['DM_Sans',Helvetica] text-defaultblack text-[28px]">
            Don&apos;t miss latest news &amp; promotions
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full lg:w-[636px]">
          <Input
            className="h-[54px] pl-4 font-['DM_Sans',Helvetica] font-medium text-xl text-gray-300 border-[#dee2e6]"
            placeholder="Enter your email"
          />
          <Button className="h-[54px] px-6 bg-[#947458] hover:bg-[#7d6249] font-['DM_Sans',Helvetica] font-medium text-xl text-defaultwhite rounded-none">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {/* Company Info */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[21px] h-6 top-0 left-0.5"
                alt="Cabinet"
                src="/cabinet-1.png"
              />
            </div>
            <span className="font-['Inter',Helvetica] font-bold text-defaultblack text-xl">
              f Store
            </span>
          </div>

          <p className="font-['DM_Sans',Helvetica] font-medium text-[#00000099] text-sm">
            60 Fremont Ave. Hamden, CT 06514
          </p>

          <div className="flex items-start gap-1">
            <span className="font-['DM_Sans',Helvetica] font-medium text-defaultblack text-sm">
              Email:
            </span>
            <span className="font-['DM_Sans',Helvetica] font-medium text-[#00000099] text-sm">
              fStore@email.com
            </span>
          </div>

          <div className="flex items-start gap-1">
            <span className="font-['DM_Sans',Helvetica] font-medium text-defaultblack text-sm">
              Phone:
            </span>
            <span className="font-['DM_Sans',Helvetica] font-medium text-[#00000099] text-sm">
              (928) 630-9272
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              className="w-6 h-6 p-0 bg-black rounded-full border-none"
            >
              <FacebookIcon className="h-3 w-3 text-white" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-6 h-6 p-0 bg-black rounded-full border-none"
            >
              <TwitterIcon className="h-3 w-3 text-white" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-6 h-6 p-0 bg-black rounded-full border-none"
            >
              <InstagramIcon className="h-3 w-3 text-white" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-6 h-6 p-0 bg-black rounded-full border-none"
            >
              <YoutubeIcon className="h-3 w-3 text-white" />
            </Button>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col items-start gap-5">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Shop
          </h4>
          <nav className="flex flex-col items-start gap-3 w-full opacity-60">
            {shopLinks.map((link, index) => (
              <a
                key={`shop-${index}`}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Customer Service Links */}
        <div className="flex flex-col items-start gap-6">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Customer service
          </h4>
          <nav className="flex flex-col items-start gap-3 w-full opacity-60">
            {customerServiceLinks.map((link, index) => (
              <a
                key={`service-${index}`}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Delivery Links */}
        <div className="flex flex-col items-start gap-5">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Delivery
          </h4>
          <nav className="flex flex-col items-start gap-3 w-full opacity-60">
            {deliveryLinks.map((link, index) => (
              <a
                key={`delivery-${index}`}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <Separator className="mb-5 bg-gray-200" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-['DM_Sans',Helvetica] font-normal text-[#00000099] text-sm">
          © Copyright f Store 2024. Design by Figma.guru
        </p>
        <img
          className="h-[25px]"
          alt="Payment methods"
          src="/payment-icons-1.svg"
        />
      </div>
    </footer>
  );
};
