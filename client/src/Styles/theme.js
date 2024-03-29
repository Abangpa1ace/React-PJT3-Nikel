import { css } from 'styled-components';

const theme = {
  detailWidth: '1440px',
  footerWidth: '880px',
  gray0: '#F5F5F5',
  gray0C: '#CCCCCC',
  gray1: '#C4C4C4',
  gray2: '#999999',
  gray3: '#747474',
  orange: '#FB5301',
  orangeHov: '#FB7634',
  black: '#111111',
  footerBlack: '#121212',
  redError: '#FE0000',
  colorKakao: '#FEEC34',
  colorFacebook: '#21538A',
  transition: 'all .4s ease',
  z_Navbar: '1000',
  z_Navbar_under: '999',
  z_Modal: '1500',
  z_Modal_under: '1499',
  z_BoxMenu: '100',
  z_OneUp: '1',
  z_OneDown: '-1',
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

export const flexBetweenStart = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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