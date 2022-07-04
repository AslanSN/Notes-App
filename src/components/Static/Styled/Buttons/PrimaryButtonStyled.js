import styled from "styled-components";
import { Tokens } from "../../Tokens";
/**
 * ! Button - Primary
 * * AslanSN - 22-07-02
 * @returns Styled Component - styled library
 */
export const PrimaryButtonStyled = styled.button`
  font-size: ${Tokens.Text.Size.buttons};
  width: ${Tokens.Width.button};
  height: ${Tokens.Height.button};
  color: ${Tokens.Text.Color.Button.white};
  border: 1.5px solid ${Tokens.Background.blue};
  border-radius: 3vmin;
  background-color: ${Tokens.Background.blue};
  transition: 0.15s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  :active {
    background-color: ${Tokens.Background.darkBlue};
  }
`;
