import axios from 'axios';

const prevResults = {
  "track": {}, 
  "album": {},
  "artist": {}
};

const spotifySearchRequest = () => {
  let cancel;

  return async (query, searchType) => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();

  
    let searchLimit; 
    if (searchType == "track") { 
      searchLimit = 5;  
    } else if (searchType == "album") {
      searchLimit = 10; 
    }  else { 
      searchLimit = 3;
    }

    const searchOptions = {
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${query}&type=${searchType}&limit=${searchLimit}`,
      headers: {
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
      }
    }

    try {

      // if query has already been done, don't make request use the data that's stored
      if (prevResults[searchType][query]) {
        return prevResults[searchType][query]; 
      }

      // request is made
      const requestResults = await axios(searchOptions, { cancelToken: cancel.token });

      let data;
      if (searchType == "track") { 
        data = requestResults.data["tracks"]["items"];
      } else if (searchType == "album") { 
        data = requestResults.data["albums"]["items"];
      } else if (searchType == "artist") { 
        data = requestResults.data["artists"]["items"];
      }

      prevResults[searchType][query] = data;
      return data;


    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // Handle usual errors

        if (error.message.includes("401")) { 
          const requestAccessToken = await axios.get("http://127.0.0.1:5000/spotifyAuth");
          localStorage.setItem("accessToken", requestAccessToken.data);
          searchOptions.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;

          const requestResults = await axios(searchOptions, { cancelToken: cancel.token });

          let data;
          if (searchType == "track") { 
            data = requestResults.data["tracks"]["items"];
          } else if (searchType == "album") { 
            data = requestResults.data["albums"]["items"];
          } else if (searchType == "artist") { 
            data = requestResults.data["artists"]["items"];
          }
          prevResults[searchType][query] = data;
          return data;
        }
        
        
        console.log('Something went wrong: ', error.message);
      }
    }
  };
};

export default spotifySearchRequest();
