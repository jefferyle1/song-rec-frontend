import styled from 'styled-components'

export default function RecDetails( {data}) { 
  
  if (data["postType"] == "song") {
    
    let albumName = data["albumName"];
    
    if (albumName == ["artistName"]) { 
      albumName = "Self-Titled Album";
    }

    return (
            <Border>
            <Image src={data["imageURL"]} />
            <TextBorder>
                <ResultName> {data["songName"]} </ResultName>
                <DetailsBorder> 
                    {data["artistName"]} • {albumName} • {data["year"]} 
                </DetailsBorder>
            </TextBorder>
            </Border>
    );

  } else if (data["postType"] == "album") { 

    return (
        <Border>
            <Image src={data["imageURL"]} />
  
          <TextBorder>
            <ResultName> {data["albumName"]} </ResultName>
            <DetailsBorder> 
              {data["artistName"]} • {data["year"]} 
            </DetailsBorder>
          </TextBorder>
       
        </Border>
      ); 
        
  }  else if (data["postType"] == "artist") { 
    

    return (
      <Border>

        <Image src={data["imageURL"]} />
    
        <TextBorder>
          <ResultName> {data["artistName"]} </ResultName>

        </TextBorder>
       
      </Border>
     ); 

  }
};
  

const Border = styled.div`
    display: flex;
    flex-direction: row;
    width: 29.5vw;
    padding: 5px; 
`

const Image = styled.img` 
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
  
