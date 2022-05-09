import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ThankRecPage () {


      return(

        <Page> <Info> Thanks for your <b> SOUND RECOMMENDATION </b>! <div> Navigate above to check out recommendations made by others, make another one, or review the ones you made yourself. </div>
            
            </Info> </Page>
      );
}




const Info = styled.div` 
  width: 300px;
  border: 2px solid black;
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
`

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: calc(100vh - 200px);
`

