import { Button, Modal } from "antd";
import { UserOutlined } from '@ant-design/icons';

interface UserModalProps {
    open: boolean;
    closeModal: () => void;
}

export function UserModal(props: UserModalProps) {
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

export function UserButton() {
    return (
        <Button shape="circle" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center" }} icon={<UserOutlined />} />
    )
}