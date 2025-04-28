import {
  ChevronDownIcon,
  HeartIcon,
  PhoneCallIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();

  // Navigation menu items data
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="flex flex-col w-full">
      {/* Promotional banner */}
      <div className="w-full bg-[#947458] py-2.5 flex justify-center">
        <div className="font-sans text-sm text-white">
          <span>Choose </span>
          <span className="font-bold">Sales </span>
          <span>for the best offers out there</span>
        </div>
      </div>

      {/* Secondary header with address, search and phone */}
      <div className="w-full bg-[#f6f4f2] py-5 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Address */}
        <div className="font-sans font-medium text-sm">
        Av. de Yasser Arafat, Sousse 4051
        </div>

        {/* SearchIcon bar */}
        <div className="flex w-full md:w-[462px] h-[42px] bg-white border border-[#dee2e6]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-full px-4 rounded-none border-r border-[#dee2e6] flex items-center gap-2"
              >
                <span className="font-sans font-medium text-sm">
                  Categories
                </span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Food</DropdownMenuItem>
              <DropdownMenuItem>Decor</DropdownMenuItem>
              <DropdownMenuItem>Make Up</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            className="border-0 h-full font-sans font-medium text-sm text-[#adb5bd]"
            placeholder="Search..."
          />

          <Button variant="ghost" className="px-2">
            <SearchIcon className="h-6 w-6" />
          </Button>
        </div>

        {/* Phone number */}
        <div className="flex items-center gap-3 justify-end">
          <PhoneCallIcon className="h-6 w-6" />
          <span className="font-sans font-medium text-sm">(+216) 58 084 275</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full py-10 flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-[312px]">
        {/* Logo */}
        <div className="flex items-center gap-2 w-40">
          <div className="relative w-10 h-10">
            <img
              className="absolute w-[300px] h-12 top-0 left-0.5"
              alt="Logo"
              src="/Logo1BG.png"
            />
          </div>
        </div>

        {/* Navigation links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-5">
            {navItems.map((item) => {
              // Check if the current path matches the nav item path
              const isActive = location.pathname === item.path;
              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className={`px-3 py-1 text-lg font-sans text-defaultblack ${isActive ? "font-bold" : "font-normal"}`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* UserIcon actions */}
        <div className="flex items-center gap-5">
          <Button variant="ghost" className="p-0 h-auto">
            <UserIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="p-0 h-auto">
            <HeartIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
