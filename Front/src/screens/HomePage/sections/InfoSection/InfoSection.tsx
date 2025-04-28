import { PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const InfoSection = (): JSX.Element => {
  // Data for the text content
  const contentData = {
    heading: "Affordable furniture for every home",
    paragraphs: [
      "Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.",
      "Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo",
    ],
  };

  return (
    <section className="flex flex-row items-center gap-8 md:gap-[134px] w-full bg-[#f6f4f2]">
      {/* Video/Image section with play button */}
      <div
        className="relative flex-1 h-[760px] bg-cover bg-center"
        style={{ backgroundImage: "url(../img--button.png)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="default"
            size="icon"
            className="w-20 h-20 rounded-[40px] bg-black hover:bg-black/90"
          >
            <PlayIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col w-full max-w-[526px] items-start gap-[68px] py-16 pr-8">
        <h2 className="text-[40px] font-bold font-['DM_Sans',Helvetica] text-defaultblack leading-tight max-w-[496px]">
          {contentData.heading}
        </h2>

        <div className="flex flex-col gap-2 max-w-[493px]">
          {contentData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-[26px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
