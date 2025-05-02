import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div>This is Modal</div>,
    document.getElementById('modal')
  );
}

export default Modal;
