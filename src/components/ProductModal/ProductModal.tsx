import { Modal } from "antd";
interface ProductModalProps {
  openModal: boolean;
  closeModal: () => void;
}

export function ProductModal(props: ProductModalProps) {
  return (
    <>
      <Modal
        open={props.openModal}
        onCancel={props.closeModal}
        width={1000}
        title="Produto"
      >
      </Modal>
    </>
  );
}
