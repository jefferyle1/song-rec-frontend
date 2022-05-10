
import React, { Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function SelectedRecPanel( {itemData, allData, setData, setSelectedPost}) {

    const handleClick = () => {
        fetch(process.env.REACT_APP_BACKEND + `/deleteRec?postID=${itemData["postID"]}`, { method: 'DELETE' })
        .then(() => {
            allData = allData.filter(item => item["postID"] != itemData["postID"]);
            setData(allData);
            if (allData.length != 0) {
                setSelectedPost();
            }
        }
        
        );
    }

    if (allData.length != 0 && itemData) { 
    return ( 
        
        
        <Border> 
        <Scrollbars  autoHide hideTracksWhenNotNeeded >
            <Headline> "{itemData["postHeadline"].toUpperCase()}" </Headline>
            <Content> {itemData["postContent"]} </Content>
                
            <Footer> 
                Posted {itemData["postDate"]}
                <DeleteButton onClick={handleClick}> Delete Post  </DeleteButton>
            </Footer> 
        </Scrollbars>
        </Border>
        
        
        );
    }
}

const Border = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 38vw;
    margin-left: 25px;
    padding-right: 40px;
`

const Content = styled.div`
    border: 1px solid black;
    border-bottom: 0px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    font-size: 25px;
    white-space: pre-wrap;
    white-space: pre-line;
    background-color: #f9f9f9;
`
const Headline = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: 45px;
    border: 1px solid black;
    margin-top: 10px;
    text-align: center;
    background-color: #f9f9f9;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: 15px;
    border: 1px solid black;
    border-top: 0px;
    text-align: center;
    background-color: #f9f9f9;
    justify-content: space-between;
    align-items: flex-end;
`

const DeleteButton = styled.button`
    height: 40px; 
    width: 200px;
    background-color: red;
    color: white;
    font-size: 20px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`

