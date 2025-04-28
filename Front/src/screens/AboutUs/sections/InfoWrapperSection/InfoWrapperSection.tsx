import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const InfoWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full">
      {/* Hero image section */}
      <div
        className="w-full h-[640px] bg-cover bg-center"
        style={{ backgroundImage: "url(../img-1.png)" }}
      />

      {/* Info banner section */}
      <Card className="w-full rounded-none border-none bg-[#f6f4f2]">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-10 md:px-[312px]">
          <div className="flex flex-col items-start gap-5 max-w-full">
            <h2 className="font-['DM_Sans',Helvetica] font-bold text-defaultblack text-[50px] leading-[50px]">
              Live comfortably inside your home
            </h2>
            <p className="font-['DM_Sans',Helvetica] font-normal text-defaultblack text-base leading-7 max-w-[775px] overflow-hidden text-ellipsis">
              Est nulla tincidunt commodo massa. Nunc interdum cras id augue
            </p>
          </div>

          <Button className="bg-[#947458] hover:bg-[#7d6249] text-white px-10 py-[17px] rounded-none mt-5 md:mt-0">
            <span className="font-['DM_Sans',Helvetica] font-medium text-xl">
              Shop now
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
