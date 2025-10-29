import usePopoverToggle from "@/hooks/usePopoverToggle";
import { ITEMS_DATA } from "@/pages/ItemsPage";
import { useCallback } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const SortButtonContainer = ({ children, onClick }) => {
  const { isOpen, close, toggle, buttonRef, contentRef } = usePopoverToggle();

  const rootId = "sortModal";

  const handleSelect = useCallback(
    (value) => {
      onClick(value);
      close();
    },
    [close]
  );

  return (
    <div style={{ order: "4", position: "relative" }}>
      <div ref={buttonRef} onClick={toggle}>
        {children}
      </div>
      {/* 포탈 루트(위치 기준용) */}
      <ModalContainer ref={contentRef} id={rootId} />
      {isOpen && (
        <Modal modalRoot={rootId} isOpen={isOpen}>
          {ITEMS_DATA.sections.all.sort.options.map((el) => (
            <ModalItem onClick={() => handleSelect(el.text)} key={el.text}>
              {el.text}
            </ModalItem>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default SortButtonContainer;

const ModalContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50px;
  right: 0;
`;

const ModalItem = styled.div`
  width: 130px;
  padding: 9px 0 7px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;
