import BlueButton from "@/components/common/BlueButton";
import ImagePreviewInput from "@/components/common/imagePreviewInput/ImagePreviewInput";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import * as S from "./AddItemFromContainer.styles";

const AddItemFromContainer = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.SubTitle>상품 등록하기</S.SubTitle>
        <S.ButtonWrapper>
          <BlueButton size="sm" fontSize="sm">
            등록
          </BlueButton>
        </S.ButtonWrapper>
      </S.HeaderWrapper>
      <ImagePreviewInput label="상품 이미지" id="productImg" />
      <Input label="상품 명" id="product" placeholder="상품명을 입력해주세요" />
      <Textarea
        label="상품 소개"
        id="productDescript"
        placeholder="상품 소개를 입력해주세요"
      />
      <Input
        label="판매 가격"
        id="price"
        placeholder="판매 가격을 입력해주세요"
      />
      <Input label="태그" id="tag" placeholder="태그을 입력해주세요" />
    </>
  );
};

export default AddItemFromContainer;
