import { Row, Col, Image } from "antd";
import { Link, useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  return (
    <div>
      <div>Produto número: {id}</div>
      <Link to="/">Home</Link>
      <Link to="/checkout">Carrinho</Link>
      <Row gutter={8}>
        <Col span={4} style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
            style={{ width: 200, height: 200, objectFit: "cover" }}
          />
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
            style={{ width: 200, height: 200, objectFit: "cover" }}
          />
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
            style={{ width: 200, height: 200, objectFit: "cover" }}
          />
        </Col>
        <Col span={10}>
          <Image
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
            style={{ width: 600, height: 600, objectFit: "cover" }}
          />
        </Col>
        <Col span={10}>
          <Row>
            <Col span={24}>Produto {id}</Col>
          </Row>
          <Col span={24}>
            De: <s style={{ color: "orange" }}>R$15,00</s>
          </Col>
          <Col span={24}>
            Por: <strong style={{ color: "green" }}>R$9,99</strong>
          </Col>
          <Col></Col>
        </Col>
      </Row>
    </div>
  );
}
