import React, { Component } from 'react';
import { search } from './utils';
import Movies from './Movies';

class App extends Component {
  state = {
    movies: null,
    loading: false,
    value: ''
  };

  search = async val => {
    
    this.setState({ loading: true });

    const res = await search(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = res;

    this.setState({movies: movies})
    this.setState({loading: false });
  };

  
  onChangeHandler = async event => {
    // calls search function using value in search bar
    this.search(event.target.value);
    // updates search bar text with user input
    this.setState({ value: event.target.value });
  };


  get renderMovies() {

    let movies = <h1>There's no movies</h1>;
    
    if (this.state.movies != null) {
      movies = <Movies list={this.state.movies} />;
    } 
    
    return movies;
  }

  render() {
    return (
      <div>
        
        <input
          value={this.state.value}
          onChange={event => this.onChangeHandler(event)}
          placeholder="Type something to search"
        />
        
        {this.renderMovies}


      </div>
    );
  }
}

export default App;