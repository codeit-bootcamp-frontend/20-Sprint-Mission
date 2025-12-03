import BlueButton from "@/components/common/BlueButton";
import Textarea from "@/components/common/Textarea";
import { media } from "@/styles/media";
import styled from "styled-components";

export const CommetnFromWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-bottom: 24px;

  @media ${media.tablet} {
    margin-bottom: 40px;
  }
`;

export const SubmitButton = styled(BlueButton)`
  width: 74px;
`;

export const AddCommentTextarea = styled(Textarea)`
  width: 100%;

  Label {
    margin-bottom: 8px;
  }

  textarea {
    height: 104px;
  }

  @media ${media.mobile} {
    height: 129px;
  }
`;
