import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const options = ["Song", "Album", "Artist"];

export default function TypeSelect({selectedOption, setSelectedOption, setValue, setResults}) {
  
  const [justify, setJustify] = useState("");

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setResults(null);
    setValue("");
  
  };
  
 

useEffect(() => {
if (selectedOption == "Song") { 
    setJustify("start");
} else if (selectedOption == "Album"){
  setJustify("center");
} else {
  setJustify("end");
} 
});

  const theme = {
    justify: justify
  };

  return (
      <Border >
        <OptionsBorder>
         {options.map((option, i) => <Options onClick={onOptionClicked(option)} key={i}> {option} </Options>)}
         </OptionsBorder>
        
        
        <CurrOption theme={theme} layout/>
        
      </Border>
  );
}

const Border = styled(motion.div)`
  display: flex;
  flex-direction: column;  
  border-bottom: 0px;
  background-color: white;
  border: 1px solid black;
  font-size: 20px;
`
const OptionsBorder = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 540px;
`
const CurrOption = styled(motion.div)`
  height: 4px;
  width: 180px;
  background-color: #831c03;
  align-self: ${props => props.theme.justify};
`

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  &:hover {
    cursor: pointer;
}
`