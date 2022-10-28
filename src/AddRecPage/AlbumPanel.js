import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TrackListPanel from './TrackListPanel';

export default function AlbumPanel ({data, resultType}) {

    const { id, name, images, artists, release_date, total_tracks } = data;

    let imgURL; 
    if (images.length != 0) { 
      imgURL = images[0]["url"];
    } 

    let artistNames = artists[0]["name"]; 

    for (let i = 1; i < artists.length; i++) {
        artistNames = artistNames + ", " +  artists[i]["name"];
    }

    return (
      <Border>
        <InfoPanel initial={{x: -450}} animate={{ x: 0 }} exit={{x: -350}} transition={{ duration: 1, stiffness: 100}} > 

            <Image src={imgURL} />
            <SongName> {name}  </SongName>
            <DetailsBorder> 
              <ArtistNames> {artistNames}   </ArtistNames>
              <Length> {release_date.slice(0,4)} • {total_tracks} Songs </Length>
            </DetailsBorder>
    
        </InfoPanel>
        <TrackListPanel resultType={resultType} id={id} total_tracks={total_tracks}/>
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
  height: 350px; 
  width: 350px;
  box-shadow: 6px 6px 5px black;
`

const SongName = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-bottom: 10px;
`
const DetailsBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;
  margin-bottom: 20px;
  text-shadow: 5px 5px 2px black;
`
const ArtistNames = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
`

const Length = styled.div`
  font-size: 20px;
`