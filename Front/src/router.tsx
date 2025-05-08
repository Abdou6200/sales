import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Shop } from "./screens/Shop";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { ContactUs } from "./screens/ContactUs";
import { SignUp } from "./screens/SignUp";
import { LogIn } from "./screens/LogIn";
import { AdminUserTable } from "./screens/AdminUserTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/admin",
    element: <AdminUserTable />,
  },
]);
