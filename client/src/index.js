import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.tsx";
import { ShopDataProvider } from "./components/ShopDataContext"; //Add the Context Provider to the entire application

ReactDOM.render(
  <ShopDataProvider>
    <App />
  </ShopDataProvider>,
  document.getElementById("root")
);
