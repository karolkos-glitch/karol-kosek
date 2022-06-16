import styled from 'styled-components';
import { flexDefault } from 'styles/shared';
import { delayEntrance } from 'styles/animations';

export const Root = styled.section`
  ${flexDefault}
  justify-content: flex-start;
  grid-area: description;
  padding: 0.5rem;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  animation-name: ${delayEntrance};
  animation-duration: 0.5s;
  animation-delay: 1s;
`;