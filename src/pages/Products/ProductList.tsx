import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ProductModal } from "../../components/ProductModal/ProductModal";

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
      <div>
        <Link to="/checkout">Carrinho</Link>
      </div>
      <Link to="/">Home</Link>
      <br />
      <Link to={`/product/${1}`}>Produto A</Link>
      <br />
      <Link to={`/product/${2}`}>Produto B</Link>
      <br />
      <Link to={`/product/${3}`}>Produto C</Link>
      <br />
      <Button type="primary" onClick={openModal}>Teste Modal</Button>
      <ProductModal open={open} closeModal={closeModal}/>
    </>
  );
}
