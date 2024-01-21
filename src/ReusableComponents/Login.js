import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';

export default function LoginButton ({message}) {
    
    const {loginWithPopup} = useAuth0();

    return (
        <LoginBorder>
            <LoginMessage> {message} </LoginMessage>
            <ButtonStyled  onClick={() => loginWithPopup()}> Log In </ButtonStyled >
        </LoginBorder>
    );

}

const ButtonStyled = styled.button` 
  height: 40px; 
  width: 200px;
  font-size: 25px;
  &:hover:enabled {
    cursor: pointer;
  }
  border-radius: 10px;
`

const LoginBorder = styled.div` 
  border: 2px solid black;
  width: 400px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`

const LoginMessage = styled.div` 
  margin-bottom: 10px;
  font-size: 30px;  
`