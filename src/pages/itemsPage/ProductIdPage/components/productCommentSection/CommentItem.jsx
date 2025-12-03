import user from "@/assets/imgs/user.png";
import KebebSvg from "@/assets/svg/KebebSvg";
import Popup from "@/components/common/Popup";
import usePopoverToggle from "@/hooks/usePopoverToggle";
import { formatDate } from "@/utils/date";
import { useState } from "react";
import * as S from "./CommentItem.styles";

const CommentItem = ({ comment }) => {
  const { isOpen, toggle, buttonRef, contentRef } = usePopoverToggle();
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing((pre) => !pre);
  };

  const handleDeleteComment = () => {
    alert("로그인 후 사용 가능합니다.");
  };

  const handleEditingComment = () => {
    alert("로그인 후 사용 가능합니다.");
  };

  return (
    <S.CommentItemWrapper>
      {isEditing ? (
        <S.CommentEditWrapper>
          <S.CommentEdit placeholder={comment.content} />
        </S.CommentEditWrapper>
      ) : (
        <S.CommentContentWrapper>
          <S.CommentContent>{comment.content}</S.CommentContent>
          <S.SettingButtonWrapper>
            <button ref={buttonRef} onClick={toggle}>
              <KebebSvg />
            </button>
            <S.EditingPopupWrapper id="EditPopup" ref={contentRef} />
            {isOpen && (
              <Popup modalRoot="EditPopup" isOpen={isOpen}>
                <S.EditingItem onClick={handleIsEditing}>
                  수정하기
                </S.EditingItem>
                <S.EditingItem onClick={handleDeleteComment}>
                  삭제하기
                </S.EditingItem>
              </Popup>
            )}
          </S.SettingButtonWrapper>
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
            <S.EditingCancelButton onClick={handleIsEditing}>
              취소
            </S.EditingCancelButton>
            <S.EditingSubmitButton
              size="sm"
              fontSize="sm"
              onClick={handleEditingComment}
            >
              수정 완료
            </S.EditingSubmitButton>
          </S.ButtonWrapper>
        ) : null}
      </S.bottomWrapper>
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
