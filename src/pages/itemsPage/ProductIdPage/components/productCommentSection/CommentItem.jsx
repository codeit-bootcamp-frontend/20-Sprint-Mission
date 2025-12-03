import user from "@/assets/imgs/user.png";
import KebebSvg from "@/assets/svg/KebebSvg";
import { formatDate } from "@/utils/date";
import { useState } from "react";
import * as S from "./CommentItem.styles";

const CommentItem = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부

  return (
    <S.CommentItemWrapper>
      {isEditing ? (
        <S.CommentEditWrapper>
          <S.CommentEdit placeholder={comment.content} />
        </S.CommentEditWrapper>
      ) : (
        <S.CommentContentWrapper>
          <S.CommentContent>{comment.content}</S.CommentContent>
          <S.SettingButton>
            <KebebSvg />
          </S.SettingButton>
        </S.CommentContentWrapper>
      )}
      <S.bottomWrapper>
        <S.CommentAuthor>
          <S.CommentAvatar>
            <img src={user} alt="유저 이미지" />
          </S.CommentAvatar>
          <div>
            <S.CommentAuthorName>{comment.writer.nickname}</S.CommentAuthorName>
            <S.CommentTime>{formatDate(comment.createdAt)}</S.CommentTime>
          </div>
        </S.CommentAuthor>
        {isEditing ? (
          <S.ButtonWrapper>
            <S.EditingCancelButton>취소</S.EditingCancelButton>
            <S.EditingSubmitButton size="sm" fontSize="sm">
              수정 완료
            </S.EditingSubmitButton>
          </S.ButtonWrapper>
        ) : null}
      </S.bottomWrapper>
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
