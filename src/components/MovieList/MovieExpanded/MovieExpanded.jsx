import React, { Component } from 'react';
import styles from './MovieExpanded.module.scss';
import Placeholder from '../MovieCard/Placeholder.png';

class MovieExpanded extends Component {

    state = {
        extendedData: {}
    }
    componentDidMount() {
        console.log(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${this.props.movieData.imdbID}`)
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${this.props.movieData.imdbID}`)
        .then(response => response.json())
        .then(data => {this.setState({extendedData: data})})
        .catch(error => console.log(error))
    }

    renderData = () => {
        if (this.state.extendedData) { 
            const { Poster, Title, Year, Rated, Plot, Genre, Ratings } = this.state.extendedData;
            return (
                <div className={styles.dataContainer}>
                    {/* <div className={styles.imageDiv}> */}
                        <img src={Poster !== 'N/A' ? Poster : Placeholder} alt="Movie Poster"/>
                    {/* </div> */}
                    <div className={styles.movieText}>
                        <h3>{Title} ({Year})</h3>
                        <p>{Plot}</p>
                        <p>{Genre}</p>
                    </div>
                </div>
            )
        }
    }
    
    render() { 
        return ( 
            <div className={styles.MovieExpanded} onClick={this.props.toggleExpand}>
                <p className={styles.exitCross} onClick={this.props.toggleExpand}>x</p>
                {this.renderData()}
            </div>
         );
    }
}
 
export default MovieExpanded;