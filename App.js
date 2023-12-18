import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./myComponent/Login/Login";

const App = () => {
  return (
    <div className="App_Container">
      {/* <App_Header />
      <App_Body />
      <App_Footer /> */}
      <Login />
      {console.log("App Running...")}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
