import styled from 'styled-components';
import { flexDefault } from 'styles/shared';
import { delayEntrance } from 'styles/animations';

export const Root = styled.section`
  ${flexDefault};
  padding: 0.5rem;
  grid-area: projects;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;

  animation-name: ${delayEntrance};
  animation-duration: 0.5s;
  animation-delay: 1.5s;
`;