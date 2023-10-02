import { Carousel } from "antd";
import { Link } from "react-router-dom";

const CarouselStyle = {
  display: "flex",
  justifyContent: "center",
  height: "50vh",
  background: "#2d2d33"
}

const CarouselItemStyle = {
  display: "flex",
  justifyContent: "center",
}

export function Home() {
  return (
    <div style={{}}>
      <Carousel autoplay style={CarouselStyle}>
        <div style={CarouselItemStyle}>Promoção do dia: Banana e Uva</div>
        <div style={CarouselItemStyle}>Descontão de até 10%</div>
        <div style={CarouselItemStyle}>Teste 1</div>
        <div style={CarouselItemStyle}>Teste 2</div>
      </Carousel>
      <Link to="/products">Lista de Produtos</Link>
    </div>
  );
}
