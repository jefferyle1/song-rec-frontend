
import React, { Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';




export default function SelectedRecPanel( {data}) {

    if (data["postContent"] != "") { 
    return ( 
        <Border> 
        <Scrollbars  autoHide hideTracksWhenNotNeeded >
        
            
            <Headline> "{data["postHeadline"].toUpperCase()}" </Headline>
            <Content> {data["postContent"]} </Content>
            <Footer>  Posted {data["postDate"]} </Footer> 
            </Scrollbars>
        </Border>
        
    
    );
    } else { 
        return ( 
            <Border> 
                <Headline> "{data["postHeadline"].toUpperCase()}" </Headline>
                <Footer> Posted {data["postDate"]} </Footer> 
            </Border>
        
        );
    }
}

const Border = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    flex-grow: 1;
    flex-shrink: 0;
    margin-left: 25px;
    padding-right: 20px;
    
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
`

