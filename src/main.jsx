import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Errorpage/ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Banner from "./components/Home/Banner";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import AllToy from "./components/Alltoy/AllToy";
import Blog from "./components/Blog/Blog";
import AddToy from "./components/Add_A_toy/AddToy";
import MyToy from "./components/MyToys/MyToy";
import UpdateData from "./components/Update/UpdateData";
import PrivateRouter from "./components/Private/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "update/:id",
        element: <UpdateData />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-jahed121421.vercel.app/mytoy/${params.id}`
          ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "alltoy",
        element: <AllToy />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "addatoy",
        element: (
          <PrivateRouter>
            <AddToy />
          </PrivateRouter>
        ),
      },
      {
        path: "mytoy",
        element: (
          <PrivateRouter>
            <MyToy />
          </PrivateRouter>
        ),
      },
      {
        path: "showdetails/:id",
        element: (
          <PrivateRouter>
            <ShowDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-jahed121421.vercel.app/alldata/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto my-7">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
