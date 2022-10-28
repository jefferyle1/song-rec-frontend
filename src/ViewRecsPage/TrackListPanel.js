import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function TrackListPanel ({resultType, id, total_tracks}) {

    const embedLink = `https://open.spotify.com/embed/${resultType.toLowerCase()}/` + id; 


    let height = 80 + 10 * 32;
    if (resultType == "Album") {   
        height = 80 + total_tracks * 31.4;
        if (height > (80 + 15 * 31.4)) { 
            height = 80 + 15 * 31.4;
        }
    }  

    return (
      
        <Border initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{ duration: 1}}> 
            <embed loading="lazy" src={embedLink} width="350" height={height} data-mce-fragment="1"></embed>
        </Border>
        
    );
}

const Border = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink:0; 
  align-items: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 350px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #4c656a;
  
  box-shadow: -6px 0px 5px black;
`