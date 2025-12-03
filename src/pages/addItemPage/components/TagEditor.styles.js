import styled from "styled-components";

export const TagWrapper = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  color: var(--gray800);
  background-color: var(--gray100);
  border-radius: 999px;
  padding: 5px 12px 5px 16px;
`;
