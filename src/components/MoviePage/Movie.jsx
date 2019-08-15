import React, { Component } from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom';

import './Movie.css';
import Fail from '../Common/Fail';
import { dateOptions } from '../../constance';

class Movie extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        const { match, movies } = this.props;
        const movieId = match.params.id;
        const movie = movies.find(el => el._id === movieId );

        this.setState({ movie });
        
    } 

    tailCut = (arr) => ((arr[arr.length-1] === "") ? arr.join(', ').slice(0, -2) : arr.join(', '));

    render() {
        const { movie } = this.state;
        if (!movie) {
            return <Fail />
        }
        const actors = movie.actors ? this.tailCut(movie.actors) : '';
        const country = movie.country ? this.tailCut(movie.country) : '';
        const genre = movie.genre ? this.tailCut(movie.genre) : '';
        
        return <div className="movie-page">
            <h1>{movie.title}</h1>
            <div className="movie-info">
                <div className="movie-poster" >
                    <img src={movie.poster} alt="movie-poster" />
                    <Link to="/sessions" className="btn-buy">Buy Tickets</Link>
                </div>
                <div className="about-movie" >
                    <div>
                        <div>Возраст: </div>
                        <div>{movie.age}</div>
                    </div>
                    <div>
                        <div>Период: </div>
                        <div>{new Date(movie.rentStart).toLocaleString("ru", dateOptions)} - {new Date(this.state.movie.rentEnd).toLocaleString("ru", dateOptions)}</div>
                    </div>
                    <div>
                        <div>Язык: </div>
                        <div>{movie.language}</div>
                    </div>
                    <div>
                        <div>Жанр: </div>
                        <div>{genre}</div>
                    </div>
                    <div>
                        <div>Длительность: </div>
                        <div>{movie.long}</div>
                    </div>
                    <div>
                        <div>Страна: </div>
                        <div>{country}</div>
                    </div>
                    <div>
                        <div>В ролях: </div>
                        <div>{actors}</div>
                    </div>
                    <div>{movie.description}</div>
                    <div><iframe title={movie.title} 
                                width="560" 
                                height="315" 
                                src={movie.trailer} 
                                frameBorder="0" 
                                allow="autoplay; encrypted-media" 
                                allowFullScreen
                        ></iframe></div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);