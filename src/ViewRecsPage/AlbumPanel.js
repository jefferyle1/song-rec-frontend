import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TrackListPanel from './TrackListPanel';
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function AlbumPanel ({data, resultType}) {

    const { albumName, imageURL, artistName, year, numSongs, albumID } = data;
   
    const embedLink = `https://open.spotify.com/embed/album/` + albumID; 

        let height = 80 + 10 * 32; 
        height = 80 + numSongs * 31.4;

    return (

        
        <InfoPanel > 
        <Scrollbars autoHide hideTracksWhenNotNeeded autoHideTimeout={3000} style={{ height: "100%" }}>
          <Image src={imageURL} />
            <SongName> {albumName}  </SongName>
            <DetailsBorder> 
              <ArtistNames> {artistName}   </ArtistNames>
              <Length> {year} • {numSongs} Songs </Length>
            </DetailsBorder>
            
            <embed loading="lazy" src={embedLink} width="350" height={height} data-mce-fragment="1"></embed>
            </Scrollbars>
        </InfoPanel>
        
  
        
    );

}

const InfoPanel = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;;
  background-color: #203940;
  width: 30vw;
  box-shadow: 6px 0px 5px black;
`

const Image = styled.img` 
  margin-bottom: 10px;
  margin-top: 10px;
  height: auto; 
  width: 23vw;
  max-width: 450px;
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
  margin-bottom: 30px;
  text-shadow: 5px 5px 2px black;
`
const ArtistNames = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
`

const Length = styled.div`
  font-size: 20px;
`