import { Button, Modal } from "antd";
import { UserOutlined } from '@ant-design/icons';

interface UserModalProps {
    openModal: boolean;
    closeModal: () => void;
}

export function UserModal(props: UserModalProps) {
    return (
        <>
            <Modal
                open={props.openModal}
                onCancel={props.closeModal}
                width={1000}
                title="Usuário"
            >
            </Modal>
        </>
    )
}

interface UserButtonProps {
    openModal: () => void;
}

export function UserButton(props: UserButtonProps) {
    return (
        <Button onClick={props.openModal} shape="circle" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center" }} icon={<UserOutlined />} />
    )
}