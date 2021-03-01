import { css } from 'styled-components';

const theme = {
  footerWidth: '880px',
  gray0: '#F5F5F5',
  gray1: '#C9C9C9',
  gray2: '#9C9C9C',
  black: '#111111',
  transition: 'all .3s ease',
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;

export const flexAlignStart = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const flexAlignCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;