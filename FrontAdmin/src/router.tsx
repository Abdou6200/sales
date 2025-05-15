import { createBrowserRouter } from "react-router-dom";
import { AdminUserTable } from "./screens/AdminUserTable";
import { AdminPartnerTable } from "./screens/AdminPartnerTable";
import { AdminBonTable } from "./screens/AdminBonTable";
import { AdminCodesTable } from "./screens/AdminCodesTable";
import { LogIn } from "./screens/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/users",
    element: <AdminUserTable />,
  },
  {
    path: "/partners",
    element: <AdminPartnerTable />,
  },
  {
    path: "/bonreduction",
    element: <AdminBonTable />,
  },
  {
    path: "/codes",
    element: <AdminCodesTable />,
  },
]);
