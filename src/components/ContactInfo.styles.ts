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
  border: 2px solid #FC6E6E;
  width: fit-content;
  background-color: #000;
  color: #FC6E6E;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 15px;
`