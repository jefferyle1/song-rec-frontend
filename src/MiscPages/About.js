import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function AboutPage () {


      return(

        <Page> <Info> 
            
            <h1>Welcome to "SOUND RECOMMENDATIONS"!  </h1> 
            <p> As the name suggests, this is a place to make recomendations about your favourite songs, albums, and artists.  </p>
            <p> It's not about gaining the most likes or getting the most followers, it's about making recommendations about what you truly enjoy 
                and sharing your thoughts with others!  </p>
            <p> While algorithims on platforms like Spotify and Youtube Music are great ways to finding new music, albums, or artists, there's something 
                I find special about getting recommendations from real people like friends and family, which is why I created this site. </p>
            
            </Info> </Page>
      );
}




const Info = styled.div` 
  width: 800px;
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