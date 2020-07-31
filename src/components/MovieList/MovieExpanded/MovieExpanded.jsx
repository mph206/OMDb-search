import React, { Component } from 'react';
import styles from './MovieExpanded.module.scss';
import Placeholder from '../MovieCard/Placeholder.jpg';
import Rotten from './Rotten_Tomatoes.svg';
import IMDb from './IMDb.svg';
import Metacritic from './Metacritic.svg';


class MovieExpanded extends Component {

    state = {
        
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${this.props.apiKey}&i=${this.props.movieData.imdbID}`)
        .then(response => response.json())
        .then(data => {this.setState({extendedData: data})})
        .catch(error => console.log(error))
    }   
    
    //SX300
    renderData = () => {
        if (this.state.extendedData) { 
            const { Poster, Title, Year, Plot, Genre } = this.state.extendedData;
            return (
                <div className={styles.dataContainer}>
                    <img className={styles.poster} src={Poster !== 'N/A' ? Poster : Placeholder} alt="Movie Poster"/> 
                    <div className={styles.movieText}>
                        <h3>{Title} ({Year})</h3>
                        <p>{Plot}</p>
                        <p>{Genre}</p>
                        <section className={styles.ratings}>
                            {this.mapRatings()}
                        </section>
                    </div>
                </div>
            )
        }
    }

    mapRatings = () => {
        return this.state.extendedData.Ratings.map((item, index) => {
            return (
                <div className={styles.rating} key={index}>
                    {this.getRatingLogo(item.Source)}
                    <p>{item.Value}</p>
                </div>
            )
        })
    }

    getRatingLogo = (source) => {
        if (source === 'Rotten Tomatoes') return <img src={Rotten} alt='Rotten Tomatoes'></img> 
        else if (source === 'Metacritic') return <img src={Metacritic} alt='Metacritic'></img>
        else if (source === 'Internet Movie Database') return <img src={IMDb} alt='IMDb'></img> 
        else return <p>{source}</p>
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