import styled from "styled-components";
import { Tokens } from "../../Static/Tokens";
/**
 * ! Styled Component
 * * AslanSN - 22-07-03
 * @returns Styled Component - styled library
 */
export const ItemStyled = styled.li`
  font-size: ${Tokens.Text.Size.p};
  width: 98%;
  margin: 0.2rem 0rem;
  text-align: initial;
  border-radius: 0.2rem;
  padding: 0.2rem 0.4rem;
  text-overflow: ellipsis;
  cursor: pointer;

  :hover {
    background-color: ${Tokens.Background.lightBlue};
  }
  :active {
    background-color: ${Tokens.Background.darkBlue};
    color: #fff;
  }
  &.selected {
    background-color: ${Tokens.Background.blue};
    color: #fff;
  }
`;