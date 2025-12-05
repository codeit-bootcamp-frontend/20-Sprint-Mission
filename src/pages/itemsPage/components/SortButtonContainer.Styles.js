import styled from "styled-components";

export const ButtonWapper = styled.div`
  position: relative;
  order: 4;
`;

export const ModalContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50px;
  right: 0;
`;

export const ModalItem = styled.div`
  width: 130px;
  padding: 9px 0 7px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;
