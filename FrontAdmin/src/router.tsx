import { createBrowserRouter } from "react-router-dom";
import { AdminUserTable } from "./screens/AdminUserTable";
import { AdminPartnerTable } from "./screens/AdminPartnerTable";
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
]);
