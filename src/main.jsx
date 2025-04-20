import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/login",
      element: <h1>Hello Login Page</h1>,
   },
   {
      path: "/register",
      element: <h1>Hello register Page</h1>,
   },
   {
      path: "/users",
      element: <h1>Hello users Page</h1>,
   },
   {
      path: "/products",
      element: <h1>Hello products Page</h1>,
   },
]);
createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
