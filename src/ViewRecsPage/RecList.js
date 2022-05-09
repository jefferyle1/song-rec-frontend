import { icons } from 'react-icons/lib';
import styled from 'styled-components';
import RecDetails from './RecDetails';
import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import InfiniteScroll from "react-infinite-scroll-component";

const Checkbox = ({ label, value, onChange }) => {
    return (
        <div>
        <Check type="checkbox" checked={value} onChange={onChange} />
        {label}
        </div>
      
    );
  };

export default function RecList( {data, setData, isLoading, setSelectedPost}) {
    
    const [numRec, setNumRec] = useState(0);
    const [pageNum, setPageNum] = useState(2);
    const [songActive, setSongActive] = useState(true);
    const [albumActive, setAlbumActive] = useState(true);
    const [artistActive, setArtistActive] = useState(true);

    const handleClick = (e, data) => {
        setSelectedPost(data); 
    }

    const handleCheck = (e, type) => {
        if (type == "song") { 
            setSongActive(!songActive);
        } else if (type == "album") { 
            setAlbumActive(!albumActive);    
        } else { 
            setArtistActive(!artistActive)
        }
    }

    function EndMessage() { 
        if (albumActive == false & artistActive == false && songActive == false) { 
            return (<End> No Results </End> ); 
        } else { 
            return(
            <End> 
                <div> End of Results </div>
                <div > Not enough results to activate infinite scrolling? <Underline onClick={fetchMoreData}>Click here</Underline> to manually load more. </div>
            </End>);
        }
    }
        

    const fetchMoreData = () => { 
        setPageNum(pageNum + 1);
        fetch(`http://127.0.0.1:5000/getRecs?page=${pageNum}`)
        .then(response => response.json())
        .then(jsonData => {
            setData(data.concat(jsonData)); 
            setNumRec(numRec + jsonData.length);
        }
          )
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        
      fetch("http://127.0.0.1:5000/getRecs")
        .then(response => response.json())
        .then(jsonData => {
            
          setData(jsonData); 
          setSelectedPost(jsonData[0])
          setNumRec(jsonData.length);
        }
          )
        .catch((error) => console.log(error));


    }, []);

    let activeArr = []; 
    if (songActive == true) { activeArr.push("song"); }
    if (albumActive == true) { activeArr.push("album"); }
    if (artistActive == true) { activeArr.push("artist"); }
    

    return ( <div>

        <Filter> 
            <Checkbox label="Artists" value={artistActive} onChange={(e) => handleCheck(e, "artist")} />
            <Checkbox label="Songs" value={songActive} onChange={(e) => handleCheck(e, "song")} />
            <Checkbox label="Albums" value={albumActive} onChange={(e) => handleCheck(e, "album")} />

        </Filter>
        <Border id="scrollableDiv">
        <InfiniteScroll
          dataLength={numRec}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4></h4>}
          scrollableTarget="scrollableDiv">

                {isLoading ? ( <h1>Loading...</h1>) : (

                    data.map(recData => {

                    if (activeArr.includes(recData["postType"]))  {
                        
                        return( 

                            <RecBorder onClick={((e) => handleClick(e, recData))}>
                                <RecTop>
                                    <TypeBorder> {recData["postType"].toUpperCase()} </TypeBorder> 
                                    <HeadlineBorder> "{recData["postHeadline"].toUpperCase()}" </HeadlineBorder>
                                </RecTop>
                                <RecDetails data={recData} />
                            </RecBorder> 
                        );
                    }
                })
  
        )}

        <EndMessage/>

        </InfiniteScroll>
        </Border>

        
        </div>

    
      );
    }

    const End = styled.div` 
        display: flex;
        align-items; center;
        text-align: center;
        margin-bottom: 5px;
        font-size: 20px;
        margin-top: 10px;
        font-weight: bold;
        flex-direction: column;

    `

    const Check = styled.input` 
    margin-right: 5px;
    transform: scale(1.2);
    &:hover {
        cursor: pointer;
    }
    `

    const Underline = styled.u`
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
         
    `

    const Border = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 5px;
    margin-left: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 205px);
    width: 30vw;

    &::-webkit-scrollbar{
        width: 9px;
        border-left:  1px solid rgba(0, 0, 0, 0.4);
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

const Filter = styled.div` 
    height: 100px;
    background: white;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    font-size: 20px;
`
const RecBorder = styled.div` 
    margin-bottom: 10px;
    border: 1px solid black;
    background-color: #f9f9f9;
    &:hover {
        background-color: #F0F8FF;
        cursor: pointer;
    }
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




