import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function SongPanel ({data}) {

    const { name, album, artists, id, duration_ms } = data;  
    const embedLink = "https://open.spotify.com/embed/track/" + id; 

    
    let albumName = album["name"];

    if (albumName == artists[0]["name"]) { 
        albumName = "Self-Titled Album";
    }

    let artistNames = artists[0]["name"]; 

    for (let i = 1; i < artists.length; i++) {
        artistNames = artistNames + ", " +  artists[i]["name"];
    }

    const time = new Date(duration_ms);
    let songTime; 
    if (time.getSeconds() < 10) { 
      songTime = `${time.getMinutes()}:0${time.getSeconds()}`   
    } else { 
      songTime = `${time.getMinutes()}:${time.getSeconds()}`
    }
    

    let imgURL; 
    if (album["images"].length != 0) { 
      imgURL = album["images"][0]["url"];
    }

    return (
        <Border initial={{x: -450}} animate={{ x: 0 }} exit={{x: -350}} transition={{ duration: 1, stiffness: 100}} > 
           
            <embed loading="lazy" src={embedLink} width="350" height="80" data-mce-fragment="1"></embed>
            
            <AlbumImage src={imgURL} />
            <SongName> {name}  </SongName>
            <SongDetailsBorder> 
              <ArtistNames> {artistNames} </ArtistNames>
              <div> {albumName} • {album["release_date"].slice(0,4)} • {songTime}</div>
            </SongDetailsBorder>
    
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
  width: 500px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #203940;
  box-shadow: 6px 0px 5px black;
`

const AlbumImage = styled.img` 
  margin-top: 10px;
  margin-bottom: 10px;
  height: 350px; 
  width: 350px;
  box-shadow: 6px 6px 5px black;
`

const SongName = styled.div`
  font-weight: bold;
  font-size: 34px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-bottom: 10px;
`

const SongDetailsBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-bottom: 20px;
`
const ArtistNames = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
`
