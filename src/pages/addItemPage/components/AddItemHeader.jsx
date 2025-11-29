import BlueButton from "@/components/common/BlueButton";
import * as S from "./AddItemHeader.styles";

const AddItemHeader = ({ isValid, onClick }) => {
  return (
    <S.HeaderWrapper>
      <S.SubTitle>상품 등록하기</S.SubTitle>
      <S.ButtonWrapper>
        <BlueButton
          onClick={onClick}
          disabled={isValid}
          size="sm"
          fontSize="sm"
        >
          등록
        </BlueButton>
      </S.ButtonWrapper>
    </S.HeaderWrapper>
  );
};

export default AddItemHeader;
