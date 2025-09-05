import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import News from "../components/News";
import About from "../components/About";
// import Login from "../pages/Login";
import Career from "../components/Career";
// import Register from "../pages/Register";
import AuthForm from "../pages/LoginForm";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
//   {
//     path: "/login/register/login",
//     element: <Login />,
//   },
//   {
//     path: "/login/register",
//     element: <Register />,
//   },
  {
    path: "login",
    element: <AuthForm />,
  },
]);
