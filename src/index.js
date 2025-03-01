import React from "react";
import ReactDOM from "react-dom/client";
import Time from "./Time";
import Login from "./Login";
import "./styles.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Time />
    <Login />
  </React.StrictMode>
);
