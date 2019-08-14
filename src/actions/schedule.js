import * as axios from 'axios';

import { URL_SESSION, SET_SESSIONS, URL_ROOMS, SET_ROOMS } from '../constance';
import { isLoading, loadingFail } from './general';

export const setSessions = (sessions) => ({ type: SET_SESSIONS, payload: sessions });
export const setRooms = (rooms) => ({ type: SET_ROOMS, payload: rooms });

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading(true));
        Promise.all([axios.get(URL_SESSION), axios.get(URL_ROOMS)])
        
            .then( ([sessions, rooms]) => { 
                dispatch(setSessions(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
                dispatch(isLoading(false));
            })
            .catch(error => {
                dispatch(loadingFail());
                console.error(error)});
    }
} 