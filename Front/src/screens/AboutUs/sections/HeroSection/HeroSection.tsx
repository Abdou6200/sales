import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Collection data for mapping
const collections = [
  {
    id: 1,
    image: "..//img-4.png",
    title: "New Collection Quisque Libero",
    description:
      "Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum",
  },
  {
    id: 2,
    image: "..//img-5.png",
    title: "New Collection Nisi Imperdiet",
    description:
      "Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex gap-6 px-6 py-[120px] w-full bg-[#f6f4f2] md:px-12 lg:px-24 xl:px-[312px]">
      {collections.map((collection) => (
        <Card
          key={collection.id}
          className="border-none bg-transparent shadow-none"
        >
          <CardContent className="flex flex-col items-start gap-6 p-0">
            <div
              className="relative w-full h-[416px] bg-cover bg-center"
              style={{ backgroundImage: `url(${collection.image})` }}
            />

            <div className="flex flex-col items-start gap-5">
              <h2 className="font-bold text-defaultblack text-2xl font-sans">
                {collection.title}
              </h2>

              <p className="text-[#00000099] text-base leading-7 max-w-[630px] font-sans">
                {collection.description}
              </p>
            </div>

            <Button
              variant="link"
              className="inline-flex items-center gap-2 p-0 font-bold text-defaultblack text-xl font-sans"
            >
              Shop Now
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
