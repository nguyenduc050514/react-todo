import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UsersPage from "./pages/users.jsx";
import BooksPage from "./pages/books.jsx";
import TodoApp from "./components/TodoApp.jsx";
import ErrorPage from "./pages/error.jsx";
const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            index: true,
            element: <TodoApp />,
         },
         {
            path: "/login",
            element: <LoginPage />,
         },
         {
            path: "/register",
            element: <RegisterPage />,
         },
         {
            path: "/users",
            element: <UsersPage />,
         },
         {
            path: "/books",
            element: <BooksPage />,
         },
      ],
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);
createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
