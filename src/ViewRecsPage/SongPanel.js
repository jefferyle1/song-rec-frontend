import { useLocation } from 'react-router-dom'
import React, { useRef, onClick } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';



export default function SongPanel ({data}) {

    const { songName, albumName, artistName, songID, length, year, imageURL } = data; 

    const embedLink = "https://open.spotify.com/embed/track/" + songID; 

    if (albumName == artistName) { 
        albumName = "Self-Titled Album";
    }

    const time = new Date(parseInt(length));
    let songTime; 
    if (time.getSeconds() < 10) { 
      songTime = `${time.getMinutes()}:0${time.getSeconds()}`   
    } else { 
      songTime = `${time.getMinutes()}:${time.getSeconds()}`
    }
    


    return (
        <InfoPanel> 
            <Scrollbars hideTracksWhenNotNeeded autoHide autoHideTimeout={3000} style={{ height: "100%" }} >
          
            <AlbumImage src={imageURL} />
            <SongName> {songName}  </SongName>
            <SongDetailsBorder> 
              <ArtistNames> {artistName} </ArtistNames>
              <div> {albumName} • {year} • {songTime}</div>
            </SongDetailsBorder>
            <embed loading="lazy" src={embedLink} width="350" height="80" data-mce-fragment="1"></embed>
            </Scrollbars>
        </InfoPanel>    
    );

}

const InfoPanel = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #203940;
  width: 30vw;
  box-shadow: 6px 0px 5px black;
`

const AlbumImage = styled.img` 
  margin-bottom: 10px;
  height: auto; 
  width: 23vw;
  max-width: 450px;
  box-shadow: 6px 6px 5px black;
`

const SongName = styled.div`
  font-weight: bold;
  font-size: 34px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
`

const SongDetailsBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
  color: white;
  text-shadow: 5px 5px 2px black;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
`
const ArtistNames = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  padding-right: 20px;
  padding-left: 20px;
`
