import { Modal } from "antd";
import { Product } from "../Product/Product";
interface ProductModalProps {
  open: boolean;
  closeModal: () => void;
}

export function ProductModal(props: ProductModalProps ) {
  return (
    <>
      <Modal open={props.open} onCancel={props.closeModal}>
        <Product />
      </Modal>
    </>
  );
}
