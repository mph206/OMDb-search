import React, { Component } from 'react';
import styles from './MovieCard.module.scss';
import Placeholder from './Placeholder.png';

class MovieCard extends Component {
    
    render() { 
        const { Poster, Title, Year, Type} = this.props.movieData;
        return ( 
            <div className={styles.movieCard}>
                <img src={Poster !== 'N/A' ? Poster : Placeholder} alt="Movie Poster"/>
                <h3>{Title} - {Year}</h3>
            </div>
         );
    }
}
 
export default MovieCard;