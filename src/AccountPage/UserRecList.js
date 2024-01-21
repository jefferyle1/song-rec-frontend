import { icons } from 'react-icons/lib';
import styled from 'styled-components';
import RecDetails from './RecDetails';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

export default function RecList( {data, setData, isLoading, setSelectedPost, userID}) {
    
    const [numRec, setNumRec] = useState(0);
    const [pageNum, setPageNum] = useState(2);


    const handleClick = (e, data) => {
        setSelectedPost(data); 
    }


    const fetchMoreData = () => { 
        setPageNum(pageNum + 1);
        fetch(process.env.REACT_APP_BACKEND + `/getUserRecs?userID=${userID}&page=${pageNum}`)
        .then(response => response.json())
        .then(jsonData => {
            setData(data.concat(jsonData)); 
            setNumRec(numRec + jsonData.length);
        }
          )
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        
      fetch(process.env.REACT_APP_BACKEND + `/getUserRecs?userID=${userID}`)
        .then(response => response.json())
        .then(jsonData => {
            
          setData(jsonData); 
          setSelectedPost(jsonData[0]);
          setNumRec(jsonData.length)
        }
          )
        .catch((error) => console.log(error));


    }, []);


    

    return ( <div>


        <Border id="scrollableDiv">
        <InfiniteScroll
          dataLength={numRec}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4></h4>}
          scrollableTarget="scrollableDiv">

                {isLoading ? ( <h1></h1>) : (

                    data.map(recData => {

                        return( 

                            <RecBorder onClick={((e) => handleClick(e, recData))}>
                                <RecTop>
                                    <TypeBorder> {recData["postType"].toUpperCase()} </TypeBorder> 
                                    <HeadlineBorder> "{recData["postHeadline"].toUpperCase()}" </HeadlineBorder>
                                </RecTop>
                                <RecDetails data={recData} />
                            </RecBorder> 
                        );
                    
                })
  
        )}

        </InfiniteScroll>
        </Border>

        
        </div>

    
      );
    }



    const Border = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 5px;
    margin-left: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 102px);
    width: 30vw;

    &::-webkit-scrollbar{
        width: 9px;
        border-left:  1px solid rgba(0, 0, 0, 0.4);
        border-right:  1px solid rgba(0, 0, 0, 0.4);
    }
    &::-webkit-scrollbar-track{
        boxShadow: "5px 5px 6px grey";
        borderRadius: "5px";
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
    }
  
`

const RecBorder = styled.div` 
    margin-bottom: 10px;
    border: 1px solid black;
    background-color: #f9f9f9;
    &:hover {
        background-color: #F0F8FF;
        cursor: pointer;
    }
    border-radius: 10px 10px 10px 10px;
`
const RecTop = styled.div` 
    display: flex;
    min-height: 55px;
    border-bottom: 1px solid black;
`

const TypeBorder = styled.div` 
    border-right: 1px solid black;
    color: rgba(0, 0, 0, 0.6);
    width: 80px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeadlineBorder = styled.div` 
    display: flex; 
    align-items: center;
    padding: 5px;
    font-size: 19px;
    font-style: italic;
`
