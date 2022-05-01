import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';

function ViewRecsPage () { 

    const [selectedPost, setSelectedPost] = useState("");
    

    const typeDict = { 
      Song: "track", 
      Album: "album", 
      Artist: "artist"
    }
  
    
    useEffect(() => {
    
    });
    

    
    return ( 
      <Page >
         
        
            Hello World
        </Page>
  
    );
  }

  

  export default ViewRecsPage;

  const Page = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 4;
`