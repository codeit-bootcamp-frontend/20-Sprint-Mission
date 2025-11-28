import { createPortal } from "react-dom";
import styled from "styled-components";

const Popup = ({ isOpen, children, modalRoot }) => {
  if (!isOpen) return null;

  return createPortal(
    <Container>{children}</Container>,
    document.getElementById(modalRoot)
  );
};

export default Popup;

const Container = styled.div`
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 12px;
`;
