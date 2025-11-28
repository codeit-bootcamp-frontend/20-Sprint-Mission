import usePopoverToggle from "@/hooks/usePopoverToggle";
import { ITEMS_DATA } from "@/pages/ItemsPage";
import Popup from "../common/Popup";
import * as S from "./SortButtonContainer.Style";

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
  <S.ButtonWapper>
    <div ref={buttonRef} onClick={onToggle}>
      {children}
    </div>
    <S.ModalContainer ref={contentRef} id={id} />
    {isOpen && (
      <Popup modalRoot={id} isOpen={isOpen}>
        {options.map((el) => (
          <S.ModalItem onClick={() => onSelect(el.text)} key={el.text}>
            {el.text}
          </S.ModalItem>
        ))}
      </Popup>
    )}
  </S.ButtonWapper>
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
