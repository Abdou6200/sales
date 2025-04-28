import React from "react";
import { Button } from "../../../../components/ui/button";

export const InfoSection = (): JSX.Element => {
  // Content data for paragraphs to enable mapping
  const leftColumnParagraphs = [
    "Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna",
    "Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna",
  ];

  const rightColumnParagraphs = [
    "Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla.",
    "Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum. Mi tristique est nunc sapien orci tortor ac.",
  ];

  return (
    <section className="flex flex-col items-center gap-20 py-[120px]">
      <h2 className="max-w-[1037px] font-['DM_Sans',Helvetica] font-bold text-defaultblack text-[50px] text-center leading-normal">
        Lectus morbi eget justo tellus facilisi orci venenatis aliquet. Egestas
        rutrum volutpat pretium curabitur scelerisque.
      </h2>

      <div className="flex flex-wrap items-start gap-20">
        <div className="flex w-full md:w-[436px] items-center justify-center">
          <div className="flex flex-col items-start gap-3">
            {leftColumnParagraphs.map((paragraph, index) => (
              <p
                key={`left-paragraph-${index}`}
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-10">
          <div className="max-w-[416px] flex flex-col items-start gap-3">
            {rightColumnParagraphs.map((paragraph, index) => (
              <p
                key={`right-paragraph-${index}`}
                className="font-['DM_Sans',Helvetica] font-normal text-black text-base leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <Button
            variant="link"
            className="p-0 h-auto font-['DM_Sans',Helvetica] font-bold text-defaultblack text-base"
          >
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
