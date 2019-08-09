import * as axios from 'axios';

import { URL_MOVIE, SET_MOVIES, IS_LOADING, LOADING_FAIL } from '../constance';

export const isLoading = (isLoading) => ({ type: IS_LOADING, isLoading });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const loadingFail = () => ({ type: LOADING_FAIL });

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading(true));
        axios.get(URL_MOVIE)
            .then( ({ data }) => { 
                dispatch(setMovies(data.movie));
                dispatch(isLoading(false));
            })
            .catch(error => {
                dispatch(loadingFail());
                console.error(error)});
    }
} 
