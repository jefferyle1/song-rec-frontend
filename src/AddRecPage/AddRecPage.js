import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SongPanel from './SongPanel';
import AlbumPanel from './AlbumPanel';
import ArtistPanel from './ArtistPanel';
import TextEditor from './TextEditor';


export default function AddRecPage () {


  const location = useLocation();
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
const Right = styled(motion.div)` 
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #7d978c;
  box-shadow: -6px 0px 5px black;
`

const SubmitButton = styled(motion.button)`

  height: 50px;
  width: 200px;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px black;
    text-decoration: none;
  color: inherit;
}

`