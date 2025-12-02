import ImagePreviewInput from "@/components/common/ImagePreviewInput";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { useReducer } from "react";
import * as S from "./AddItemPage.styles";
import AddItemHeader from "./components/AddItemHeader";
import TagEditor from "./components/TagEditor";

const initialFormState = {
  product: "",
  description: "",
  price: "",
  tags: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state?.tags, action.tag],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((t) => t !== action.tag),
      };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
};

const AddItemPage = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const { product, description, price, tags } = formState;

  const isValid =
    product.trim() !== "" &&
    description.trim() !== "" &&
    price.trim() !== "" &&
    tags.length > 0;

  const handleChange = (name) => (e) => {
    let value = e.target.value;

    if (name === "price") {
      value = value.replace(/[^0-9]/g, "");
    }

    dispatch({
      type: "CHANGE_FIELD",
      name,
      value,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleAddTag = (tag) => {
    dispatch({ type: "ADD_TAG", tag });
  };

  const handleRemoveTag = (tag) => {
    dispatch({ type: "REMOVE_TAG", tag });
  };

  return (
    <S.AddItemLayout>
      <AddItemHeader isValid={!isValid} onClick={handleSubmit} />
      <ImagePreviewInput label="상품 이미지" id="productImg" />
      <Input
        value={product}
        label="상품 명"
        id="product"
        placeholder="상품명을 입력해주세요"
        onChange={handleChange("product")}
      />
      <Textarea
        value={description}
        label="상품 소개"
        id="productDescript"
        placeholder="상품 소개를 입력해주세요"
        onChange={handleChange("description")}
      />
      <Input
        value={price}
        label="판매 가격"
        id="price"
        placeholder="판매 가격을 입력해주세요"
        onChange={handleChange("price")}
      />
      <TagEditor
        tags={tags}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
      />
    </S.AddItemLayout>
  );
};

export default AddItemPage;
