import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';

export default function LogoutButton ({message}) {
    

    const {logout} = useAuth0();

    return (
        <LogoutBorder>
            <LogoutMessage> {message} </LogoutMessage>
            <ButtonStyled  onClick={() => logout()}> Log Out </ButtonStyled >
        </LogoutBorder>
    );

}

const ButtonStyled = styled.button` 
  height: 40px; 
  width: 200px;
  font-size: 25px;
  &:hover:enabled {
    cursor: pointer;
  }
`

const LogoutBorder = styled.div` 
  border: 2px solid black;
  overflow-wrap: break-word;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px 10px 10px 10px;
`

const LogoutMessage = styled.div` 
  margin-bottom: 10px;
  font-size: 20px;  
  width: 100%;
  height: 100%;
`
