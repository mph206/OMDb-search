import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';

class App extends Component {
  state = {
    apiKey: process.env.REACT_APP_API_KEY,
    // movieData: [],
    searchTerm: '',
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${this.state.apiKey}&type=movie&s=star+Wars`)
    .then(response => response.json())
    .then(data => this.setState({movieData: data.Search}))
    .catch(error => console.log(error))
  }
  
  searchTitle = (event) => {
    const searchTerm = event.target.value.split(' ').join('+'); // need to add year
    console.log(searchTerm);
    fetch(`http://www.omdbapi.com/?apikey=${this.state.apiKey}&type=movie&s=${searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({movieData: data.Search}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Nav handleSearch={this.searchTitle}/>
        <MovieList movieData={this.state.movieData}/>
      </div>
    );
  }
}

export default App;
