import React from 'react';
import { MovieSession } from './MovieSession/MovieSession';



export const SessionsBlock = ({ moviesOnDate }) => {
    return (
        moviesOnDate.map((elem) => (<MovieSession key={elem._id} session={elem}/>))
    );
};