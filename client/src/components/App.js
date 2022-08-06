import Home from "./Home";
import Products from "./Products/Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Header from "./Header";
import ResponsiveGrid from "./ResponsiveGrid";
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/items/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/grid" element={<ResponsiveGrid />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
