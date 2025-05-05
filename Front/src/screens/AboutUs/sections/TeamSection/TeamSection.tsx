import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Hassen Fnouni",
    role: "Owner",
    image: "/hassen.jpg",
    fit: "contain", // 👈 Add this
  },
  {
    id: 2,
    name: "Abd Errahmen Ben Rhouma",
    role: "Developer",
    image: "/abdouu.jpg",
    fit: "cover",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 py-16 px-4 md:px-8 lg:px-16 xl:px-32">
     <h2 className="text-4xl md:text-5xl font-bold text-center font-['DM_Sans'] text-[#E30613]">
  Our Team
</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map(({ id, name, role, image }) => (
          <div key={id} className="flex flex-col items-center text-center w-full md:w-[300px]">
            <img
              src={image}
              alt={name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-bold font-['Ubuntu'] text-black">
              {name}
            </h3>
            <p className="text-xl text-black/50 font-['Ubuntu']">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
