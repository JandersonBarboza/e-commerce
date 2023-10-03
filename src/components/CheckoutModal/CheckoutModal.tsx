import { Button, Modal } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

interface CheckoutModalProps {
    openModal: boolean;
    closeModal: () => void;
}

export function CheckoutModal(props: CheckoutModalProps) {
    return (
        <>
            <Modal
                open={props.openModal}
                onCancel={props.closeModal}
                width={1000}
                title="Checkout"
            >
            </Modal>
        </>
    )
}

interface CheckoutButtonProps {
    openModal: () => void;
}

export function CheckoutButton(props: CheckoutButtonProps) {
    return (
        <Button onClick={props.openModal} shape="circle" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center" }} icon={<ShoppingCartOutlined />} />
    )
}