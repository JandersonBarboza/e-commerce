import { Badge, Button, Card, Col, Row } from "antd";
import { SearchOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useState } from "react";
interface ProductProps {
    titulo?: string;
    imgUrl?: string;
    preco?: number;
    peso?: number;
    extra?: string;
    openModal: () => void;
}

export function Product(props: ProductProps) {
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count === 0) return;
        setCount(count - 1);
    }

    return (

        <Card
            title={props.titulo}
            style={{ width: 300 }}
            extra={props.preco ? `R$ ${props.preco}` : "R$ 0,00"}
            cover={
                props.extra ?
                    <Badge.Ribbon text={props.extra} color="orange">
                        <img
                            src={props.imgUrl}
                            style={{ width: 300, height: 200, objectFit: "cover" }}
                        />
                    </Badge.Ribbon>
                    :
                    <img
                        src={props.imgUrl}
                        style={{ width: 300, height: 200, objectFit: "cover" }}
                    />
            }
            bodyStyle={{ padding: 10 }}
        >
            <Row>
                <Col span={2} >{props.peso ? `${count > 0 ? props.peso * count : 0}Kg`:""}</Col>
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