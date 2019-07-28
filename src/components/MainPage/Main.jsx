import React from 'react';
import { connect }  from 'react-redux';

import { MovieList } from './MovieList';
import './MainPage.css';

export const MainPage = ({ movies }) => (
       <div className="movie-list">
           {movies.map( el => <MovieList key={el._id} movie={el} /> )}
       </div>
)


const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);