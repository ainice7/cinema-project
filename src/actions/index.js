import * as axios from 'axios';

import { URL_MOVIE, SET_MOVIES } from '../constance';
import { isLoading, loadingFail } from './general';

export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading(true));
        axios.get(URL_MOVIE)
            .then( ({ data }) => { 
                dispatch(setMovies(data.movie));
                dispatch(isLoading(false));
            })
            .catch(error => {
                dispatch(loadingFail(true));
                console.error(error)});
    }
} 
