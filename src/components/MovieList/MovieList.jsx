import React, { Component } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.scss';

class MovieList extends Component {
    renderCards = () => {
        return this.props.movieData ? this.props.movieData.map((movie, index) => {
            return (
                <MovieCard movieData={movie} key={index} apiKey={this.props.apiKey}/>
            )
        })
        : <h2>Search for a movie</h2>
    }

    render() { 
        return ( 
            <div className={styles.MovieList}>
                {this.renderCards()}
            </div>
         );
    }
}
 
export default MovieList;