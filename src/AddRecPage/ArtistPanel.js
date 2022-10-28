import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TrackListPanel from './TrackListPanel';

export default function Artist ({data, resultType}) {

    const { name, images, id, genres } = data;;

    let imgURL; 
    if (images.length != 0) { 
      imgURL = images[0]["url"];
    }

    let genreList = genres[0]; 

    for (let i = 1; i < genres.length; i++) {
        genreList = genreList + " • " +  genres[i];
    }

    return (
      <Border>
        <InfoPanel initial={{x: -450}} animate={{ x: 0 }} exit={{x: -350}} transition={{ duration: 1, stiffness: 100}} > 

            <Image src={imgURL} />
            <Name> {name} </Name>
            <Genres> {genreList} </Genres>
        </InfoPanel>
        <TrackListPanel resultType={resultType} id={id} />
      </Border>
        
    );

}

const Border = styled.div` 
  display: flex;
  flex-direction: row;
`

const InfoPanel = styled.div` 
  display: flex;
  flex-direction: column;
  flex-shrink:0; 
  align-items: center;
  text-align: center;
  padding-top: 30px;
  width: 350px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #203940;
  box-shadow: 6px 0px 5px black;
`

const Image = styled.img` 
  margin-bottom: 10px;
  max-height: 450px; 
  max-width: 400px;
  box-shadow: 6px 6px 5px black;
  object-fit: cover;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 45px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-top: 10px;
`
const Genres = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-shadow: 5px 5px 2px black;
    margin-top: 23px;
    margin-bottom: 20px;
`