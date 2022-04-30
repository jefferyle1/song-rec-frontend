import styled from 'styled-components'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';

export default function ResultCard( {resultType, data}) { 
  
  if (resultType == "Song") {
    
    const { name, album, artists, id } = data;
    let albumName = album["name"];
    
    if (albumName == artists[0]["name"]) { 
      albumName = "Self-Titled Album";
    }

    let imgURL; 
    if (album["images"].length != 0) { 
      imgURL = album["images"][1]["url"];
    }

    return (
        <RecLink to={`/addrec/${resultType.toLowerCase()}/${id}`}  state= {{ data: data, resultType: resultType }} >      
            <Border whileHover={{scale: 1.1}}>
            <AlbumImage src={imgURL} />
            <TextBorder>
                <ResultName> {name} </ResultName>
                <DetailsBorder> 
                    {artists[0]["name"]} • {albumName} • {album["release_date"].slice(0,4) } 
                </DetailsBorder>
            </TextBorder>
            </Border>
        </RecLink>
    );

  } else if (resultType == "Album") { 

    const { name, images, artists, release_date, id} = data;

    let imgURL; 
    if (images.length != 0) { 
      imgURL = images[1]["url"];
    }

    return (
      <RecLink to={`/addRec/${resultType.toLowerCase()}/${id}`}  state= {{ data: data, resultType: resultType }} >
        <Border whileHover={{scale: 1.1}}>
            <AlbumImage src={imgURL} />
  
          <TextBorder>
            <ResultName> {name} </ResultName>
            <DetailsBorder> 
              {artists[0]["name"]} • {release_date.slice(0,4) } 
            </DetailsBorder>
          </TextBorder>
       
        </Border>
       </RecLink>
      ); 
        
  }  else if (resultType == "Artist") { 
    
    const { name, images, id } = data;

    let imgURL; 
    if (images.length != 0) { 
      imgURL = images[1]["url"];
    }

    return (
      <RecLink to={`/addRec/${resultType.toLowerCase()}/${id}`}  state= {{ data: data, resultType: resultType }} >
      <Border whileHover={{scale: 1.1}}>

        <ArtistImage src={imgURL} />
    
        <TextBorder>
          <ResultName> {name} </ResultName>

        </TextBorder>
       
      </Border>
      </RecLink>
     ); 

  }
};
  
const RecLink = styled(Link)` 
text-decoration: none;
    color: inherit;
&:hover {
    text-decoration: none;
    color: inherit;
}
`
const Border = styled(motion.div)`
    display: flex;
    flex-direction: row;
    width: 530px;
    padding: 5px; 
    background-color: white;
    border-bottom: 1px solid black;

    &:hover {
        background-color: #F0F8FF;
        cursor: pointer;
    }

`

const AlbumImage = styled.img` 
  height: 65px;
  width: 65px;
`
const ArtistImage = styled.img` 
  height: 100px;
  width: 100px;
  object-fit: cover;
`

const TextBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  margin-left: 10px;
`
const ResultName = styled.div`
  font-weight: bold;
  font-size: 18px;
`
const DetailsBorder = styled.div`
  display: flex;  
  font-size: 14px;
`
  
