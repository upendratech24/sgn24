import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from "./myComponent/Pages/SignUp";
import Login from "./myComponent/Pages/Login";
import LoginMain from "./myComponent/Pages/LoginMain";
import User_HP from "./myComponent/Pages/User_HP";
import Error from "./myComponent/Pages/Error";

const App = () => {
  return (
    <div className="App_Container">
      <div className="Null_Container"></div>
      <Outlet />
      {console.log("App Rendered...")}
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginMain />,
      },
      {
        path: "/accounts/emailsignup/",
        element: <SignUp />,
      },
      {
        path: "/accounts/login/",
        element: <Login />,
      },
      {
        path: "/accounts/user/",
        element: <User_HP />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
