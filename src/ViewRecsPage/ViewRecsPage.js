import React, { Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import RecList from './RecList';
import SelectedRecPanel from './SelectedRecPanel';
import SelectedDetailsPanel from './SelectedDetailsPanel';


function ViewRecsPage () { 
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState();
    const [data, setData] = React.useState([]);

    useEffect(() => {
      if (data.length !== 0) {
        setIsLoading(false);
      }
    }, [data]);


    
    return ( 
      <Page >

      <RecList data={data} isLoading={isLoading} setSelectedPost={setSelectedPost} setData = {setData}/>
      {isLoading ? (<div/>) : (  
        <SelectedDetailsPanel data={selectedPost} />
      )}

      {isLoading ? (<div/>) : (  
        <SelectedRecPanel data={selectedPost} />
      )}
       
      </Page>
  
    );
  }

  

export default ViewRecsPage;


const Page = styled.div` 
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
`
