import styled, { css } from 'styled-components';

type fontSizes = 'sm' | 'md' | 'lg' | 'xl';

const fontSizeOptions: Record<fontSizes, string> = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem'
}

interface ParagraphProps {
  fontSize?: fontSizes
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0.5rem 0;
  line-height: 1;
  text-align: left;
  font-size: 18px;
`

export const flexDefault = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;