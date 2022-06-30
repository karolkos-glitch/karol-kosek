import styled from 'styled-components';
import { Paragraph } from 'styles/shared';

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
  margin-bottom: 4rem;
`
export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  /* border: 2px solid yellow; */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const ContactButton = styled.button`
  border: 2px solid #e4cb58;
  width: fit-content;
  background-color: #000;
  color: #e4cb58;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.25s;

  :hover, :focus {
    box-shadow: inset 0 -3.25em 0 0 #8fc866;
    border-color: #8fc866;
    color: #fff;
  }
`