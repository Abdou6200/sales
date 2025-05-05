import React from "react";
import { useNavigate } from "react-router-dom";

const cashbackOffers = [
  {
    name: "Airbnb",
    cashback: "3,6%",
    note: "Promo Code available only online",
    logo: "airbnb.png",
  },
  {
    name: "Carrefour",
    cashback: "5,6%",
    note: "Promo Code available online and in shop",
    logo: "Carrefour.png",
  },
  {
    name: "HM",
    cashback: "3,3%",
    note: "Promo Code available online and in shop",
    logo: "hm.png",
  },
  {
    name: "Chaneb",
    cashback: "3%",
    note: "Promo Code available only in shop",
    logo: "chaneb.png",
  },
  {
    name: "Spotify",
    cashback: "10%",
    note: "Promo Code available only online",
    logo: "Spotify.png",
  },
  {
    name: "Netflix",
    cashback: "6%",
    note: "Promo Code available only online",
    logo: "netflix.png",
  },
];

export const GallerySection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      <div className="w-full px-4 md:px-8 xl:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#121212]">
          Our selection of Promo Codes
        </h2>

        <div className="w-full grid grid-cols-1 xl:grid-cols-[400px_repeat(3,_1fr)] gap-6">
          {/* Promo block */}
          <div className="row-span-2 bg-gradient-to-br from-black to-[#001f3f] text-white p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold leading-tight mb-3">
                These are the best offers <br /> in our opinion!
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                More than 52 partner are available: Carrefour, Airbnb, Chaneb, ...
              </p>
            </div>
            <button
              onClick={() => navigate("/shop")}
              className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold w-fit"
            >
              All Promo Codes available
            </button>
          </div>

          {/* Offer cards */}
          {cashbackOffers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl shadow text-center flex flex-col items-center justify-between"
            >
              <img
                src={offer.logo}
                alt={offer.name}
                className="h-12 object-contain mb-4"
              />
              <p className="text-orange-600 text-lg font-bold mb-1">
                {offer.cashback} of reduction
              </p>
              <p className="text-sm text-gray-500">{offer.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};






