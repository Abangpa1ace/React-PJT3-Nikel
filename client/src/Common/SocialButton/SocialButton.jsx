import React from 'react';
import styled from  'styled-components';
import { Button } from '../StyledCommon';

const SocialButton = ({ children, link, color, background }) => {
  return (
    <Socialbutton href={link} target="_blank">
      <Button
        width="100%"
        height="40px"
        color={color}
        background={background}
        fontSize="14px"
        radius="3px"
        margin="0 0 10px"
      >{children}</Button>
    </Socialbutton>

  )
}

const Socialbutton = styled.a`
`;

export default SocialButton
