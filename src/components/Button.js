import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 3px 10px;
  background-color: white;
  color: green;
  border: 2px solid green;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: green;
      color: white;
      border: 2px solid darkgreen;
    `}
`;
export default Button;
