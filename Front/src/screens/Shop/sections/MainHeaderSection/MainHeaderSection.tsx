import {
  ChevronDownIcon,
  PhoneCallIcon,
  SearchIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

export const MainHeaderSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isLogin, setIsLogin] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setIsLogin(true);
    }

    // Fetch categories
    fetch("http://localhost:3000/api/categories?page=1&perPage=100")
      .then((res) => res.json())
      .then((data) => {
        const cats = data.docs.map((cat: any) => cat.name);
        setCategories(cats);
      })
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/shop?query=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="flex flex-col w-full">
      {/* Promotional banner */}
      <div className="w-full bg-red-600 py-2.5 flex justify-center">
        <div className="font-sans text-sm text-white">
          <span>Choose </span>
          <span className="font-bold">Sales </span>
          <span>for the best offers out there</span>
        </div>
      </div>

      {/* Secondary header */}
      <div className="w-full bg-[#f6f4f2] py-5 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Address */}
        <div className="font-sans font-medium text-sm">
          Av. de Yasser Arafat, Sousse 4051
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex w-full md:w-[462px] h-[42px] bg-white border border-[#dee2e6]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-full px-4 rounded-none border-r border-[#dee2e6] flex items-center gap-2"
              >
                <span className="font-sans font-medium text-sm">
                  {selectedCategory}
                </span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((cat, index) => (
                <DropdownMenuItem key={index} onSelect={() => setSelectedCategory(cat)}>
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 h-full font-sans font-medium text-sm text-[#adb5bd]"
            placeholder="Search..."
          />

          <Button type="submit" variant="ghost" className="px-2">
            <SearchIcon className="h-6 w-6" />
          </Button>
        </form>

        {/* Phone number */}
        <div className="flex items-center gap-3 justify-end">
          <PhoneCallIcon className="h-6 w-6" />
          <span className="font-sans font-medium text-sm">
            (+216) 58 084 275
          </span>
        </div>
      </div>

      {/* Logo + Navigation */}
      <div className="w-full py-6 px-6 md:px-12 border-t border-b border-gray-200 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="w-[180px]">
            <Link to="/home">
              <img src="/Logo1BG.png" alt="Logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-4 justify-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.path}
                        className={`text-base font-sans ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {!isLogin ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                  className="text-sm border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 hover:bg-red-100"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  className="text-sm bg-red-600 hover:bg-red-500 text-white"
                >
                  Signup
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLogin(false);
                  navigate("/");
                }}
                className="text-sm bg-red-600 hover:bg-red-500 text-white"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
