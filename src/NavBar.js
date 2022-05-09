import React from "react";
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function SearchResults(props) { 

  let results = <h3></h3>;

    return ( 
      <Border > 
          <NavLink to={`/about`} whileHover={{ scale: 1.1 }}> <Left>  Sound Recommendations  </Left> </NavLink> 
          <Right>  
            <NavLink to={`/viewrecs`} whileHover={{ scale: 1.1 }}> View   Recommendations </NavLink>
            <NavLink to={`/search`} whileHover={{ scale: 1.1 }}>  Make Recommendation  </NavLink>
            <NavLink to={`/youraccount`} whileHover={{ scale: 1.1 }}> Your Account </NavLink>
            
          </Right>

      </Border>
    );
}


const Border = styled(motion.div)`
    display: flex; 
    flex-direction: row;
    align-items: center;
    z-index: 9999; 
    border-bottom: 2px solid black;
    box-shadow: 0px 0px 10px 1px black;
    height: 100px;
    justify-content: space-between;
    background-color: white;
    position: sticky;
    top: 0;
`
const Left = styled.div` 
    display: flex;
    align-items: center;
    padding-left: 40px;
    font-size: 35px;
    font-weight: bold;
    height: 100px;
`

const Right = styled.div` 
    display: flex;
    align-items: center;
    display: flex; 
    background-color: white;
    height: 100px;
    box-shadow: 20px 0px 10px 1px black;
`

const NavLink = styled(MotionLink)` 
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 15px 15px 15px 15px;
    border-radius: 15px;
    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 3px black;
        text-decoration: none;
    color: inherit;
    }

     &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 3px black;
        text-decoration: none;
        color: inherit;
    }
`

