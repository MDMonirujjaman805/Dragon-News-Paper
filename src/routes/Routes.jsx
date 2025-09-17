import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../components/About";
import Career from "../components/Career";
import AuthForm from "../pages/LoginForm";
import CategoryNews from "../pages/CategoryNews";
import ErrorPage from "../components/ErrorPage";
import SingleNews from "../pages/SingleNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
      // {
      //   path: "/news/:id",
      //   element: <SingleNews />,
      //   loader: ({ params }) =>
      //     fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      // },
    ],
  },
  {
    path: "/news/:id",
    element: <SingleNews />,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "career",
    element: <Career />,
  },
  {
    path: "authform",
    element: <AuthForm />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
