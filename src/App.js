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
    const indexOfYearStart = event.target.value.search(/[0-9][0-9][0-9][0-9]/);
    let searchArray = [event.target.value];
    console.log(indexOfYearStart)
    indexOfYearStart !== -1 && indexOfYearStart === 0 
    ? searchArray = [event.target.value.substring(5).split(' ').join('+'), event.target.value.substring(0,4)]
    : searchArray = [event.target.value.substring(0, indexOfYearStart - 1).split(' ').join('+'), event.target.value.substring(indexOfYearStart)]
    // console.log(searchArray)
    // console.log(`http://www.omdbapi.com/?apikey=${this.state.apiKey}&type=movie&s=${searchArray[0]}&y=${searchArray[1]}`);
    fetch(`http://www.omdbapi.com/?apikey=${this.state.apiKey}&type=movie&s=${searchArray[0]}&y=${searchArray[1]}`)
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
