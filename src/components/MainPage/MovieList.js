import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movie }) => {
    return (
        <div className="movie-preview" >
            <img src={movie.poster} alt="movie poster" />
            
            {/* <p className='movie-tittle' ><span>{movie.title}</span></p> */}
            <div className="blackout" >
                <Link className='movie-tittle' to={`movie/${movie._id}`}><span>{movie.title}</span> </Link>
            </div>
        </div>
    )
 }