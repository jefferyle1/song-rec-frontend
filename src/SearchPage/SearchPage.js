import React, { Component, useEffect } from 'react';
import spotifySearchRequest from './spotifySearchRequest';
import SearchResults from './SearchResults';
import TypeSelect from './TypeSelect';
import { useState, useRef } from 'react';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { FiLoader } from "react-icons/fi"

function SearchPage () { 

  const [justify, setJustify] = useState("center");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const introStr = "Got a song that's stuck in your head? An album you're playing on repeat? A great artist you just discovered? \n Search for them below and make a recommendation!"
  const [introText, setIntroText] = useState(introStr)
  
  const [selectedOption, setSelectedOption] = useState("Song");
  
  const theme = {
    justify: justify
  };

  const typeDict = { 
    Song: "track", 
    Album: "album", 
    Artist: "artist"
  }


  const songSearch = async (val) => { 
    setLoading(true);
    const result = await spotifySearchRequest(val, typeDict[selectedOption]);
    setLoading(false);
    setResults(result);
  };

  const changeHandler = async (event) => {
    if (event.target.value != "") { 
      songSearch(event.target.value);
      setJustify("flex-start");
      setIntroText();
    } else { 
      setResults(null);
      setLoading(false);
    }

    setValue(event.target.value)
  };


  const manageAccessToken = async () => { 
    if (localStorage.getItem("accessToken") == null) {
      const res = await axios.get(process.env.REACT_APP_BACKEND + "/spotifyAuth");
      localStorage.setItem("accessToken", res.data);
    }
  };

  function LoadingIcon() { 
    if (loading == true ) { 
      return (
        <Loading animate={{ rotate: 360 }} transition={{duration: 1.5, repeat: Infinity}} >
       <FiLoader size={20}/> </Loading>
      );
    }  
  }

  
  useEffect(() => {
    manageAccessToken();

    if (value == "") { 
      setResults(null);
    }
  });
  
  let placeHolderText = "Search For An " + selectedOption + "...";
  if (selectedOption == "Song") { 
    placeHolderText = "Search For A " + selectedOption + "...";
  }
  
  return ( 
    <Page theme={theme}>
       
        <MotionDiv layout>
        <IntroText> {introText} </IntroText>
        <TypeSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} setValue={setValue} setResults={setResults}/>
        <SearchBar >
          <Search
            value={value}
            onChange={event => changeHandler(event)}
            debounceTimeout={500}
            placeholder={placeHolderText} />

            <LoadingIcon/>    
         </SearchBar>
         
        </MotionDiv>
        <SearchResults resultType={selectedOption} list={results} /> 
       

      </Page>

  );
}

export default SearchPage;

const Page = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.theme.justify};
  align-items: center;
  flex-grow: 4;
`
const MotionDiv = styled(motion.div)`
  margin-top: 20px;
`

const IntroText = styled.div`
  width: 540px;
  font-size: 19px;
  white-space:pre-wrap;
  text-align: center;
  line-height: 1.6;
  border: 1px solid black;
  background-color: white;

`

const SearchBar = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 540px;
  height: 50px;
  border: 1px solid black;
  background-color: white;

`
const Search = styled(DebounceInput)`
  width: 500px;
  height: 50px;
  font-size: 19px;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 0px;
  border: 1px solid white;
  &:focus {
    box-sizing: border-box;
    outline: none;
    border-radius: 0px;
  }
`

const Loading = styled(motion.div)`
  width: 20px;
  height: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: rgba(0,0,0,0.0);
`

