import { Modal } from "antd";
interface ProductModalProps {
  open: boolean;
  closeModal: () => void;
}

export function ProductModal(props: ProductModalProps) {
  return (
    <>
      <Modal
        open={props.open}
        onCancel={props.closeModal}
        width={1000}
      >
      </Modal>
    </>
  );
}
