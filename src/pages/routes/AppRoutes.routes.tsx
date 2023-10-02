import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Checkout } from "../Checkout/Checkout";
import { ProductList } from "../Products/ProductList";
import { Product } from "../Products/Product";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
