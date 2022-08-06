import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ShopDataProvider } from "../src/components/ShopDataContext"; //Add the Context Provider to the entire application

ReactDOM.render(
  <React.StrictMode>
    <ShopDataProvider>
      <App />
    </ShopDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
