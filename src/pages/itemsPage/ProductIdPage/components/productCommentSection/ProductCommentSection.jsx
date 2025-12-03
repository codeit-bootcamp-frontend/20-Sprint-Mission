import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import * as S from "./ProductCommentSection.styles";

const ProductCommentSection = () => {
  return (
    <S.Section>
      <CommentForm />
      <S.CommentItemWrapper>
        <CommentItem />
      </S.CommentItemWrapper>
    </S.Section>
  );
};

export default ProductCommentSection;
