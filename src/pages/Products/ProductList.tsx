import { useState } from "react";
import { Col, Row } from "antd";
import { ProductModal } from "../../components/ProductModal/ProductModal";
import { Product } from "../../components/Product/Product";
import { FakeDB as dataDB } from "../../database/FakeDB";
import { Navigation } from "../../components/Navigation/Navigation";

export function ProductList() {
  const [open, setOpen] = useState<boolean>(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div style={{ padding: "8px 16px", width: "100%", background: "#fff" }}>
        <Navigation pageName={"Products"}/>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, height: "80vh", margin: "32px 320px", overflowY: "auto", scrollbarColor: "transparent" }}>
        <Row gutter={[0, 16]}>
          {dataDB.products.map((e, i) => {
            return (
              <Col span={6} key={i}>
                <Product
                  titulo={e.name}
                  imgUrl={e.image}
                  preco={e.price}
                  peso={e.weight}
                  openModal={openModal}
                  extra={e.extra}
                />
              </Col>
            )
          })}
        </Row>
      </div>
      <ProductModal openModal={open} closeModal={closeModal} />
    </>
  );
}
