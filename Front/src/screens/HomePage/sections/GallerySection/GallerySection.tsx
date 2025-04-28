import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GallerySection = (): JSX.Element => {
  // Gallery data for mapping
  const galleryItems = [
    {
      id: 1,
      title: "Bedroom",
      image: "..//img-label-1.png",
      className: "col-span-2 h-[306px]",
    },
    {
      id: 2,
      title: "Living room",
      image: "..//img-label-2.png",
      className: "h-[306px]",
    },
    {
      id: 3,
      title: "Hallway",
      image: "..//img-label-3.png",
      className: "h-[306px]",
    },
    {
      id: 4,
      title: "Kitchen",
      image: "..//img-label.png",
      className: "row-span-2 h-[636px]",
    },
  ];

  return (
    <section className="py-[120px] px-6 md:px-12 lg:px-24 xl:px-[312px] w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* First row - Bedroom */}
          <Card className="rounded-none border-0 overflow-hidden p-0">
            <CardContent className="p-0 relative">
              <div
                className="w-full h-[306px] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryItems[0].image})` }}
              >
                <div className="absolute bottom-0 left-0 inline-flex items-center gap-3 px-4 py-[13px] bg-[#00000080]">
                  <span className="font-bold text-white text-2xl leading-5 font-sans">
                    {galleryItems[0].title}
                  </span>
                  <ArrowRightIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second row - Living room and Hallway */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryItems.slice(1, 3).map((item) => (
              <Card
                key={item.id}
                className="rounded-none border-0 overflow-hidden p-0"
              >
                <CardContent className="p-0 relative">
                  <div
                    className="w-full h-[306px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute bottom-0 left-0 inline-flex items-center gap-3 px-4 py-[13px] bg-[#00000080]">
                      <span className="font-bold text-white text-2xl leading-5 font-sans">
                        {item.title}
                      </span>
                      <ArrowRightIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kitchen - tall image on right */}
        <Card className="rounded-none border-0 overflow-hidden p-0">
          <CardContent className="p-0 relative">
            <div
              className="w-full h-[636px] bg-cover bg-center"
              style={{ backgroundImage: `url(${galleryItems[3].image})` }}
            >
              <div className="absolute bottom-0 left-0 inline-flex items-center gap-3 px-4 py-[13px] bg-[#00000080]">
                <span className="font-bold text-white text-2xl leading-5 font-sans">
                  {galleryItems[3].title}
                </span>
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
