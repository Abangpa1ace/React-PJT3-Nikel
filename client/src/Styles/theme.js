import { css } from 'styled-components';

const theme = {
  footerWidth: '880px',
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

export const flexAlignCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;