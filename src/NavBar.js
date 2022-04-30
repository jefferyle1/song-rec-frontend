import React from "react";
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function SearchResults(props) { 

  let results = <h3></h3>;

    return ( 
      <Border > 
          <Left> Sound Recommendations </Left>
          <Right>  
            <NavLink to={`/`} whileHover={{ scale: 1.1 }}> <b>Recommend </b> </NavLink>
            <NavLink to={`/`} whileHover={{ scale: 1.1 }}> <b>Recent </b> Recommendations </NavLink>
            <NavLink to={`/`} whileHover={{ scale: 1.1 }}> <b>View all </b>  Recommendations </NavLink>
          </Right>

      </Border>
    );
}


const Border = styled(motion.div)`
    display: flex; 
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;

    border-bottom: 2px solid black;
    box-shadow: 0px 0px 10px 1px black;
    height: 100px;
    justify-content: space-between;
    background-color: white;
    position: sticky; top: 0;
`
const Left = styled.div` 
    padding-left: 40px;
    font-size: 35px;
    font-weight: bold;
`

const Right = styled.div` 
    display: flex; 
`

const NavLink = styled(MotionLink)` 
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    
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

