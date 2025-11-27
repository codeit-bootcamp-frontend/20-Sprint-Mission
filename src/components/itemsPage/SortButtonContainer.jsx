import usePopoverToggle from "@/hooks/usePopoverToggle";
import { ITEMS_DATA } from "@/pages/ItemsPage";
import styled from "styled-components";
import Modal from "../Modal";

const SortButtonView = ({
  id,
  isOpen,
  onToggle,
  onSelect,
  options,
  buttonRef,
  contentRef,
  children,
}) => (
  <div style={{ order: "4", position: "relative" }}>
    <div ref={buttonRef} onClick={onToggle}>
      {children}
    </div>
    <ModalContainer ref={contentRef} id={id} />
    {isOpen && (
      <Modal modalRoot={id} isOpen={isOpen}>
        {options.map((el) => (
          <ModalItem onClick={() => onSelect(el.text)} key={el.text}>
            {el.text}
          </ModalItem>
        ))}
      </Modal>
    )}
  </div>
);

const SortButtonContainer = ({ children, onClick }) => {
  const { isOpen, close, toggle, buttonRef, contentRef } = usePopoverToggle();
  const options = ITEMS_DATA.sections.all.sort.options;
  const id = ITEMS_DATA.sections.all.sort.modalRootId;

  const handleSelect = (value) => {
    onClick(value);
    close();
  };

  return (
    <SortButtonView
      id={id}
      isOpen={isOpen}
      onToggle={toggle}
      onSelect={handleSelect}
      options={options}
      buttonRef={buttonRef}
      contentRef={contentRef}
    >
      {children}
    </SortButtonView>
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
