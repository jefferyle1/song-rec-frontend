import React, { Component, useEffect } from 'react';
import { search } from './utils';
import Movies from './Movies';
import { useState } from 'react';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';

function App () { 
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const songSearch = async (val) => { 
    setLoading(true);

    const res = await search(val);
    
    const movies = res;

    setMovies(movies);
    setLoading(false);

};

  const changeHandler = async (event) => { 
    songSearch(event.target.value);
    setValue(event.target.value)
  };

  function RenderMovies() { 
    let moviesComp = <h1>There's no movies</h1>;
    
    if (movies != null) {
      moviesComp = <Movies list={movies} />;
    } 
    
    return moviesComp;
  }

  const manageAccessToken = async () => { 
    if (localStorage.getItem("accessToken") == null) {
      const res = await axios.get("http://127.0.0.1:5000/auth");

      localStorage.setItem("accessToken", res.data);
      console.log(res.data);
    }


  }; 
  useEffect(() => {
    manageAccessToken();
  
 
  });

  return ( 
    <div>        
        <DebounceInput
          value={value}
          onChange={event => changeHandler(event)}
          debounceTimeout={500}
          placeholder="Type something to search"/>
        
        <RenderMovies />

    </div>

  );
}

export default App;