import styled from 'styled-components';
import { flexDefault } from 'styles/shared';

import { keyframes } from 'styled-components';

export const Root = styled.header`
  ${flexDefault};
  justify-content: flex-start;
  line-height: 0.85;
  color: #fff;
  font-size: 2.4rem;
  /* border: 2px solid green; */

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const colorAnimation = keyframes`
  0%    {color: #FC6E6E}
  32%   {color: #FC6E6E}
  33%   {color: #e4cb58}
  65%   {color: #e4cb58}
  66%   {color: #8fc866}
  99%   {color: #8fc866}
  100%  {color: #FC6E6E}
`

export const Name = styled.span`
  color: #fff;
  animation: ${colorAnimation} 8s linear infinite;
  transition: 1s;
`;