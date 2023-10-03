import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Checkout } from "../Checkout/Checkout";

import { Layout } from "antd";
import { ProductList } from "../Products/ProductList";
import { CheckoutButton, CheckoutModal } from "../../components/CheckoutModal/CheckoutModal";
import { UserButton, UserModal } from "../../components/UserModal/UserModal";
import { useState } from "react";

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
  const [openCheckout, setOpenChekout] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);

  function openCheckoutModal() {
    setOpenChekout(true);
  }

  function closeCheckoutModal() {
    setOpenChekout(false);
  }

  function openUserModal() {
    setOpenUser(true);
  }

  function closeUserModal() {
    setOpenUser(false);
  }
  return (
    <BrowserRouter>
      <Layout>
        <Layout.Header style={HeaderStyle} >
          <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div />
            <Link to="/" style={{ color: "white", fontSize: 24 }}>Sistema e-Commerce</Link>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <CheckoutButton openModal={openCheckoutModal} />
              <UserButton openModal={openUserModal} />
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
          <span style={{ margin: "0 4px", color: "#000" }}>JanDev @2023</span> | <a href="https://github.com/jandersonbarboza" style={{ margin: "0 4px", color: "#000" }}>Github</a> | <a href="" style={{ margin: "0 4px", color: "#000" }}>Website</a>
        </Layout.Footer>
      </Layout>
      <CheckoutModal openModal={openCheckout} closeModal={closeCheckoutModal} />
      <UserModal openModal={openUser} closeModal={closeUserModal} />
    </BrowserRouter>
  );
}
