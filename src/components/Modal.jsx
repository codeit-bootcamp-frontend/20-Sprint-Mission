import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ isOpen, children, modalRoot }) => {
  if (!isOpen) return null;

  return createPortal(
    <DIV>{children}</DIV>,
    document.getElementById(modalRoot)
  );
};

export default Modal;

const DIV = styled.div`
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 12px;
`;
