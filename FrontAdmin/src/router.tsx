import { createBrowserRouter } from "react-router-dom";
import { AdminUserTable } from "./screens/AdminUserTable";
import { LogIn } from "./screens/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/admin",
    element: <AdminUserTable />,
  },
]);
