import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

ReactDOM.render(
  <div>
    <App city="Oslo" />
  </div>,
  document.getElementById("weather-container")
);
