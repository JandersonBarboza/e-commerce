import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Checkout } from "../Checkout/Checkout";

import { Layout } from "antd";
import { ProductList } from "../Products/ProductList";
import { CheckoutButton } from "../../components/CheckoutModal/CheckoutModal";
import { UserButton } from "../../components/UserModal/UserModal";

const HeaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#ffab00",
  color: "#fff",
  width: "100%",
  height: "5vh"
}

const ContentStyle = {
  height: "90vh",
  top: "5vh",
  background: "#fff",
}

const FooterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
  color: "#ffab00",
  zIndex: 1,
  width: "100%",
  height: "5vh",
  bottom: 0
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Layout.Header style={HeaderStyle} >
          <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div />
            <Link to="/" style={{ color: "white" }}>Sistema e-Commerce</Link>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <CheckoutButton />
              <UserButton />
            </div>
          </div>
        </Layout.Header>
        <Layout.Content style={ContentStyle}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </Layout.Content>
        <Layout.Footer style={FooterStyle}>
          <span style={{ margin: "0 4px", color: "#000" }}>JanDev @2023</span> | <a href="github.com/jandersonbarboza" style={{ margin: "0 4px", color: "#000" }}>Github</a> | <a href="github.com/jandersonbarboza" style={{ margin: "0 4px", color: "#000" }}>Website</a>
        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
}
