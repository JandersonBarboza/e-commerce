import { Link } from "react-router-dom";

export function ProductList() {
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
    </>
  );
}
