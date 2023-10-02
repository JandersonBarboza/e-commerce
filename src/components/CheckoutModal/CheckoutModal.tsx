import { Button, Modal } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

interface CheckoutModalProps {
    open: boolean;
    closeModal: () => void;
}

export function CheckoutModal(props: CheckoutModalProps) {
    return (
        <>
            <Modal
                open={props.open}
                onCancel={props.closeModal}
                width={1000}
            >
            </Modal>
        </>
    )
}

export function CheckoutButton() {
    return (
        <Button shape="circle" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center" }} icon={<ShoppingCartOutlined />} />
    )
}