import { getProductCommentList } from "@/api/productFetch";
import { PATH } from "@/app/router";
import EmptyImg from "@/assets/imgs/img_inquiry_empty.png";
import BackSvg from "@/assets/svg/BackSvg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import * as S from "./ProductCommentSection.styles";

const ProductCommentSection = ({ productId }) => {
  let navigate = useNavigate();
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getProductCommentList(productId, { limit: 100 }).then((res) =>
      setCommentList(res.list)
    );
  }, []);

  const handelToList = () => {
    navigate(PATH.ITEMS);
  };

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
          {commentList.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </S.CommentItemWrapper>
      )}
      <S.ReturnButton radius="max" onClick={handelToList}>
        목록으로 돌아가기 <BackSvg />
      </S.ReturnButton>
    </S.Section>
  );
};

export default ProductCommentSection;
