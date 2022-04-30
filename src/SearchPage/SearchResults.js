import React from "react";
import ResultCard from "./ResultCard";
import styled from 'styled-components'
import { motion } from 'framer-motion';

export default function SearchResults({resultType, list}) { 

  if (list == null) { 
    return;
  }

  if (resultType == "Album") { 
    list = list.filter(album => album["album_type"] != "single");
  }

  if (list.length > 5) { 
    list = list.slice(0,5);
  }

  let results;
  

  if (list["length"] != 0) {
    results = list.map((resultData, i) => <ResultCard resultType={resultType} key={i} data={resultData} />);
    return ( 
      <MotionDiv transition={{duration: .5}} initial={{opacity: 0}} 
      animate={{ opacity: 1 }} exit={{opacity: 0}}> {results} </MotionDiv>
    );
  } else { 
    return (<NoResults transition={{duration: .5}} initial={{opacity: 0}} 
    animate={{ opacity: 1 }} exit={{opacity: 0}}> No Results </NoResults>);
  }

}


const NoResults = styled(motion.div)` 
  font-size: 19px;
  height: 40px;
  border-bottom: 1px solid black;
  width: 540px;
  text-align: center;
  vertical-align: middle;
  padding-top: 20px;
  background-color: white;
  box-shadow: 5px 5px 5px black;
`

  const MotionDiv = styled(motion.div)`
    box-shadow: 5px 5px 5px black;
  `
