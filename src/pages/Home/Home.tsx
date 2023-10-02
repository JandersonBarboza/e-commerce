import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/checkout">Carrinho</Link>
      <div>Home</div>
      <Link to="/products">Lista de Produtos</Link>
    </>
  );
}
