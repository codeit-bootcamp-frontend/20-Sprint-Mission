import user from "@/assets/imgs/user.png";
import KebebSvg from "@/assets/svg/KebebSvg";
import { useState } from "react";
import * as S from "./CommentItem.styles";

const CommentItem = ({}) => {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부

  return (
    <S.CommentItemWrapper>
      {isEditing ? (
        <S.CommentEditWrapper>
          <S.CommentEdit placeholder="기존 댓글 내용" />
        </S.CommentEditWrapper>
      ) : (
        <S.CommentContentWrapper>
          <S.CommentContent>댁슬내용</S.CommentContent>
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
            <S.CommentAuthorName>이름</S.CommentAuthorName>
            <S.CommentTime>tlrks</S.CommentTime>
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
