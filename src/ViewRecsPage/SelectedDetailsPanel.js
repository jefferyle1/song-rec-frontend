import React, { Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import SongPanel from './SongPanel';
import ArtistPanel from './ArtistPanel';
import AlbumPanel from './AlbumPanel';

export default function SelectedDetailsPanel( {data}) {
    if (data["postType"] == "song") { 
        return ( 
            <SongPanel data={data} />
        
          );
    } else if (data["postType"] == "artist") { 
        return ( 
            <ArtistPanel data={data} />
        );

    } else if (data["postType"] == "album") { 
        return ( 
            <AlbumPanel data={data} />
        );

    } 
    
}

const Border = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    width: 500px;
`


const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    padding: 10px;
    font-size: 30px;
`
const Headline = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: 45px;
    border: 1px solid black;
    margin-top: 10px;
    text-align: center;
`

