import React, { useState } from 'react';
import { connect }  from 'react-redux';


import { MovieList } from './MovieList';
import 'antd/dist/antd.css';
import './MainPage.css';
import {Filter} from './Filter';

export const MainPage = ({ movies, genres }) => {

    const [filteredMovies, setFilteredMovies] = useState([]);

    return(
        <React.Fragment>
            <div className="movie-top">
                <h1>TODAY IN CINEMA</h1>
                <Filter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies} />
            </div>
            <div className={`movie-list ${ filteredMovies.length ? "jc-fs" : ""}`} >
                { filteredMovies.length 
                    ? filteredMovies.map(el => <MovieList key={el._id} movie={el} />)
                    : movies.map(el => <MovieList key={el._id} movie={el} />)
                }
            </div>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);