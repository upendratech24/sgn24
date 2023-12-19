import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginMain from "./myComponent/Pages/LoginMain.js";
import Login from "./myComponent/Pages/Login.js";
import SignUp from "./myComponent/Pages/SignUp.js";
import User_Homepage from "./myComponent/Pages/User_Homepage.js";
import Error from "./myComponent/Pages/Error.js";

const App = () => {
  return (
    <div className="App_Container">
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
        path: "/accounts/emailsignup/",
        element: <SignUp />,
      },
      {
        path: "/accounts/login/",
        element: <Login />,
      },
      {
        path: "/accounts/loginmain/",
        element: <LoginMain />,
      },
      {
        path: "/userhomepage/",
        element: <User_Homepage />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
