import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../Styles/theme';

const StyledButton = styled.button`
  ${flexCenter};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color, theme }) => color || 'black' };
  background: ${({ background }) => background};
  border: 1px solid ${({ border }) => border || 0};
  &:hover { 
    background: ${({ backgroundHov }) => backgroundHov};
    border-color: ${({ borderHov }) => borderHov};
  }
  border-radius: ${({ radius, theme }) => radius || '10px'};
  font-size: ${({ fontSize }) => fontSize};
`;

export const Button = ({ 
  children, onClick,
  width, height, margin, padding, 
  color, background, border, backgroundHov, borderHov, 
  radius, fontSize }) => {
  return (
    <StyledButton 
      width={width} height={height} margin={margin} padding={padding}
      color={color} background={background} backgroundHov={backgroundHov}
      border={border} borderHov={borderHov} radius={radius} fontSize={fontSize}
      onClick={onClick}
      >
      {children}
    </StyledButton>
  )
}