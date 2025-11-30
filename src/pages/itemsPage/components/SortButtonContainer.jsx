import usePopoverToggle from "@/hooks/usePopoverToggle";
import Popup from "../../../components/common/Popup";
import * as S from "./SortButtonContainer.Style";

const SortButtonContainer = ({ children, onClick, options }) => {
  const { isOpen, close, toggle, buttonRef, contentRef } = usePopoverToggle();

  const handleSelect = (value) => {
    onClick(value);
    close();
  };

  return (
    <S.ButtonWapper>
      <div ref={buttonRef} onClick={toggle}>
        {children}
      </div>
      <S.ModalContainer id="sortPopup" ref={contentRef} />
      {isOpen && (
        <Popup modalRoot="sortPopup" isOpen={isOpen}>
          {options.map((el) => (
            <S.ModalItem onClick={() => handleSelect(el.text)} key={el.text}>
              {el.text}
            </S.ModalItem>
          ))}
        </Popup>
      )}
    </S.ButtonWapper>
  );
};

export default SortButtonContainer;
