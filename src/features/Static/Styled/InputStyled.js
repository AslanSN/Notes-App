import styled from "styled-components";
import { Tokens } from "../Tokens";
/**
 * ! Input
 * * AslanSN - 22-07-02
 * @returns Styled Component - styled library
 */
export const InputStyled = styled.input`
  font-size: ${Tokens.Text.Size.p};
  width: calc(1rem + 30vmax);
  height: calc(0.1rem + 5vmin);
  padding: 0.2rem 1rem 0.2rem 1rem;
  border: 1px solid ${Tokens.Background.mediumGrey};
  background-color: ${Tokens.Background.paleGrey};
  &:focus {
    border: 0;
  }
`;
