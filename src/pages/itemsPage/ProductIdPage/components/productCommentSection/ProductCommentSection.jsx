import EmptyImg from "@/assets/imgs/img_inquiry_empty.png";
import BackSvg from "@/assets/svg/BackSvg";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import * as S from "./ProductCommentSection.styles";

const ProductCommentSection = () => {
  const [commentList, setCommentList] = useState([]);

  return (
    <S.Section>
      <CommentForm />
      {commentList.length === 0 ? (
        <S.EmptyWrapper>
          <img src={EmptyImg} alt="비어있음 이미지" />
          <S.EmptyText>아직 문의가 없어요</S.EmptyText>
        </S.EmptyWrapper>
      ) : (
        <S.CommentItemWrapper>
          <CommentItem />
        </S.CommentItemWrapper>
      )}
      <S.ReturnButton radius="max">
        목록으로 돌아가기 <BackSvg />
      </S.ReturnButton>
    </S.Section>
  );
};

export default ProductCommentSection;
