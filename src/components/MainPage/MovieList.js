import React from 'react';

export const MovieList = ({ movie }) => {
    return (
        <div >
            <img src={movie.poster} alt="movie poster" />
            <div className='movie-title'>{movie.title}</div>
        </div>
    )
 }