import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature data for easier maintenance and mapping
  const features = [
    {
      id: 1,
      title: "Furniture That Will Last A Lifetime",
      description:
        "Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.",
      buttonText: "Learn more",
      imageSrc: "..//img-7.png",
      imageFirst: true,
    },
    {
      id: 2,
      title: "Live Comfortably Inside Your Home",
      description: [
        "Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque scelerisque adipiscing.",
        "Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac",
        ". Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.",
      ],
      buttonText: "Shop now",
      imageSrc: "..//img-3.png",
      imageFirst: false,
    },
  ];

  return (
    <section className="flex gap-6 py-0 pb-[60px] px-6 md:px-12 lg:px-[312px]">
      {features.map((feature) => (
        <div key={feature.id} className="flex flex-col gap-6">
          {feature.imageFirst ? (
            <>
              <div
                className="w-full h-[800px] bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.imageSrc})` }}
              />
              <FeatureCard
                title={feature.title}
                description={feature.description}
                buttonText={feature.buttonText}
              />
            </>
          ) : (
            <>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                buttonText={feature.buttonText}
                bgColor="bg-[#f9f9f9]"
              />
              <div
                className="w-full h-[800px] bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.imageSrc})` }}
              />
            </>
          )}
        </div>
      ))}
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string | string[];
  buttonText: string;
  bgColor?: string;
}

const FeatureCard = ({
  title,
  description,
  buttonText,
  bgColor = "bg-[#f6f4f2]",
}: FeatureCardProps) => {
  return (
    <Card
      className={`${bgColor} rounded-none border-none shadow-none w-full h-[508px]`}
    >
      <CardContent className="flex flex-col justify-center h-full gap-[60px] p-10">
        <div className="flex flex-col gap-[60px]">
          <h2 className="w-[453px] font-['DM_Sans',Helvetica] font-bold text-defaultblack text-[40px] leading-[54px]">
            {title}
          </h2>

          {typeof description === "string" ? (
            <p className="font-['DM_Sans',Helvetica] font-normal text-[#00000099] text-base leading-[26px]">
              {description}
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['DM_Sans',Helvetica] font-normal text-[#00000099] text-base leading-[26px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        <CardFooter className="p-0">
          <Button className="bg-[#947458] hover:bg-[#7d6249] text-white rounded-none px-10 py-[17px] h-auto">
            <span className="font-['DM_Sans',Helvetica] font-medium text-xl">
              {buttonText}
            </span>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
