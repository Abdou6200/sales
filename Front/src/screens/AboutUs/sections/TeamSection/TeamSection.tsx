import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "Ian Dyer",
      role: "Consultant",
      image: "/img-11.svg",
    },
    {
      id: 2,
      name: "Brianna Fitzgerald",
      role: "Manager",
      image: "/img-12.svg",
    },
    {
      id: 3,
      name: "Heath Barry",
      role: "Consultant",
      image: "/img-13.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 py-[60px] px-4 md:px-8 lg:px-16 xl:px-[312px]">
      <header className="text-center">
        <h2 className="font-bold text-[50px] text-defaultblack font-['DM_Sans',Helvetica] tracking-[0] leading-normal">
          Our Team
        </h2>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="border-none shadow-none w-full md:w-[416px]"
          >
            <div
              className="w-full h-[480px] bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <CardContent className="flex flex-col items-center gap-6 pt-5">
              <h3 className="font-['Ubuntu',Helvetica] font-bold text-2xl text-defaultblack tracking-[0] leading-5">
                {member.name}
              </h3>
              <p className="font-['Ubuntu',Helvetica] font-normal text-xl text-[#00000080] tracking-[0] leading-5">
                {member.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
