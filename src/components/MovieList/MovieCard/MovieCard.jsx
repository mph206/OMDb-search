import React, { Component } from 'react';
import styles from './MovieCard.module.scss';
import Placeholder from './Placeholder.jpg';
import MovieExpanded from '../MovieExpanded';

class MovieCard extends Component {
    state = {
        displayExpand: false,
    }

    expandMovie = () => {
        return this.state.displayExpand ? <MovieExpanded apiKey={this.props.apiKey} movieData={this.props.movieData} toggleExpand={this.toggleExpand}/> : null;
    }

    toggleExpand = () => {
        this.setState({displayExpand: !this.state.displayExpand})
    }

    render() { 
        const { Poster, Title, Year } = this.props.movieData;
        return ( 
            <>
                <div className={styles.movieCard} onClick={this.toggleExpand}>
                    <img src={Poster !== 'N/A' ? Poster : Placeholder} alt="Movie Poster"/>
                    <h3>{Title} ({Year})</h3>
                </div>
                {this.expandMovie()}
            </>
        );
    }
}
 
export default MovieCard;