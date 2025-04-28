import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CustomerReviewsSection = (): JSX.Element => {
  // Review content data
  const reviewText = [
    "Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.",
    "Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque",
    " scelerisque adipiscing",
    ". Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.",
  ];

  // Customer data
  const customer = {
    name: "Devon Simpson",
    title: "Customer",
    avatarUrl: "/ava.svg",
  };

  return (
    <section className="flex w-full bg-[#f6f4f2]">
      <div className="flex flex-col items-start justify-center gap-10 py-16 px-8 lg:pl-[314px] lg:py-20 flex-1">
        <h2 className="text-4xl font-bold font-['DM_Sans',Helvetica] text-defaultblack">
          Customer Reviews
        </h2>

        <div className="flex flex-col items-start gap-6">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className="w-[19px] h-[18px] mr-[7px] text-yellow-500 fill-yellow-500"
                strokeWidth={0}
              />
            ))}
          </div>

          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-2 max-w-[493px]">
              {reviewText.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['DM_Sans',Helvetica] font-medium text-black text-base leading-[30px]"
                >
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center gap-5">
          <Avatar className="w-16 h-16 rounded-full">
            <AvatarImage
              src={customer.avatarUrl}
              alt={customer.name}
              className="bg-cover bg-center"
            />
            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start gap-4">
            <h3 className="font-['DM_Sans',Helvetica] font-bold text-black text-base leading-[26px]">
              {customer.name}
            </h3>
            <p className="font-['DM_Sans',Helvetica] font-normal text-[#00000099] text-sm leading-[26px]">
              {customer.title}
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative hidden md:block w-full max-w-[948px] h-auto bg-cover bg-center"
        style={{ backgroundImage: "url(../img-15.png)" }}
      />
    </section>
  );
};
