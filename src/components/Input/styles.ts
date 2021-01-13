import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  error?: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 16px;
  color: #666360;
  font-size: 14px;
  border-radius: 10px;
  height: 50px;

  border: 2px solid #fff;

  ${props =>
    props.isFocus &&
    css`
      border: 2px solid #002b96;
      color: #002b96;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #002b96;
    `}
  
    ${props =>
    props.error &&
    css`
      border: 2px solid #c53030;
    `}
  svg {
    margin-right: 10px;
  }

  input {
    flex: 1;
    /* font-size: 16px; */
    background: transparent;
    font-weight: normal;
    &::placeholder {
      color: #666360;
    }
  }
`;
