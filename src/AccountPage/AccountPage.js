import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from '../ReusableComponents/Login';
import LogoutButton from '../ReusableComponents/Logout';

import RecList from './UserRecList';
import SelectedRecPanel from './SelectedRecPanel';



export default function AccountPage () {
    const {isAuthenticated, user} = useAuth0();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState();
    const [data, setData] = React.useState([]);
    const [numTotalPost, setNumTotalPost] = useState(0);

    useEffect(() => {
      if (isAuthenticated) { 

      
      fetch(`http://127.0.0.1:5000/getUserNumRecs?userID=${user.sub}`)
        .then(response => response.json())
        .then(jsonData => {
            setNumTotalPost(jsonData);
        }
          )
        .catch((error) => console.log(error));

      if (data.length !== 0) {
        setIsLoading(false);
      }
      }
    }, [data]);
 
    if (isAuthenticated ) { 

      return(
           <Page>
            
            <Sidebar>
           <LogoutButton message={`You're currently signed in as ${user.email} using ${user.sub.substring(0, user.sub.indexOf("|"))} login`} /> 
            { numTotalPost != "admin" ? <NumPosts> You've made <b>{numTotalPost} </b> Recommendations</NumPosts>
              : <NumPosts> <b> ADMIN ACCOUNT </b> <div> You can delete any posts. </div> </NumPosts>
            }
            </Sidebar> 
           
            <RecList data={data} isLoading={isLoading} setSelectedPost={setSelectedPost} setData = {setData} userID = {user.sub}/>
            {isLoading ? (<div> </div>) : (  
      
                <SelectedRecPanel itemData={selectedPost} allData = {data} setData = {setData} setSelectedPost = {setSelectedPost} />
                
               
              )}
            
            </Page>
      ); 

    } else { 

      return(
        <LoggedOutPage> <LoginButton message={"Login to make recommendations and to view or delete your old ones."} /> </LoggedOutPage>
   ); 
      
    }
}

const Page = styled.div`
  display: flex;
  flex-direction: row;
  width: 97vw;
`
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NumPosts = styled.div` 
  height: 70px; 
  width: 300px;
  border: 2px solid black;
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;

`

const LoggedOutPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: calc(100vh - 200px);
`

