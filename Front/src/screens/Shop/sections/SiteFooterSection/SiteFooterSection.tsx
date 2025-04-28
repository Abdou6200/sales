import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const SiteFooterSection = (): JSX.Element => {
  // Store navigation links data
  const shopLinks = [
    { title: "Chairs" },
    { title: "Beds" },
    { title: "Sofas" },
    { title: "Cabinets" },
    { title: "Armchairs" },
    { title: "Sale" },
  ];

  const customerServiceLinks = [
    { title: "Orders" },
    { title: "Addresses" },
    { title: "Returns" },
    { title: "Account details" },
    { title: "F.A.Q" },
  ];

  const deliveryLinks = [
    { title: "Orders" },
    { title: "Return" },
    { title: "Free Delivery" },
  ];

  return (
    <footer className="bg-[#f6f4f2] py-[60px] pb-5 px-6 md:px-12 lg:px-20 xl:px-[312px] w-full">
      {/* Newsletter Subscription */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full mb-20">
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-[28px] text-defaultblack font-['DM_Sans',Helvetica]">
            Subscribe to our newsletter
          </h3>
          <h4 className="font-bold text-[28px] text-defaultblack font-['DM_Sans',Helvetica]">
            Don&apos;t miss latest news &amp; promotions
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto lg:w-[636px]">
          <Input
            className="h-[54px] pl-4 pr-[7px] py-1 bg-defaultwhite border-[#dee2e6] font-['DM_Sans',Helvetica] font-medium text-xl text-gray-300"
            placeholder="Enter your email"
          />
          <Button className="w-full md:w-[205px] h-[54px] bg-[#947458] hover:bg-[#7d6249] font-['DM_Sans',Helvetica] font-medium text-xl text-defaultwhite rounded-none">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 mb-20">
        {/* Company Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 w-28">
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

          {/* Social Media Icons */}
          <div className="flex items-start gap-3">
            <div className="relative w-6 h-6 bg-black rounded-[100px]">
              <div className="relative w-1.5 h-[13px] top-1.5 left-[9px] bg-[url(/combined-shape-1.svg)] bg-[100%_100%]" />
            </div>

            <div className="relative w-5 h-5">
              <div className="inline-flex items-center justify-center gap-2.5 relative rounded overflow-hidden">
                <div className="relative w-6 h-6 bg-black rounded-[100px]">
                  <div className="relative w-px h-px top-[-742px] left-[-3129px] bg-[100%_100%]" />
                </div>
                <img
                  className="absolute w-3 h-3.5 top-[5px] left-1.5"
                  alt="Group"
                  src="/group-3-1.svg"
                />
              </div>
            </div>

            <div className="relative w-6 h-6 bg-black rounded-[100px]">
              <div className="relative w-[13px] h-[13px] top-1.5 left-1.5 bg-[url(/combined-shape-3.svg)] bg-[100%_100%]">
                <div className="relative w-2.5 h-2.5 top-px left-px bg-[url(/combined-shape.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-1 h-1 top-[3px] left-[3px]"
                    alt="Shape"
                    src="/shape.svg"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-6 h-6 bg-black rounded-[100px]">
              <div className="relative w-[13px] h-[9px] top-2 left-1.5 bg-[url(/combined-shape-2.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[3px] h-1 top-[3px] left-[5px]"
                  alt="Fill"
                  src="/fill-2.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col gap-5 w-[136px]">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Shop
          </h4>
          <nav className="flex flex-col gap-3 opacity-60">
            {shopLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Customer Service Links */}
        <div className="flex flex-col gap-6">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Customer service
          </h4>
          <nav className="flex flex-col gap-3 opacity-60">
            {customerServiceLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Delivery Links */}
        <div className="flex flex-col gap-5 w-[136px]">
          <h4 className="font-['DM_Sans',Helvetica] font-bold text-black text-xl">
            Delivery
          </h4>
          <nav className="flex flex-col gap-3 opacity-60">
            {deliveryLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-['DM_Sans',Helvetica] font-normal text-[#00000099] text-sm leading-[26px]">
          © Copyright f Store 2024. Design by Figma.guru
        </p>
        <img
          className="w-[263px] h-[25px]"
          alt="Payment icons"
          src="/payment-icons-1.svg"
        />
      </div>
    </footer>
  );
};
