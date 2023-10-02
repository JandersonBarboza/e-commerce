import { Button, Card, Col, Row } from "antd";
import { SearchOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useState } from "react";
interface ProductProps {
    titulo?: string;
    imgUrl?: string;
    preco?: number;
    openModal: () => void;
}

export function Product(props: ProductProps) {
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if(count === 0) return;
        setCount(count - 1);
    }

    return (
        <Card
            title={props.titulo}
            style={{ width: 300 }}
            extra={props.preco ? `R$ ${props.preco}` : "R$ 0,00"}
            cover={
                <img
                    src={props.imgUrl}
                    style={{ width: 300, height: 200, objectFit: "cover" }}
                />
            }
            bodyStyle={{ padding: 10 }}
        >
            <Row>
                <Col span={2} ></Col>
                <Col span={18} style={{ display: "flex", justifyContent: "center", gap: 4 }}>
                    <Button
                        type="primary"
                        icon={<MinusOutlined />}
                        onClick={decrement}
                    />
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={increment}
                    />
                    <Button
                        type="default"

                    >
                        {count}
                    </Button>
                </Col>
                <Col span={2}>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={props.openModal}
                    />
                </Col>
            </Row>
        </Card>
    )
}