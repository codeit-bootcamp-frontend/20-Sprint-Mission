import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import * as S from "./ProductCommentSection.styles";

const ProductCommentSection = () => {
  return (
    <S.Section>
      <CommentForm />
      <CommentItem />
    </S.Section>
  );
};

export default ProductCommentSection;
