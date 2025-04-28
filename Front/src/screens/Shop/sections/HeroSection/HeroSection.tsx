import { HeadphonesIcon, LockIcon, RefreshCcwIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: <LockIcon className="w-[60px] h-[60px]" />,
    title: "Secure Payments",
    description: "Feugiat mi gravida vestibulum orci ac volutpat non",
  },
  {
    icon: <RefreshCcwIcon className="w-[60px] h-[60px]" />,
    title: "Return Within 14 Days",
    description: "Urna elementum eget quam facilisi vulputate",
  },
  {
    icon: <HeadphonesIcon className="w-[60px] h-[60px]" />,
    title: "24/7 Support",
    description: "Semper turpis sed maecenas vivamus vel scelerisque",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex justify-center bg-[#f9f9f9] py-20 w-full">
      <div className="flex flex-wrap justify-between gap-8 max-w-7xl w-full px-4 md:px-6 lg:px-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none bg-transparent shadow-none">
            <CardContent className="flex items-start gap-6 p-0">
              {index === 0 ? (
                <img
                  className="w-[60px] h-[60px]"
                  alt="Icon"
                  src="/icon-3.svg"
                />
              ) : index === 1 ? (
                <img
                  className="w-[60px] h-[60px]"
                  alt="Product return"
                  src="/product-return-1.svg"
                />
              ) : (
                <div className="relative w-[60px] h-[60px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />
              )}
              <div className="flex flex-col items-start gap-4">
                <h3 className="font-bold text-defaultblack text-2xl font-['DM_Sans',Helvetica] mt-[-1px]">
                  {feature.title}
                </h3>
                <p className="font-normal text-[#00000099] text-base leading-[23px] font-['DM_Sans',Helvetica] max-w-[281px]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
