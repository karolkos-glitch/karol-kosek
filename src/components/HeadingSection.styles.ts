import styled from 'styled-components';
import { flexDefault } from 'styles/shared';

export const Root = styled.header`
  ${flexDefault};
  justify-content: flex-start;
  line-height: 0.85;
  color: #FC6E6E;
  font-size: 2.4rem;
  /* border: 2px solid green; */

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Surname = styled.span`
  color: #fff
`;