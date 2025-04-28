import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface StatItemProps {
  icon: string;
  count: string;
  label: string;
  gap?: string;
}

export const StatsSection = (): JSX.Element => {
  const stats: StatItemProps[] = [
    {
      icon: "/group.png",
      count: "860+",
      label: "Armchairs",
    },
    {
      icon: "/group-1.png",
      count: "1800",
      label: "Cabinets",
    },
    {
      icon: "/group-2.png",
      count: "2k+",
      label: "Sofas",
    },
    {
      icon: "/group-3.png",
      count: "2500",
      label: "Chairs",
      gap: "gap-3", // This one has a different gap in the original
    },
  ];

  return (
    <section className="flex justify-between py-20 w-full">
      <div className="container flex justify-between">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            count={stat.count}
            label={stat.label}
            gap={stat.gap}
          />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({ icon, count, label, gap = "gap-1" }: StatItemProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col items-center p-0">
        <div className="relative w-16 h-16 opacity-60">
          {icon === "/group.png" || icon === "/group-1.png" ? (
            <div
              className="w-16 h-16 bg-cover"
              style={{ backgroundImage: `url(${icon})` }}
            />
          ) : icon === "/group-2.png" ? (
            <img
              className="absolute w-16 h-[50px] top-[7px] left-0"
              alt="Icon"
              src={icon}
            />
          ) : (
            <img
              className="absolute w-[45px] h-16 top-0 left-2.5"
              alt="Icon"
              src={icon}
            />
          )}
        </div>

        <div className={`flex flex-col items-center ${gap} mt-5`}>
          <div className="font-bold text-black text-5xl text-center">
            {count}
          </div>
          <div className="font-bold text-[#00000099] text-base text-center">
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
