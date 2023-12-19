import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginMain from "./myComponent/Login_SignUp/LoginMain.js";
import Login from "./myComponent/Login_SignUp/Login.js";
import SignUp from "./myComponent/Login_SignUp/SignUp.js";
import User_Homepage from "./myComponent/Pages/User_Homepage.js";

const App = () => {
  return <div className="App_Container">{console.log("App Rendered...")}</div>;
};

const AppRouter = createBrowserRouter([
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
    path: "/userhomepage/",
    element: <User_Homepage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
