import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from '../ReusableComponents/Login';
import { useNavigate } from "react-router-dom";

export default function TextEditor({data, resultType}) {


  const [headlineValue, setHeadlineValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const {isAuthenticated, user} = useAuth0();
  const navigate = useNavigate();

  let maxContentChars;
  let maxHeadlineChars = 40;
  
  if (resultType == "Song") { 
    maxContentChars = 280;
  } else if (resultType == "Album") { 
    maxContentChars = 300;
  } else if (resultType == "Artist") {
    maxContentChars = 320; 
  }
  const changeHandlerHeadline = async (event) => {
    setHeadlineValue(event.target.value)
  };

  const changeHandlerContent = async (event) => {
    setContentValue(event.target.value)
  };

  let titleCharsLeft = maxHeadlineChars - headlineValue.length;
  let contentCharsLeft = maxContentChars - contentValue.length; 

  const onSubmit = async () => {

    data.postHeadline = headlineValue; 
    data.postContent = contentValue;
    data.userID = user.sub;
    const response = await fetch(process.env.REACT_APP_BACKEND + "/addRec", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
    }).then(
      navigate("/thankrec/")
    )
  
  
  }
  
  useEffect(() => {
    
    if (headlineValue.length != 0 && contentCharsLeft >= 0) { 
      setDisabled(false); 
    } else { 
      setDisabled(true);
    }

  });

    
    return (
          <Border initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{ duration: 1}} >

              {isAuthenticated ? 
                <TextBoxBorder initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1, delay: 1.5}}>
                <HeadLine
                  value={headlineValue}
                  maxLength={maxHeadlineChars}
                  onKeyPress={e => {if (e.key === 'Enter') e.preventDefault() }}
                  onChange={event => changeHandlerHeadline(event)}
                  placeholder={"Describe this " + resultType.toLowerCase() + " with one phrase..."} />

                <TextBox 
                  value={contentValue}
                  onChange={event => changeHandlerContent(event)}
                  placeholder={"Share your thoughts... (optional)"} />
              
                <Bottom> 
                <CharsLeft> 
                <div> Title: {titleCharsLeft} characters left </div>
                <div> Content: {contentCharsLeft} characters left </div>
                </CharsLeft>

            
                <SubmitButton type="button" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .9}}
                  disabled={disabled} onClick={onSubmit}> Recommend </SubmitButton>
    
              
                </Bottom>
              
              </TextBoxBorder> 
              
              
            :   <LoginButton message = {"You must be logged in to make a recommendation"}/>
              
              
              } 
              
          </Border>
    );
  }




const Border = styled(motion.div)` 
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  background-color: #7d978c;
  box-shadow: -6px 0px 5px black;
  font-family: "Trebuchet MS";
`
const TextBoxBorder = styled(motion.div)` 
  display: flex;
  align-items: end;
  flex-direction: column;
  box-shadow: 5px 5px 10px black;
`
const HeadLine = styled.input` 
  width: 550px;
  text-align: left;
  padding: 10px;
  font-size: 25px;
  background-color: white;
  height: 45px;
  resize: none;
  &:focus {
    outline: none;

  }
`

const Bottom = styled.div` 
  display: flex;
  background-color: #F9F6EE;
  padding: 10px;
  width: 550px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  border: 1px solid black;
`
const TextBox = styled(TextareaAutosize)` 
  font-size: 22px;
  width: 550px;
  font-family: "Trebuchet MS";
  text-align: left;
  padding: 10px;
  background-color: white;
  min-height: 100px;
  resize: none;
  &:focus {
    outline: none;

  }
`
const SubmitButton = styled(motion.button)`

  height: 45px;
  width: 140px;
  border-radius: 20px;
  margin: 5px;
  font-size: 20px;
  margin-top: 10px;
  

  :hover:enabled {
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    text-decoration: none;
    color: inherit;
}

: disabled { 
  opacity: .5;

}

`

const CharsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`