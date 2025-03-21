import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profiles from "./components/Profiles.jsx";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedGuard.jsx";
import RoleGuard from "./components/RoleGuard.jsx";
import Admin from "./components/Admin.jsx";
import Multilpe from "./components/Multilpe.jsx";
import StyleComp from "./components/StyleComp.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Page Not found</div>,
  },
  {
    path: "/multiple",
    element: <Multilpe />,
  },
  {
    path: "/style",
    element: <StyleComp />,
  },
  { path: "login", element: <Login /> },
  {
    path: "admin",
    element: <RoleGuard allowedRoles={["admin"]} />,
    children: [
      {
        path: "",
        element: <Admin> </Admin>,
      },
    ],
  },

  {
    path: "/profiles",
    element: <Profiles />,
    children: [
      {
        
        path: "/profiles/:profileId",
        element: <Profile />,
      },
    ],
  },
  {
    
    path: "dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
