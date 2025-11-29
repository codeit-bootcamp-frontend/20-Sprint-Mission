import ImagePreviewInput from "@/components/common/ImagePreviewInput";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import * as S from "./AddItemPage.styles";
import AddItemHeader from "./components/AddItemHeader";

const AddItemPage = () => {
  return (
    <S.AddItemLayout>
      <AddItemHeader />
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
    </S.AddItemLayout>
  );
};

export default AddItemPage;
