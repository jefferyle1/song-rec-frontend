import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SongPanel from './SongPanel';
import AlbumPanel from './AlbumPanel';
import ArtistPanel from './ArtistPanel';
import TextEditor from './TextEditor';
import { useNavigate } from "react-router-dom";

export default function AddRecPage () {


  const location = useLocation();
  
  if (!location.state) { 
    return(<Error> Sorry, this is an invalid way to search for a recommendation, you must search for one! </Error>);
  }
  
  const { data, resultType } = location.state;



  function Left () { 
    if (resultType == "Song") { 
      return (<SongPanel data={data}/>);
    } else if (resultType == "Album") { 
      return (<AlbumPanel data={data} resultType={"Album"}/>);
    } else if (resultType == "Artist") {
      return (<ArtistPanel data={data} resultType={"Artist"}/>); 
    } 
  }


  return (
    <Page>
      <Left/>
      <TextEditor data={data} resultType={resultType}/>
    </Page>
  );

}

const Page = styled.div`
  display: flex;
  flex-grow: 4;
`
const Error = styled.div` 
  width: 300px;
  height: 120px;
  border: 2px solid black;
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
`
