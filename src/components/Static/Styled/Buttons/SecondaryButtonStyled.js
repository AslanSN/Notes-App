import styled from "styled-components";
import { Tokens } from "../../Tokens";
/**
 * ! Button - Secondary
 * * AslanSN - 22-07-02
 * @returns Styled Component - styled library
 */
export const SecondaryButtonStyled = styled.button`
  font-size: ${Tokens.Text.Size.buttons};
  width: ${(props) => (props.width ? props.width : Tokens.Width.button)};
  height: ${Tokens.Height.button};
  color: ${Tokens.Text.Color.Button.blue};
  border: 1.5px solid ${Tokens.Text.Color.Button.blue};
  border-radius: 3vmin;
  background-color: ${Tokens.Background.white};
  transition: background-color 0.1s ease-in-out;

  :hover {
    background-color: ${Tokens.Background.blue};
    color: ${Tokens.Text.Color.Button.white};
  }

  :active {
    background-color: ${Tokens.Background.darkBlue};
  }
`;
