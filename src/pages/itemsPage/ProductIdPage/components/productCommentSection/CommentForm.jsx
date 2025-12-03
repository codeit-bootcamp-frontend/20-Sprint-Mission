import * as S from "./CommentForm.styles";
const CommentForm = () => {
  return (
    <S.CommetnFromWrapper>
      <S.AddCommentTextarea
        id="addComment"
        label="문의하기"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <S.SubmitButton size="sm" fontSize="sm">
        등록
      </S.SubmitButton>
    </S.CommetnFromWrapper>
  );
};

export default CommentForm;
