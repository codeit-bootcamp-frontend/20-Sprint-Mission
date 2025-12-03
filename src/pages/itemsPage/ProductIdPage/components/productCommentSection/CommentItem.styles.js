import BlueButton from "@/components/common/BlueButton";
import Textarea from "@/components/common/Textarea";
import styled from "styled-components";

export const CommentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 12px;
  border-bottom: 1px solid var(--gray300);
`;

export const CommentEditWrapper = styled.form`
  width: 100%;
  margin-bottom: 16px;
`;

export const CommentEdit = styled(Textarea)`
  height: 80px;
`;

export const CommentContentWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--gray400);
`;

export const CommentContent = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray800);
`;

export const SettingButton = styled.button``;

export const bottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentAuthor = styled.div`
  display: flex;
  gap: 8px;
`;

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CommentAuthorName = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--gray600);
  margin-bottom: 4px;
`;

export const CommentTime = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--gray400);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const EditingCancelButton = styled.button`
  font-weight: 600;
  font-size: 1.6rem;
  padding: 0 20px;
  color: var(--gray500);
`;

export const EditingSubmitButton = styled(BlueButton)`
  width: 106px;
`;
