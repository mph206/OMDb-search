import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from './components/Nav';
import MovieList from './components/MovieList';

class App extends Component {
  state = {
    searchTerm: '',
    sortAscending: true,
    movieData: [],
  }

  componentDidMount() {
    fetch(`https://enigmatic-garden-24045.herokuapp.com/omdb?t=movie&s=star+wars`)
    .then(response => response.json())
    .then(data => this.setState({movieData: data.Search}))
    .catch(error => console.log(error))
    
  }

  handleSort = () => {
    this.setState({sortAscending: !this.state.sortAscending}, this.sortByYear())
  }

  sortByYear = () => {
    const sortedArray = this.state.movieData.sort((a, b) => {
      let x = parseInt(a['Year']);
      let y = parseInt(b['Year']);
      return (x < y ? 1 : x > y ? -1 : 0);
    })
    this.state.sortAscending 
    ? this.setState({movieData: sortedArray})
    : this.setState({movieData: sortedArray.reverse()})
 }
  
  searchTitleAndYear = (event) => {
    const indexOfYearStart = event.target.value.search(/[0-9][0-9][0-9][0-9]/);
    let searchArray = [event.target.value];
    let apiRequest = '';
    if (indexOfYearStart !== -1) {
      if (indexOfYearStart === 0) {
        searchArray = [event.target.value.substring(5).split(' ').join('+'), event.target.value.substring(0,4)];
      } else {
        searchArray = [event.target.value.substring(0, indexOfYearStart - 1).split(' ').join('+'), event.target.value.substring(indexOfYearStart)];
      } 
      apiRequest = `https://enigmatic-garden-24045.herokuapp.com/omdb?type=movie&s=${searchArray[0]}&y=${searchArray[1]}`
    } else {
      apiRequest = `https://enigmatic-garden-24045.herokuapp.com/omdb?type=movie&s=${event.target.value.split(' ').join('+')}`
    }
    this.fetchResults(apiRequest)
  }

  fetchResults = (apiRequest) => {
    fetch(apiRequest)
    .then(response => response.json())
    .then(data => this.setState({movieData: data.Search}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className={styles.App}>
        <Nav handleSearch={this.searchTitleAndYear} handleSort={this.handleSort} sortAscending={this.state.sortAscending}/>
        <MovieList movieData={this.state.movieData}/>
      </div>
    );
  }
}

export default App;
