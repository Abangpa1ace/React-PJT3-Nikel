import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../Styles/theme';

const StyledButton = styled.button`
  ${flexCenter};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color, theme }) => color || theme.black };
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
  children, type, onClick,
  width, height, margin, padding, 
  color, background, border, backgroundHov, borderHov, 
  radius, fontSize }) => {
  return (
    <StyledButton 
      width={width} height={height} margin={margin} padding={padding}
      color={color} background={background} backgroundHov={backgroundHov}
      border={border} borderHov={borderHov} radius={radius} fontSize={fontSize}
      type={type} onClick={onClick}
      >
      {children}
    </StyledButton>
  )
}

const StyledInput = styled.input`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '10px'};
  color: ${({ color, theme }) => color || theme.black };
  border: 1px solid ${({ border, theme }) => border || theme.gray1};
  font-size: ${({ fontSize }) => fontSize || '14px'};

  &::placeholder {
    color: ${({ colorPh, theme }) => colorPh || theme.gray1 };
  }

  &:focus, &:active {
    border: 1px solid ${({ borderActive, theme }) => borderActive || theme.gray2};
  }
`;

export const Input = ({
  children, name, type, placeholder, value, onChange, onClick,
  width, height, margin, padding,
  color, colorPh, border, borderActive,
  fontSize }) => {
    return (
      <StyledInput
      name={name} type={type} placeholder={placeholder} 
      value={value} onChange={onChange} onClick={onClick}
      width={width} height={height} margin={margin} padding={padding}
      color={color} colorPh={colorPh} border={border} borderActive={borderActive} 
      fontSize={fontSize}
      >{children}</StyledInput>
    )
  }