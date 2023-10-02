import { useState } from "react";
import { Col, Row } from "antd";
import { ProductModal } from "../../components/ProductModal/ProductModal";
import { Product } from "../../components/Product/Product";
import { FakeDB as dataDB } from "../../database/FakeDB";

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
      <div style={{ display: "flex", justifyContent: "center", gap: 12, height: "85vh", margin: "32px 320px", overflowY: "auto", scrollbarColor: "transparent" }}>
        <Row gutter={[0, 16]}>
          {dataDB.products.map((e, i) => {
            return (
              <Col span={6} key={i}>
                <Product
                  titulo={e.name}
                  imgUrl={e.image}
                  preco={e.price}
                  openModal={openModal}
                />
              </Col>
            )
          })}
        </Row>
      </div>
      <ProductModal open={open} closeModal={closeModal} />
    </>
  );
}
