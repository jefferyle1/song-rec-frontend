import axios from 'axios';

const prevResults = {};

const makeRequestCreator = () => {
  let cancel;

  return async query => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();

    const searchOptions = {
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${query}&type=track&limit=7`,
      headers: {
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
      }
    }

    try {

      // if query has already been done, don't make request use the data that's stored
      if (prevResults[query]) {
        return prevResults[query]; 
      }

      // request is made
      const requestSongs = await axios(searchOptions, { cancelToken: cancel.token });

      const data = requestSongs.data["tracks"]["items"];
      prevResults[query] = data;
      return data;


    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // Handle usual errors

        if (error.message.includes("401")) { 
          const requestAccessToken = await axios.get("http://127.0.0.1:5000/auth");
          localStorage.setItem("accessToken", requestAccessToken.data);
          searchOptions.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;

          let requestSongs = await axios(searchOptions, { cancelToken: cancel.token });

          const data = requestSongs.data["tracks"]["items"];
          prevResults[query] = data;
          return data;
        }
        
        
        console.log('Something went wrong: ', error.message);
      }
    }
  };
};

export const search = makeRequestCreator()
