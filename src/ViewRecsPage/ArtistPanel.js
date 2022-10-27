import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import styled from 'styled-components';
import TrackListPanel from './TrackListPanel';
import { Scrollbars } from 'react-custom-scrollbars';



export default function Artist ({data}) {

    const { artistName, imageURL, genres, artistID } = data;;

    const embedLink = `https://open.spotify.com/embed/artist/` + artistID; 
    let height = 80 + 10 * 32; 

    return (
        <InfoPanel  > 
        <Scrollbars autoHide hideTracksWhenNotNeeded autoHideTimeout={3000} style={{ height: "100%" }} >    
            
        <Image src={imageURL} />
            <Name> {artistName} </Name>
            <Genres> {genres} </Genres>
            <embed loading="lazy" src={embedLink} width="350" height={height} data-mce-fragment="1"></embed>
        </Scrollbars>
        </InfoPanel>    
    );

}


const InfoPanel = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30vw;
  background-color: #203940;
  box-shadow: 6px 0px 5px black;
`


const Image = styled.img` 
  margin-bottom: 10px;
  margin-top: 10px;
  max-height: 450px; 
  max-width: 400px;
  width: 23vw;
  box-shadow: 6px 6px 5px black;
  object-fit: cover;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 45px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-top: 10px;
  padding-right: 20px;
    padding-left: 20px;
`
const Genres = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-shadow: 5px 5px 2px black;
    margin-top: 23px;
    margin-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
`