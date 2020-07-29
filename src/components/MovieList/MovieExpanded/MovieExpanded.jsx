import React, { Component } from 'react';
import styles from './MovieExpanded.module.scss';
import Placeholder from '../MovieCard/Placeholder.png';

class MovieExpanded extends Component {
    
    render() { 
        const { Poster, Title, Year, Type} = this.props.movieData;
        return ( 
            <div className={styles.MovieExpanded}>
                <img src={Poster !== 'N/A' ? Poster : Placeholder} alt="Movie Poster"/>
                <h3>{Title} - {Year}</h3>
            </div>
         );
    }
}
 
export default MovieExpanded;