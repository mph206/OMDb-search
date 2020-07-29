import React, { Component } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.scss';

class MovieList extends Component {
    renderCards = () => {
        return this.props.movieData ? this.props.movieData.map((movie, index) => {
            return (
                <MovieCard movieData={movie} key={index}/>
            )
        })
        : null
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